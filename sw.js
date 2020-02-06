var cacheName = 'guide-pubg';
var filesToCache = [
	'/pwa/',
	'/pwa/index.html',
    '/pwa/intro.html',
    '/pwa/control.html',
	'/pwa/css/style.css',
	'/pwa/js/main.js',
    '/pwa/js/install.js',
    '/pwa/images/index/bg_battleground_v3.jpg',
    '/pwa/images/index/btn_intro.png',
    '/pwa/images/index/img_intro_m_v2.png',
    '/pwa/images/index/img_logo_v2.jpg',
    '/pwa/images/intro/img_page.jpg',
    '/pwa/images/intro/intro1.jpg',
    '/pwa/images/intro/intro2.jpg',
    '/pwa/images/control/control1.png',
    '/pwa/images/control/control2.PNG'
];

self.addEventListener('install', function(e){
    console.log("install");
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener('fetch', function(e){
    console.log("fetch", e);
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});

