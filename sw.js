// =========================
// SERVICE WORKER — offline cache
// Caches the app shell on install, then caches every resource
// (including individual resources) on-demand as users visit them.
// Once cached, everything works with zero network requests —
// the filter has nothing to inspect or block.
// =========================

const CACHE_VERSION = 'v3';
const CACHE_NAME = 'geo-res-' + CACHE_VERSION;

// App shell — cached immediately on install
const SHELL_FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/view.js',
  '/view.html',
  '/manifest.json',
  '/favicon.ico',
  '/banner.png',
  '/icon-192.png',
  '/icon-512.png'
];

// All resource index pages — pre-cached so every resource is
// available offline immediately after install, with zero network
// requests for the filter to inspect.
const RESOURCE_FILES = [
  '/g1/index.html','/g2/index.html','/g3/index.html','/g4/index.html',
  '/g5/index.html','/g6/index.html','/g7/index.html','/g8/index.html',
  '/g9/index.html','/g10/index.html','/g11/index.html','/g12/index.html',
  '/g13/index.html','/g14/index.html','/g15/index.html','/g16/index.html',
  '/g17/index.html','/g18/index.html','/g19/index.html','/g20/index.html',
  '/g21/index.html','/g22/index.html','/g23/index.html','/g24/index.html',
  '/g25/index.html','/g26/index.html','/g27/index.html','/g28/index.html',
  '/g29/index.html','/g30/index.html','/g31/index.html','/g32/index.html',
  '/g33/index.html','/g34/index.html','/g35/index.html','/g36/index.html',
  '/g37/index.html','/g38/index.html','/g39/index.html','/g40/index.html',
  '/g41/index.html','/g42/index.html','/g43/index.html','/g44/index.html',
  '/g45/index.html','/g46/index.html','/g47/index.html','/g48/index.html',
  '/g49/index.html','/g50/index.html','/g51/index.html','/g52/index.html',
  '/g53/index.html','/g54/index.html','/g55/index.html','/g56/index.html',
  '/g57/index.html','/g58/index.html','/g59/index.html','/g60/index.html',
  '/g61/index.html','/g62/index.html','/g63/index.html','/g64/index.html',
  '/g65/index.html','/g66/index.html','/g67/index.html','/g68/index.html',
  '/g69/index.html','/g70/index.html','/g71/index.html','/g72/index.html',
  '/g73/index.html','/g74/index.html','/g75/index.html','/g76/index.html',
  '/g77/index.html','/g78/index.html','/g79/index.html','/g80/index.html',
  '/g81/index.html','/g82/index.html','/g83/index.html','/g84/index.html',
  '/g85/index.html','/g86/index.html','/g87/index.html','/g88/index.html',
  '/g89/index.html','/g90/index.html','/g91/index.html','/g92/index.html',
  '/g93/index.html','/g94/index.html','/g95/index.html','/g96/index.html',
  '/g97/index.html','/g98/index.html','/g99/index.html','/g100/index.html',
  '/g101/index.html','/g102/index.html','/g103/index.html','/g104/index.html',
  '/g105/index.html','/g106/index.html','/g107/index.html','/g108/index.html',
  '/g109/index.html','/g110/index.html','/g111/index.html','/g112/index.html',
  '/g113/index.html','/g114/index.html','/g115/index.html','/g116/index.html',
  '/g117/index.html','/g118/index.html','/g119/index.html','/g120/index.html',
  '/g121/index.html','/g122/index.html','/g123/index.html','/g124/index.html',
  '/g125/index.html','/g126/index.html','/g127/index.html','/g128/index.html',
  '/g129/index.html'
];

// Install: pre-cache the shell + all resource index pages
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(SHELL_FILES).then(() =>
        // Cache resource files individually so one failure doesn't abort all
        Promise.allSettled(RESOURCE_FILES.map(f => cache.add(f)))
      )
    )
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
