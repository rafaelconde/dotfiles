const {Emitter} = require('atom')
const HostPortalBinding = require('./host-portal-binding')
const GuestPortalBinding = require('./guest-portal-binding')
const {findPortalId} = require('./portal-id-helpers')

module.exports =
class PortalBindingManager {
  constructor ({client, workspace, notificationManager}) {
    this.emitter = new Emitter()
    this.client = client
    this.workspace = workspace
    this.notificationManager = notificationManager
    this.hostPortalBindingPromise = null
    this.promisesByGuestPortalId = new Map()
  }

  dispose () {
    const disposePromises = []

    if (this.hostPortalBindingPromise) {
      const disposePromise = this.hostPortalBindingPromise.then((portalBinding) => {
        portalBinding.close()
      })
      disposePromises.push(disposePromise)
    }

    this.promisesByGuestPortalId.forEach(async (portalBindingPromise) => {
      const disposePromise = portalBindingPromise.then((portalBinding) => {
        if (portalBinding) portalBinding.leave()
      })
      disposePromises.push(disposePromise)
    })

    return Promise.all(disposePromises)
  }

  createHostPortalBinding () {
    if (this.hostPortalBindingPromise == null) {
      this.hostPortalBindingPromise = this._createHostPortalBinding()
      this.hostPortalBindingPromise.then((binding) => {
        if (!binding) this.hostPortalBindingPromise = null
      })
    }

    return this.hostPortalBindingPromise
  }

  async _createHostPortalBinding () {
    const portalBinding = new HostPortalBinding({
      client: this.client,
      workspace: this.workspace,
      notificationManager: this.notificationManager,
      didDispose: () => { this.didDisposeHostPortalBinding() }
    })

    if (await portalBinding.initialize()) {
      this.emitter.emit('did-change')
      return portalBinding
    }
  }

  getHostPortalBinding () {
    return this.hostPortalBindingPromise
      ? this.hostPortalBindingPromise
      : Promise.resolve(null)
  }

  didDisposeHostPortalBinding () {
    this.hostPortalBindingPromise = null
    this.emitter.emit('did-change')
  }

  createGuestPortalBinding (portalId) {
    let promise = this.promisesByGuestPortalId.get(portalId)
    if (promise) {
      promise.then((binding) => {
        if (binding) binding.activate()
      })
    } else {
      promise = this._createGuestPortalBinding(portalId)
      promise.then((binding) => {
        if (!binding) this.promisesByGuestPortalId.delete(portalId)
      })
      this.promisesByGuestPortalId.set(portalId, promise)
    }

    return promise
  }

  async _createGuestPortalBinding (portalId) {
    const portalBinding = new GuestPortalBinding({
      portalId,
      client: this.client,
      workspace: this.workspace,
      notificationManager: this.notificationManager,
      didDispose: () => { this.didDisposeGuestPortalBinding(portalBinding) }
    })

    if (await portalBinding.initialize()) {
      this.workspace.getElement().classList.add('teletype-Guest')
      this.emitter.emit('did-change')
      return portalBinding
    }
  }

  async getGuestPortalBindings () {
    const portalBindings = await Promise.all(this.promisesByGuestPortalId.values())
    return portalBindings.filter((binding) => binding != null)
  }

  async getRemoteEditors () {
    const remoteEditors = []
    for (const bindingPromise of this.promisesByGuestPortalId.values()) {
      const portalBinding = await bindingPromise
      remoteEditors.push(...portalBinding.getRemoteEditors())
    }

    return remoteEditors
  }

  async getActiveGuestPortalBinding () {
    const activePaneItem = this.workspace.getActivePaneItem()
    for (const [_, portalBindingPromise] of this.promisesByGuestPortalId) { // eslint-disable-line no-unused-vars
      const portalBinding = await portalBindingPromise
      if (portalBinding.hasPaneItem(activePaneItem)) {
        return portalBinding
      }
    }
  }

  async hasActivePortals () {
    const hostPortalBinding = await this.getHostPortalBinding()
    const guestPortalBindings = await this.getGuestPortalBindings()

    return (hostPortalBinding != null) || (guestPortalBindings.length > 0)
  }

  async getRemoteEditorForURI (uri) {
    const uriComponents = uri.replace('atom://teletype/', '').split('/')

    const portalId = findPortalId(uriComponents[1])
    if (uriComponents[0] !== 'portal' || !portalId) return null

    const editorProxyId = Number(uriComponents[3])
    if (uriComponents[2] !== 'editor' || Number.isNaN(editorProxyId)) return null

    const guestPortalBindingPromise = this.promisesByGuestPortalId.get(portalId)
    if (guestPortalBindingPromise) {
      const guestPortalBinding = await guestPortalBindingPromise
      return guestPortalBinding.getRemoteEditor(editorProxyId)
    } else {
      throw new Error('Cannot open an editor belonging to a portal that has not been joined')
    }
  }

  didDisposeGuestPortalBinding (portalBinding) {
    this.promisesByGuestPortalId.delete(portalBinding.portalId)
    if (this.promisesByGuestPortalId.size === 0) {
      this.workspace.getElement().classList.remove('teletype-Guest')
    }
    this.emitter.emit('did-change')
  }

  onDidChange (callback) {
    return this.emitter.on('did-change', callback)
  }
}
