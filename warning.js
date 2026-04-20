const params = new URLSearchParams(window.location.search);
const redirectUrl = params.get("redirect") || "https://www.facebook.com";

let seconds = 10;
const timerEl = document.getElementById("timer");

const interval = setInterval(() => {
  seconds--;
  timerEl.textContent = `Start wasting your fu*king time in ${seconds} ...`;
  if (seconds <= 0) {
    clearInterval(interval);
    chrome.runtime.sendMessage({ action: "goFacebook", url: redirectUrl });
  }
}, 1000);

document.body.addEventListener("click", () => {
  clearInterval(interval);
  chrome.runtime.sendMessage({ action: "goFacebook", url: redirectUrl });
});