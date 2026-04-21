const params = new URLSearchParams(window.location.search);
const redirectUrl = params.get("redirect") || "https://www.facebook.com";
const flash = document.getElementById("flash");

const techArticles = [
  "https://www.technologyreview.com/2024/01/05/1086203/whats-next-for-ai-in-2024/",
  "https://css-tricks.com/the-expanding-matrix-of-css-displays/",
  "https://www.smashingmagazine.com/2024/01/css-grid-area/",
  "https://web.dev/articles/performance-101",
  "https://www.freecodecamp.org/news/how-to-use-git-best-practices-for-beginners/",
  "https://blog.pragmaticengineer.com/the-product-minded-engineer/",
  "https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/",
  "https://martinfowler.com/articles/continuousIntegration.html",
  "https://www.brendangregg.com/blog/2024-03-17/the-fedora-linux-transition.html",
  "https://explaining.software/archive/mental-models-for-learning-programming/",
];

function goTo(url) {
  flash.classList.add("active");
  setTimeout(() => {
    chrome.runtime.sendMessage({ action: "goFacebook", url });
  }, 150);
}

document.getElementById("btn-cf").addEventListener("click", () => {
  goTo("https://codeforces.com/problemset");
});

document.getElementById("btn-lc").addEventListener("click", () => {
  goTo("https://leetcode.com/problemset/");
});

document.getElementById("btn-art").addEventListener("click", () => {
  const random = techArticles[Math.floor(Math.random() * techArticles.length)];
  goTo(random);
});

document.getElementById("btn-fb").addEventListener("click", () => {
  goTo(redirectUrl);
});
