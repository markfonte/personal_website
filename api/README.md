## Install
Create DB script requires sqlite3:

```
$ sudo apt install sqlite3
```

Git hooks require ruby:
```
$ sudo apt install ruby
```

From `/api` directory:

```
$ pm2 start npm --name "api" -- start
```