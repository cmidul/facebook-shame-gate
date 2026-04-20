const allowedTabs = new Set();

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return; // main frame only

  if (allowedTabs.has(details.tabId)) {
    allowedTabs.delete(details.tabId); // allow once, then reset
    return;
  }

  const warningUrl = chrome.runtime.getURL("warning.html")
                     + "?redirect=" + encodeURIComponent(details.url);
  chrome.tabs.update(details.tabId, { url: warningUrl });

}, {
  url: [{ hostContains: "facebook.com" }]
});

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === "goFacebook") {
    allowedTabs.add(sender.tab.id); // mark this tab as allowed
    chrome.tabs.update(sender.tab.id, { url: msg.url });
  }
});