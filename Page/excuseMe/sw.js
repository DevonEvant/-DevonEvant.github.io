const Cache = {
    name: 'TestCache',
    file: []
}

self.addEventListener('install', (e_install) => {

    e_install.waitUntil(() => {

        caches.open(Cache.name)
            .then((e_cache) => {
                e_cache.addAll(Cache.file)
            })
    });

})