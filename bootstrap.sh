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
ensure_symlink ~/.dotfiles/.atom ~/.atom

# ==============================================================================
# SET UP PACKAGES
# ==============================================================================

header "Setting up packages"

# Shell
ensure_repo ~/.oh-my-zsh git@github.com:robbyrussell/oh-my-zsh.git
ensure_symlink ~/.oh-my-zsh/custom/plugins/pure/async.zsh /usr/local/share/zsh/site-functions/async
ensure_repo ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting git@github.com:zsh-users/zsh-syntax-highlighting.git

# Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install hub
brew update

# Shell
brew install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# Set ZSH as the default shell
chsh -s /bin/zsh

# Create a Sites directory
# This is a default directory for macOS user accounts but doesn't comes pre-installed
[ -d $HOME/Repositories ] || mkdir $HOME/Repositories
[ -d $HOME/Sites ] || mkdir $HOME/Sites


# ==============================================================================
# INSTALL APPS
# ==============================================================================

header "Installing apps"

# Essentials
# brew cask install dropbox
# brew cask install one-password
# brew cask install slack
# brew cask install atom
# brew cask install sketch
# brew cask install bartender
# brew cask install framer
# brew cask install tower
# brew cask install omnifocus

# ==============================================================================
# macOS
# ==============================================================================

header "Tweaking macOS Preferences"

source macos
