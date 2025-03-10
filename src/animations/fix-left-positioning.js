const observer = new MutationObserver(() => {
  document.querySelectorAll('[data-us-text]').forEach((el) => {
    el.style.left = '0px';
    el.style.position = 'absolute';
    el.style.transform = 'none';
  });
});

observer.observe(document.body, { childList: true, subtree: true });
