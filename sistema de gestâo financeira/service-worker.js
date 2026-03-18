// Service Worker para FinCore PWA
// Versão: 1.0

const CACHE_NAME = 'fincore-v1';
const ASSETS_TO_CACHE = [
  '/sistema de gestâo financeira/',
  '/sistema de gestâo financeira/index.html',
  '/sistema de gestâo financeira/style.CSS',
  '/sistema de gestâo financeira/script.js',
  '/sistema de gestâo financeira/manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Cache aberto:', CACHE_NAME);
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.log('[SW] Alguns recursos não puderam ser cacheados:', err);
      });
    })
  );
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptação de requisições (Network-first para dados, Cache-first para assets)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // API requests - Network first
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const cache = caches.open(CACHE_NAME);
            cache.then((c) => c.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((response) => {
            return response || new Response('Offline - dados em cache', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({ 'Content-Type': 'text/plain' })
            });
          });
        })
    );
  } else {
    // Assets - Cache first
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return new Response('Offline - recurso não disponível', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain' })
          });
        });
      })
    );
  }
});

// Background Sync (para sincronizar dados quando volta online)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-transactions') {
    event.waitUntil(syncTransactions());
  }
});

async function syncTransactions() {
  try {
    console.log('[SW] Sincronizando transações...');
    const cache = await caches.open(CACHE_NAME);
    const response = await cache.match('/api/transactions/sync');
    if (response) {
      console.log('[SW] Transações sincronizadas com sucesso');
    }
  } catch (error) {
    console.error('[SW] Erro ao sincronizar:', error);
  }
}

// Push Notifications (planejado)
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  const title = data.title || 'FinCore';
  const options = {
    body: data.body || 'Você tem uma notificação',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%237c3aed" width="192" height="192"/><text x="50%" y="50%" font-size="100" fill="white" text-anchor="middle" dominant-baseline="central" font-weight="bold">GP</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%237c3aed" width="192" height="192"/><text x="50%" y="50%" font-size="100" fill="white" text-anchor="middle" dominant-baseline="central" font-weight="bold">GP</text></svg>',
    tag: data.tag || 'notification',
    requireInteraction: data.requireInteraction || false
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Notificação click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

// Periodic Background Sync (sincronização periódica)
self.addEventListener('periodicSync', (event) => {
  if (event.tag === 'update-data') {
    event.waitUntil(
      fetch('/api/data/sync')
        .then(() => console.log('[SW] Dados atualizados periodicamente'))
        .catch((error) => console.error('[SW] Erro na sincronização periódica:', error))
    );
  }
});

console.log('[SW] Service Worker carregado e pronto');
