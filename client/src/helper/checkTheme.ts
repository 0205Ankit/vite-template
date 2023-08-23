const checkTheme = () => {
   
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  if (localStorage.getItem("theme") === "dark") {
    return "dark";
  }

  if (localStorage.getItem("theme") === "light") {
    return "light";
  }

  if (darkThemeMq.matches) {
    // Theme set to dark.
    return "dark"; 
  } else {
    // Theme set to light.
    return "light";
  }
};

export default checkTheme;
