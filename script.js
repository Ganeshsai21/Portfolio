 function toggleMenu() {
    const menu = document.querySelector('.navbar-right');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column'; // make it stack on small screens
    }
      menu.classList.toggle('active');
  }

 particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#a27bf8" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a27bf8",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.8
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    }
  },
  retina_detect: true
});

