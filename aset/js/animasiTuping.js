const text = "Agus Adi Purnomo.";
const element = document.getElementById("nama");
let i = 0;
let menghapus = false;
const kecepatanKetik = 100;
const kecepatanMenghapus = 65;
const berhenti = 4000;

function typing() {
  if (!menghapus && i < text.length) {
    // mengetik
    element.innerHTML = text.substring(0, i + 1);
    i++;
    setTimeout(typing, kecepatanKetik);
  } else if (menghapus && i > 0) {
    // menghapus
    element.innerHTML = text.substring(0, i - 1);
    i--;
    setTimeout(typing, kecepatanMenghapus);
  } else {
    // pergantain mode
    menghapus = !menghapus;
    setTimeout(typing, berhenti);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  typing();

  const counters = document.querySelectorAll(".exp-number");
  const speed = 500;

  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-count");
    let increment = Math.max(1, target / speed);

    const updateCount = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.round(current + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + "+";
        counter.classList.add("animated");
      }
    };

    // Trigger saat elemen terlihat di layar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px" }
    );

    observer.observe(counter);
  });
});
