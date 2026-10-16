# Base44 Dev Environment

## Project Overview
Static HTML/CSS/JS "unblocked games" site. No build step, no backend, no database.
Games live in `g1/`–`g129/` directories, each with its own `index.html`.
Games g27–g100 were sourced from the HTML5GameArchive (github.com/HTML5GameArchive/gfiles).
Games g103–g129 were sourced from the Offline-HTML-Games-Pack (github.com/CoolDude2349/Offline-HTML-Games-Pack)
and MonkeyGG2 (github.com/MonkeyGG2/monkeygg2.github.io). All are self-contained single-file or
fully-bundled HTML5 games with no external dependencies, so they cannot be blocked by school filters.

## Running the app
```
docker compose -f docker-compose.base44.yml up -d
```
Serves on port 3000 via nginx (alpine). Source is bind-mounted read-only.

## Why nginx runs as root
The repo root directory has `drwx------` (700) permissions. nginx's default
worker user cannot traverse it, so `nginx.base44.conf` sets `user root;`.

## Healthcheck
Uses `wget --spider http://127.0.0.1:80/` (not `localhost`, which resolves to
IPv6 `::1` first). The nginx config listens on both IPv4 and IPv6.

## No secrets required
This is a pure static site — no external service credentials needed.

## Verification
- `curl http://localhost:3000/` → 200, serves `index.html`
- `curl http://localhost:3000/view.html` → 200
- Game pages: `curl http://localhost:3000/g1/index.html` → 200
