function fetch_picture() {
    fetch('./cat_in_planet.jpg')
        .then(() => {
            console.log('fetching...');
        })
        .catch(() => {
            console.log('fetch_wronging');
        })
}

function clear_caches() {
    caches.open('testCaches')
}