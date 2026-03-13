(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  if (!toggle) return;

  const STORAGE_KEY = 'linktree-theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function getPreferredTheme() {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  let current = getPreferredTheme();
  applyTheme(current);

  toggle.addEventListener('click', () => {
    current = current === 'light' ? 'dark' : 'light';
    applyTheme(current);
    window.localStorage.setItem(STORAGE_KEY, current);
  });
})();

