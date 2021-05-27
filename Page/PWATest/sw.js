const cacheName = 'FirstCaches';
const cacheFile = ['/'];

self.addEventListener('install', event => {
    event.waitUntil(async () => {
        (await caches.open(cacheName)).addAll(cacheFile);
    })
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
        .then(cache => cache.match(event.request))
        .then(request => (request || event.request))
    );

});