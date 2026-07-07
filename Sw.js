self.addEventListener('push', function(e) {
    const data = e.data.json();
    e.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon || '',
            image: data.image || '',
            badge: data.badge || ''
        })
    );
});
