console.log('sw.js is working');

var cachesName = 'testCaches'

self.addEventListener('installed', function evenLister_install(e) {

    console.log("init caches")

    function installThread() {
        caches.open(cachesName)
            .then((e) => {
                e.addAll([
                    './caches_file/cat_in_planet.jpg'
                ]);
                console.log('照片已經匯入caches')
            });
    }

    return e.waitUntil(installThread())
})

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
        .then((caches_date) => {
            if (caches_date) {
                console.log('from caches');
                return caches_date
            } else {
                console.log('from fetch');
                return e.request
            }
        })
    )
})