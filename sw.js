var cacheName = 'guide-pubg';
var filesToCache = [
	'/',
	'/index.html',
    '/intro.html',
    '/control.html',
	'/css/style.css',
	'/js/main.js',
    '/js/install.js',
    '/images/index/bg_battleground_v3.jpg',
    '/images/index/btn_intro.png',
    '/images/index/img_intro_m_v2.png',
    '/images/index/img_logo_v2.jpg',
    '/images/intro/img_page.jpg',
    '/images/intro/intro1.jpg',
    '/images/intro/intro2.jpg',
    '/images/control/control1.png',
    '/images/control/control2.png'
];

self.addEventListener('install', function(e){
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			return cache.addAll(filesToCache);
		})
	);
    self.skipWaiting();
});

self.addEventListener('fetch', function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});

self.addEventListener('activate', function(e){
    e.waitUntil(
        caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
    ); 
    self.clients.claim();
});