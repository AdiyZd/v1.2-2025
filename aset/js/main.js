const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const navbar = document.querySelector(".navbar");

// cek preferensi dark mode
const preferensiDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const mode = localStorage.getItem("darkMode") || (preferensiDark ? "dark" : "light");

// Mode pertama kali dokument dibuka
if (mode === "dark") {
  body.classList.add("dark-mode");
  darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
} else {
    body.classList.remove("dark-mode");
    darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
}

// saat tombol darkmode di klik
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  navbar.classList.toggle("navbar-dark");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "dark");
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  } else {
    localStorage.setItem("darkMode", "light");
    darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
})