// Mengirim Inputan dari Form ke Google Sheet
const scriptURL = "https://script.google.com/macros/s/AKfycbwq3csYTIgbYDZDyDJsgG9nokF5r6wEmskAQEhRROBZKfN-vtXAFX8QHe2VfIzXa_Mo/exec";
const form = document.forms["mr-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ketika tombol submit diklik
  // Tampilkan tombol loading, hilangkan tombol submit
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // Tampilkan alert
      myAlert.classList.toggle("d-none");
      // Reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Ketika gambar di load
// Hero Img Load
const heroImg = document.querySelector(".hero-img");
const heroImgLoad = document.querySelector(".hero-img-load");

heroImg.addEventListener("load", (event) => {
  heroImgLoad.classList.toggle("d-none");
  heroImg.classList.toggle("d-none");
});

heroImg.src = "./assets/img/rifki.jpg";

// Projects Img Load
const projectImgPath = ["./assets/img/projects/1.jpg", "./assets/img/projects/2.jpg", "./assets/img/projects/3.jpg", "./assets/img/projects/4.jpg", "./assets/img/projects/5.jpg"];
const projectsContainer = document.querySelector(".projects-container");
const projectsLoad = document.querySelector(".projects-load");
const projectImg = document.querySelectorAll(".project-img");

let index = 0;
for (const img of projectImg) {
  img.addEventListener("load", (event) => {
    projectsLoad.classList.toggle("d-none");
    projectsContainer.classList.toggle("d-none");
  });
  img.src = projectImgPath[index];
  index++;
}
