const text = "Agus Adi Purnomo.";
const element = document.getElementById("nama");
let i = 0;
let menghapus = false;
const kecepatanKetik = 150;
const kecepatanMenghapus = 75;
const berhenti = 2000;

function typing() {
  const ambilText = element.innerHTML;

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
