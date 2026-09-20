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

## Run
From `/api` directory:

```sh
pm2 start "npm run start" --name "api"
```