

const CACHE_NAME = 'cachepersonajes'; 

const urlsToCache = [
    '/',
    'estilos.css',
    'index.html',
    'app.js',
    'estilos2.css',
    'personajes.html',
    'img/Peter_Griffin.webp',
    'img/Glenn.webp',
    'img/Meg_Griffin.webp',
    'img/Stewie_Griffin.webp',
    'img/Brian_Griffin.webp',
    'img/Lois_Griffin.webp',
    'img/Eliza_Pinchley.webp',
    'img/Mono_Malvado.webp',
    'img/Ernie.webp',
    'img/Chris_Griffin.webp',
    'img/Wiki-wordmark.webp',
    'img/portada.jpg',
    'iconos/android-icon-192x192.png',
    'iconos/apple-icon-57x57.png',
    'iconos/apple-icon-60x60.png',
    'iconos/apple-icon-72x72.png',
    'iconos/apple-icon-76x76.png',
    'iconos/apple-icon-114x114.png',
    'iconos/apple-icon-120x120.png',
    'iconos/apple-icon-144x144.png',
    'iconos/apple-icon-152x152.png',
    'iconos/apple-icon-180x180.png',
    'iconos/browserconfig.xml',
    'iconos/favicon-16x16.png',
    'iconos/favicon-32x32.png',
    'iconos/favicon-96x96.png',
    'iconos/favicon-256x256.png',
    'iconos/favicon.ico',
    'iconos/manifest.json',
    'iconos/ms-icon-70x70.png',
    'iconos/ms-icon-144x144.png',
    'iconos/ms-icon-150x150.png',
    'iconos/ms-icon-310x310.png'
];

self.addEventListener('install', (installEvent) => {
  
    const _app_shell = caches.open(CACHE_NAME)
    .then((cache) => cache.addAll(urlsToCache));

    installEvent.waitUntil(_app_shell);

    self.skipWaiting();

});

self.addEventListener('activate', (event) => {
   event.waitUntil(

    caches.keys().then(keys => Promise.all(

        keys.map(key => {

            if(!CACHE_NAME.includes(key)){
                return caches.delete(key);
            }
        }
        )
    ))
   );
});


////////////////ESTRATEGIAS////////////////

////////////////ONLY CACHE////////////////

// self.addEventListener('fetch', event =>{
//     event.respondWith(caches.match(event.request));
// });

////////////////ONLY network////////////////

// self.addEventListener('fetch', event =>{
//     event.respondWith(fetch(event.request));
// });

////////////////cache first////////////////

// self.addEventListener('fetch', (fetchEvent) =>{
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then((res) => {
//             return res || fetch(fetchEvent.request)
//             .catch((error) => console.log("Error en la peticion"));
//         })
//     );
// });

////////////////network first////////////////

self.addEventListener('fetch', (fetchEvent) =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res ||  caches.match(fetchEvent.request);
            
        })
    );
});