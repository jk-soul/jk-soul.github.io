/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5a56516a9fd967d6b526777f41d3a575"
  },
  {
    "url": "assets/css/0.styles.f847eb15.css",
    "revision": "3a95372483ca7659c5af0e5469e977f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8f97ce2.js",
    "revision": "146e6a05d0344088c1fcb2ed252787c7"
  },
  {
    "url": "assets/js/2.2d1126fb.js",
    "revision": "b9edda5a821abddd40478e025603c30d"
  },
  {
    "url": "assets/js/3.7b02f136.js",
    "revision": "fbb2248eb75e9bef4b620b961f5826f5"
  },
  {
    "url": "assets/js/4.842db670.js",
    "revision": "4482c5dfde6886411f224689c332e028"
  },
  {
    "url": "assets/js/5.0157bcba.js",
    "revision": "5d9482e9d8af0ff13c4394cadc4f8f0b"
  },
  {
    "url": "assets/js/6.9dcc84dd.js",
    "revision": "1ee344652ba49a11dbe0c4c2b8fbdc5c"
  },
  {
    "url": "assets/js/7.ac980b79.js",
    "revision": "0b2109b652a71b81e08c202f1aeb8ac3"
  },
  {
    "url": "assets/js/8.558be74d.js",
    "revision": "478d7a04e34f985d905cc58afe3b6ae8"
  },
  {
    "url": "assets/js/9.46a37131.js",
    "revision": "89208cbd9ed1e0f44fd96ba468cdcaeb"
  },
  {
    "url": "assets/js/app.b4a5f466.js",
    "revision": "06f51b2a78b4147898cf0e4e2b7a02f1"
  },
  {
    "url": "css/index.html",
    "revision": "ebb1065fda9e49b11ef9489277e84489"
  },
  {
    "url": "first.html",
    "revision": "b12c08571fa51961e27f4c5c99b291e1"
  },
  {
    "url": "guide.html",
    "revision": "af0ffa4704b9b31f863257f933491306"
  },
  {
    "url": "html/index.html",
    "revision": "9984c4f4e4ef0ab5bc2923b84b94b9ec"
  },
  {
    "url": "images/photo.png",
    "revision": "820a58ab0f0c2dd0eb81e489569eae45"
  },
  {
    "url": "index.html",
    "revision": "0ff0f736f24ac53f5fda465518c06709"
  },
  {
    "url": "others/index.html",
    "revision": "4aadc96ca508e438dc8ad1c7bfe85262"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
