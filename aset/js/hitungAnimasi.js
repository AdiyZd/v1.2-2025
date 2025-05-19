// INI KHUSUS VITUR REDIRECT WHATSAPP
let ElementIdLink = document.getElementById("waLink");
let target = "6288216796297";
let jamNow = new Date().getHours();
let nama = "adi";

let sapaSaya = "";
if (jamNow >= 4 && jamNow < 10) {
  sapaSaya = "Selamat Pagi";
} else if (jamNow >= 10 && jamNow < 15) {
  sapaSaya = "Selamat Siang";
} else if (jamNow >= 15 && jamNow < 18) {
  sapaSaya = "Selamat Sore";
} else {
  sapaSaya = "Selamat Malam";
}

const PesanKeSayaLangsing = `Hallo mas ${nama}, selamat ${sapaSaya}👋.`;
// encoding pesan
const encode = encodeURIComponent(PesanKeSayaLangsing);
const URL = `https://wa.me/${target}?text=${encode}`;

ElementIdLink.href = URL;

// webdev
function ScrollAnimasi(Rtarget) {
    document.getElementById('Service').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    setTimeout(() => {
        const CardHover = document.getElementById(Rtarget);
        if (CardHover) {
            CardHover.classList.add('hover1');
            setTimeout(() => {
                CardHover.classList.remove('hover1');
            }, 3000); // hilangkan 3 detik setelah di clik
        }
    }, 1000)
}

document.getElementById('webdev').addEventListener("click", function (j) {
    j.preventDefault();
    ScrollAnimasi('web-dev');
})

document.getElementById("MNT").addEventListener("click", function (k) {
    k.preventDefault();
    ScrollAnimasi('web-dev');
})


// uidesain
document.getElementById('Ui').addEventListener("click", function (k) {
    k.preventDefault();
    
    document.getElementById('Service').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    setTimeout(() => {
        const cardUiDesain = document.getElementById('ui-Desain');
        if (cardUiDesain) {
            cardUiDesain.classList.add('hovered');
            setTimeout(() => {
            cardUiDesain.classList.remove('hovered');
        }, 3000); // hilangkan 3 detik setelah di clik
        }  else {
            console.error("Element dengan ID 'ui-Desain' tidak ditemukan.");
        }
    }, 500);

})

// IT
document.getElementById('It').addEventListener('click', function(end) {
    end.preventDefault();

    document.getElementById('Service').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    setTimeout(() => {
        const cardIT = document.getElementById('mmt6');
        if (cardIT) {
            cardIT.classList.add('hovered');
            setTimeout(() => {
                cardIT.classList.remove('hovered');
            }, 3000); // hilangkan 3 detik setelah di clik
        } else {
            console.error("Element dengan ID 'it-card' tidak ditemukan.");
        }
    }, 500);
})

