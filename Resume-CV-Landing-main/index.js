function switchTheme() {
  const body = document.body;
  const switchButtonTheme = document.getElementById("themeToggle");

  switchButtonTheme.addEventListener("click", () => {
    body.classList.toggle("dark");
    const currentTheme = body.className;
    if (currentTheme === "light dark") {
      localStorage.setItem("theme", "dark");
    }
    if (currentTheme !== "light dark") {
      localStorage.setItem("theme", "light");
    }
  });
}

function setTheme() {
  const body = document.body;
  const currentTheme = localStorage.getItem("theme");
  body.classList.add(currentTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  switchTheme();
  setTheme();
});
