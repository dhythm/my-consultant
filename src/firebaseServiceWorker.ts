export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      Notification.requestPermission(function (result) {
        console.log({ result });
        if (result !== 'granted') {
          console.log('');
        } else {
          navigator.serviceWorker.register('/firebase-messaging-sw.js').then(
            function (registration) {
              console.log(
                'firebase-messaging-sw.js registration successful with scope: ',
                registration.scope,
              );
            },
            function (err) {
              console.log(
                'firebase-messaging-sw.js registration failed: ',
                err,
              );
            },
          );
        }
      });
    });
  }
}
