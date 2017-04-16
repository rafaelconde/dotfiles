# Dotfiles

Alright... still under construction (pray for me).
This was unofficially forked from [Kevin Clark's](https://github.com/vernalkick/dotfiles), and originally based off of [David Cornu's dotfiles](https://github.com/davidcornu/dotfiles).

## Installation

```shell
$ cd ~/
$ git clone git@github.com:rafaelconde/dotfiles.git
$ cd ~/dotfiles
$ ./bootstrap.sh
```

The boostrap script will symlink config files from `~/.dotfiles` into `~/` and install the following packages:

- https://github.com/robbyrussell/oh-my-zsh
- https://github.com/zsh-users/zsh-syntax-highlighting
- https://github.com/gmarik/vundle
- https://github.com/creationix/nvm

## Updating

```shell
$ cd ~/.dotfiles
$ git pull
$ ./bootstrap.sh
```
