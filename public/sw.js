const NAME = 'my-consultant';
const VERSION = 'v1';
const CACHE_NAME = `${NAME}-${VERSION}`;
const urlsToCache = ['./index.html', './index.js'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('fetch', function (event) {
  if (
    event.request.cache === 'only-if-cached' &&
    event.request.mode !== 'same-origin'
  )
    return;
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys.map(key => {
            if (!CACHE_NAME.includes(key)) {
              return caches.delete(key);
            }
          }),
        ),
      )
      .then(() => {
        console.log(CACHE_NAME + 'activated');
      }),
  );
});
