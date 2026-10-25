const CACHE_NAME = 'portfolio-media-v1';

const PRECACHE_MEDIA = [
  '/videos/hero-1.mp4',
  '/videos/hero-1-poster.webp',
  '/videos/hero-2-poster.webp',
  '/videos/hero-3-poster.webp',
  '/videos/hero-4-poster.webp',
  '/videos/feature-1-poster.webp',
  '/videos/feature-2-poster.webp',
  '/videos/feature-3-poster.webp',
  '/videos/feature-4-poster.webp',
  '/videos/feature-5-poster.webp',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Precache critical hero video and posters
      try {
        await cache.addAll(PRECACHE_MEDIA);
      } catch (err) {
        console.warn('Pre-cache warning (some files may be fetched on demand):', err);
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Intercept video and poster asset requests
  const isVideoOrPoster =
    url.pathname.startsWith('/videos/') ||
    url.pathname.startsWith('/img/') ||
    url.pathname.endsWith('.mp4') ||
    url.pathname.endsWith('.webp');

  if (!isVideoOrPoster) return;

  event.respondWith(handleMediaFetch(event.request));
});

async function handleMediaFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  // Match ignoring range header query if needed
  const cachedResponse = await cache.match(request.url);

  if (cachedResponse) {
    const rangeHeader = request.headers.get('range');
    if (rangeHeader) {
      return createPartialResponse(cachedResponse, rangeHeader);
    }
    return cachedResponse;
  }

  // Not in cache, fetch from network
  try {
    const networkResponse = await fetch(request);

    // Only cache successful full GET responses (status 200)
    if (networkResponse && networkResponse.status === 200) {
      const responseToCache = networkResponse.clone();
      cache.put(request.url, responseToCache);
    }

    return networkResponse;
  } catch (error) {
    console.error('Fetch failed for media:', request.url, error);
    // If network fails and cached response is available without range, return it
    if (cachedResponse) return cachedResponse;
    throw error;
  }
}

async function createPartialResponse(cachedResponse, rangeHeader) {
  const buffer = await cachedResponse.arrayBuffer();
  const total = buffer.byteLength;

  const parts = rangeHeader.replace(/bytes=/, '').split('-');
  const start = parseInt(parts[0], 10) || 0;
  const end = parts[1] ? parseInt(parts[1], 10) : total - 1;

  if (start >= total || end >= total) {
    return new Response(null, {
      status: 416,
      statusText: 'Range Not Satisfiable',
      headers: { 'Content-Range': `bytes */${total}` },
    });
  }

  const chunk = buffer.slice(start, end + 1);

  return new Response(chunk, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'video/mp4',
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Content-Length': chunk.byteLength.toString(),
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
