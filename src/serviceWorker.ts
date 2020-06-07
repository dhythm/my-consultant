export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(
        function (registration) {
          // Registration was successful
          console.log({ registration });
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
          );
        },
        function (err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        },
      );
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
