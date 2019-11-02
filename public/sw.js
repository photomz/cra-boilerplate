/* eslint-disable no-undef */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

if (workbox) console.log('Yay! Workbox is loaded 🎉');
else console.log('Boo! Workbox didn\'t load 😬');

workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
  prefix: 'react',
  suffix: 'app',
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'), {
  blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
});

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cra-images',
  }),
);

workbox.routing.registerRoute(
  /\/api\/.*\/*.json/,
  new workbox.strategies.NetworkOnly({
    plugins: [
      new workbox.backgroundSync.Plugin('post-dynamo-queue', {
        maxRetentionTime: 2 * 24 * 60, // Retry for max of 2 days (specified in minutes)
      }),
    ],
  }),
  'POST',
);

workbox.routing.setDefaultHandler(({ url, event, params }) => {
  console.log(`Boo 😬! No route found for url ${url}, params ${params}, and event ${event}.`);
});

workbox.routing.setCatchHandler(({ url, event, params }) => {
  console.log(
    `Boo 😬! Error thrown when processing route with url ${url}. params ${params} and event ${event}.`,
  );
});
