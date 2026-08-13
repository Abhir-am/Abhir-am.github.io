(function(){
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  var theme = stored || (prefersLight ? 'light' : 'dark');

  function applyTheme(t){
    root.setAttribute('data-theme', t);
    toggle.textContent = t === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', t);
  }

  applyTheme(theme);

  toggle.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
})();