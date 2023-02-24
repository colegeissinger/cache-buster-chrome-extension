(function() {
  if ('URLSearchParams' in window) {
    // Get the current query string, if one is set.
    const searchParams = new URLSearchParams(window.location.search);

    // Generate a unique 32 bit integer.
    const uint = Math.floor((Date.now() * Math.random()) / 1000);

    // Add our unique integer to the browser to a query string. Ensure this is added to any existing query string.
    searchParams.set('cache-buster', uint);

    // Update the browser address bar with our updated query string and refresh the page.
    window.location.search = searchParams.toString();
  } else {
    console.log('Oops! The "Cache Buster" extension requires URLSearchParams.');
  }
})();