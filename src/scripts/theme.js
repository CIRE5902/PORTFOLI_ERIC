const themeMap = {
    dark: "light",
    light: "eric",
    eric: "dark"
  };
  
  let theme = localStorage.getItem('theme');
  if (!theme) {
    const tmp = Object.keys(themeMap)[0];
    localStorage.setItem('theme', tmp);
    theme = tmp;
  }
  
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme(event) {
    console.log("hola");
    event.preventDefault();
  
    const current = localStorage.getItem('theme');
    if (!current) return;
  
    const next = themeMap[current];
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  const themeButton = document.getElementById('themeButton');
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }
  