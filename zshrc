export PATH=""

# Load default PATH
if [ -x /usr/libexec/path_helper ]; then eval "$(/usr/libexec/path_helper -s)"; fi
if [ -f /etc/environment ]; then source /etc/environment; fi

# Git commands
alias g="hub"
alias delete-local-branch='git branch -D'
alias delete-remote-branch='git push origin --delete'
alias cleanup-remote-branches='git remote prune origin'
alias cleanup-local-branches='git branch --merged | grep -v "\*" | xargs -n 1 git branch -d'
alias vim-conflicts='vim $(git diff-files --name-only -0)'

function strip-diff {
  (
    set -e
    git diff-files --name-only -0 | while read line; do
      target=$(tempfile)
      git stripspace < "$line" > "$target"
      cat "$target" > "$line"
      rm "$target"
    done
  )
}

[[ -s "$HOME/.profile" ]] && source "$HOME/.profile" # Load the default .profile

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
