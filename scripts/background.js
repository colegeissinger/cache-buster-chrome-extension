chrome.action.onClicked.addListener(async (tab) => {
  // Insert the JS file which will modify the browser URL.
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/bust-cache.js'],
  });
});
