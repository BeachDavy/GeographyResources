// =========================
// SERVICE WORKER — offline cache
// Caches the app shell on install, then caches every resource
// (including individual resources) on-demand as users visit them.
// Once cached, everything works with zero network requests —
// the filter has nothing to inspect or block.
// =========================

const CACHE_VERSION = 'v1';
const CACHE_NAME = 'geo-res-' + CACHE_VERSION;

// App shell — cached immediately on install
const SHELL_FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/view.html',
  '/manifest.json',
  '/favicon.ico',
  '/banner.png'
];

// Install: pre-cache the shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for same-origin assets, network-first for navigations
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip cross-origin requests (AdSense, etc.)
  if (url.origin !== self.location.origin) return;

  // Navigations: try network first (picks up updates), fall back to cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((r) => r || caches.match('/index.html'))
        )
    );
    return;
  }

  // All other same-origin GETs: cache-first (instant + offline)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
