const body = document.body;
const themeDesktop = document.getElementById("theme-toggle-desktop");
const themeMobile = document.getElementById("theme-toggle-mobile");
const menu = document.querySelector(".navbar-right");
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Keep preloader for 5 seconds
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // Fade out in 0.5s
  }, 1000); // Wait for 5 seconds
});
function setTheme(isDark) {
  const iconDesktop = themeDesktop?.querySelector("i");
  const iconMobile = themeMobile?.querySelector("i");
  if (isDark) {
    body.classList.add("dark-mode");
    iconDesktop?.classList.replace("fa-moon", "fa-sun");
    iconMobile?.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    iconDesktop?.classList.replace("fa-sun", "fa-moon");
    iconMobile?.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
}

function toggleTheme() {
  const isDark = !body.classList.contains("dark-mode");
  setTheme(isDark);
}

themeDesktop?.addEventListener("click", toggleTheme);
themeMobile?.addEventListener("click", toggleTheme);

// Restore saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") setTheme(true);

// Hamburger toggle
function toggleMenu() {
  menu.classList.toggle("show-menu");
  const expanded = menu.classList.contains("show-menu");
  document.querySelector(".menu-icon")?.setAttribute("aria-expanded", expanded);
}
window.toggleMenu = toggleMenu; // allow inline onclick

// Close menu on link click (mobile UX)
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    document
      .querySelector(".menu-icon")
      ?.setAttribute("aria-expanded", "false");
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#0590f4" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0590f4",
      opacity: 0.11,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.8,
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
  },
  retina_detect: true,
});
