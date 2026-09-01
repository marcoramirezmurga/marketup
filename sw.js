// Service worker mínimo: no cachea datos (el catálogo siempre debe venir
// fresco de Supabase), solo habilita que el navegador reconozca el sitio
// como una app instalable.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {}); // sin caché propia por ahora
