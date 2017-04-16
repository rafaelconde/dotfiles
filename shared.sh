#!/usr/bin/env bash

set -e

log(){
  echo -e "$(tput setaf 2)> $*$(tput sgr0)"
}

warn(){
  echo -e "$(tput setaf 1)> $*$(tput sgr0)"
}

header(){
  echo
  echo -e "$(tput bold)$(tput setaf 6)### $* ###$(tput sgr0)"
  echo
}

ensure_symlink(){
  local source=$1
  local destination=$2

  if [ -h "$destination" ]
  then
    log "$destination is already symlinked"
  else
    log "Symlinking $source to $destination"
    ln -s -f "$source" "$destination"
  fi
}

ensure_directory(){
  local dir_path=$1

  if [ -d "$dir_path" ]
  then
    log "$dir_path already exists"
  else
    log "$dir_path does not exist. Creating."
    mkdir -p "$dir_path"
  fi
}

ensure_repo(){
  local repo_path=$1
  local repo_url=$2

  ensure_directory "$repo_path"

  (
    cd "$repo_path"
    if git rev-parse --is-inside-work-tree > /dev/null && [ "$repo_path" =  "$(git rev-parse --show-toplevel)" ]
    then
      log "$repo_path is a already a git repository. Updating."
      git pull origin master
    else
      log "$repo_path isn't a git repository. Creating."
      git clone "$repo_url" "$repo_path"
    fi
  )
}
