## Install
Creating DB script requires sqlite3:
```sh
sudo apt install sqlite3
```

Git hooks require ruby:
```sh
sudo apt install ruby
```

## Environment
From `/api` directory, copy `.env.example` to `.env` and set `WEDDING_PASSWORD`. That value gates the wedding page at `/ellie`.

Copy `wedding_content.example.json` to `wedding_content.json` and fill it in. It holds the wedding page content, which the API only sends after the password is entered. Keep real details out of git, because this repo is public. Each list key matches a page path such as `schedule` or `things-to-do`, and a page with no entries shows "Coming soon". Changes show up without restarting the API.

## Run
From `/api` directory:

```sh
pm2 start "npm run start" --name "api"
```