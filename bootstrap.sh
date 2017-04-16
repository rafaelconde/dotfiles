#!/usr/bin/env bash

# Use shared functions
. shared.sh

# ==============================================================================
# SET UP CONFIG FILES
# ==============================================================================

header "Setting up config files"

# Config files
ensure_symlink ~/.dotfiles/vimrc ~/.vimrc
ensure_symlink ~/.dotfiles/zshrc ~/.zshrc
ensure_symlink ~/.dotfiles/gitconfig ~/.gitconfig
ensure_symlink ~/.dotfiles/gitignore ~/.gitignore

# ==============================================================================
# SET UP PACKAGES
# ==============================================================================

header "Setting up packages"

# Shell
ensure_repo ~/.oh-my-zsh git@github.com:robbyrussell/oh-my-zsh.git
ensure_symlink ~/.oh-my-zsh/custom/plugins/pure/async.zsh /usr/local/share/zsh/site-functions/async
ensure_repo ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting git@github.com:zsh-users/zsh-syntax-highlighting.git

# Set ZSH as the default shell
chsh -s /bin/zsh

# Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install hub
brew update

# ==============================================================================
# INSTALL APPS
# ==============================================================================

header "Installing apps"

# Essentials
brew cask install dropbox
brew cask install one-password
brew cask install slack
brew cask install atom
brew cask install sketch
brew cask install bartender
brew cask install framer
brew cask install tower
brew cask install omnifocus

# ==============================================================================
# macOS
# ==============================================================================

header "Tweaking macOS Preferences"

source macos

# ==============================================================================
# SET UP ATOM
# ==============================================================================

# Symlink config files
ln -s -f ~/.dotfiles/.atom/ ~/.atom/
