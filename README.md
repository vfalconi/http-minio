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
- `MINIO_ENDPOINT` (required)
- `MINIO_PORT` (required)
- `MINIO_ACCESS_KEY` (required)
- `MINIO_SECRET_KEY` (required)

## Usage

Out of the box, the server expects a URL to follow this pattern: `[host]:[port]/[bucket-name]/[path/to/object]`.

For example, using `localhost` and the default port of `8080`, serving a static HTML file from your `my-awesome-static-assets` bucket, your url would look like `localhost:8080/my-awesome-static-assets/index.html`.
