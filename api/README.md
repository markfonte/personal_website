## Install
Creating DB script requires sqlite3:
```sh
sudo apt install sqlite3
```

Git hooks require ruby:
```sh
sudo apt install ruby
```

## Run
From `/api` directory:

```sh
pm2 start "yarn start" --name "api"
```