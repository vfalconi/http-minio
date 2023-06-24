# http-minio

A barebones ExpressJS HTTP server pointed at a Minio/S3 instance.

## Installation

- install node
- create user
- clone into `/home/[user]/opt/http-minio`
- `npm install`
- run `bin/www` as `[user]` with systemd (or whatever you want, live your life)

## Config options (`.env`)

- `APP_PORT` (default: `8080`)
- `MINIO_ENDPOINT`
- `MINIO_PORT`
- `MINIO_ACCESS_KEY`
- `MINIO_SECRET_KEY`
