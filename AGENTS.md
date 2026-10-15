# Base44 Dev Environment

## Project Overview
Static HTML/CSS/JS "unblocked games" site. No build step, no backend, no database.
Games live in `g1/`–`g26/` directories, each with its own `index.html`.

## Running the app
```
docker compose -f docker-compose.base44.yml up -d
```
Serves on port 3000 via nginx (alpine). Source is bind-mounted read-only.

## Why nginx runs as root
The repo root directory has `drwx------` (700) permissions. nginx's default
worker user cannot traverse it, so `nginx.base44.conf` sets `user root;`.

## No secrets required
This is a pure static site — no external service credentials needed.

## Verification
- `curl http://localhost:3000/` → 200, serves `index.html`
- `curl http://localhost:3000/play.html` → 200
- Game pages: `curl http://localhost:3000/g1/index.html` → 200
