export type Theme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'webersol-theme';

// Inlined into a blocking <script> in app/layout.tsx so the theme is applied
// before first paint — avoids a flash of the wrong theme on load.
export const noFlashThemeScript = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;
