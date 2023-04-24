const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.prompt('dasd');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
     // Prevent default behavior of the button
  event.preventDefault();

  // Show the install prompt
  const installPromptEvent = new Event('beforeinstallprompt');
  window.dispatchEvent(installPromptEvent);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App successfully installed');
});
