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

Copy `wedding_content.example.json` to `wedding_content.json` and fill it in. It holds the wedding page content, which the API only sends after the password is entered. Keep real details out of git, because this repo is public. Each list key matches a page path such as `schedule` or `things-to-do`, and a page with no entries shows "Coming soon". An entry with only a `heading` starts a new group on its page. Changes show up without restarting the API.

## Wedding photos
Put photos in an `api/wedding_photos/` folder, which also stays out of git, and list them under `photos` in `wedding_content.json` in the order they should appear. File names can use letters, numbers, `-` and `_`, and must end in `.jpg`, `.jpeg`, `.png`, `.webp` or `.gif`. A `caption` is optional, and a `width` and `height` in pixels stop the page from jumping while photos load. Shrink photos to about 1600 pixels on the long side and strip their location data before uploading. Browsers keep each photo for a day, so give a changed photo a new file name. After someone RSVPs, the thank-you shows one of these photos at random.

An entry on a page such as `things-to-do` can show a small round photo above its title with `"photo": "<file name>"`, using a file from the same folder. These display at 96 pixels, so a square image of about 300 pixels is plenty.

## Wedding RSVPs
Copy `wedding_guests.example.json` to `wedding_guests.json` and list each party with its guests. It also stays out of git. Saved answers are keyed by the party and guest ids, so don't change an id once guests have responded. Mark an unnamed plus-one with `"plusOne": true`, and the guest types the name when they RSVP. List any other full names a guest might type, such as a nickname or a maiden name, in `"aliases"`. A name that matches guests in more than one party finds none of them, so keep names unique across parties. The RSVP page shows "Coming soon" until this file exists.

Before adding the guest list on a server, create the RSVP tables once. From `/api/db` directory:

```sh
sqlite3 var/personal_website.sqlite3 < sql/update_nov_8_2026.sql
```

To see the responses, run `npm run rsvp-report` from `/api` directory. Add `-- --csv` for a spreadsheet.

## Test
From `/api` directory:

```sh
npm test
```

## Run
From `/api` directory:

```sh
pm2 start "npm run start" --name "api"
```