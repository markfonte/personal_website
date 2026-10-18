## Setup
###  Initialize .env variables
cd ../client/
cat .env.example # Copy output
touch .env
vim .env # Paste output and save

### Add git hooks
pwd # ~/dev/personal_website/client

cat .commit-msg | pbcopy
pbpaste > ../.git/hooks/commit-msg
vim ../.git/hooks/commit-msg
:set ff=unix

cat .pre-commit | pbcopy
pbpaste > ..git/hooks/pre-commit
vim ..git/hooks/pre-commit
:set ff=unix
