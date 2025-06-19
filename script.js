const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark-border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navLinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark-border-white/50",
      "dark:bg-transparent"
    );

    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
  }
});

// ---------------light mode and dark mode----------------
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

// Scroll Animation
function scrollAnimation() {
  const elements = document.querySelectorAll("[data-animate]");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("animate");
    }
  });
}

// Initialize on load
window.addEventListener("load", () => {
  scrollAnimation();
  
  // Add typewriter effect after page loads
  setTimeout(() => {
    const typewriter = document.querySelector(".typewriter");
    if (typewriter) {
      typewriter.style.animation = "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite";
    }
  }, 500);
});

// Run on scroll
window.addEventListener("scroll", scrollAnimation);

// Scroll progress indicator
window.addEventListener('scroll', function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});

// Add hover effect to profile image
