console.log('@background');

const REFRESH_INTERVAL = 1000;
let tick = 0;
let intervalId = setInterval(() => {
    chrome.runtime.sendMessage(`Background message #${tick}`, (response) => {
        console.log('@background', JSON.stringify(response));
    });
    chrome.browserAction.setBadgeText({text: ''+tick});
    ++tick;
}, REFRESH_INTERVAL);