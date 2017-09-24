chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.update({ "url": "https://www.reddit.com/r/random/top" });
});