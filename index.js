let toggle = document.querySelector(".left-side.active");
let act = toggle.addEventListener("click", function () {
  let tambah = document.querySelector(".left-nav");
  tambah.classList.toggle("open");

  toggle.classList.toggle("fix");
});

const text = document.querySelector(".secText");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Dev";
  }, 0);
  setTimeout(() => {
    text.textContent = "Designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "UI/UX Designer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

function lightMode() {
  const mode = document.getElementById("mode");
  const light = document.querySelectorAll(".light");
  light.forEach((x) => {
    x.classList.toggle("check");

    if (x.classList.contains("check")) {
      mode.innerHTML = "🌑";
    } else {
      mode.innerHTML = "☀";
    }
  });
  // const navLeft = document.querySelector(".fix");

  // if (navLeft.classList.contains("fix")) {
  //   navLeft.style.backgroundColor = "white";
  // }
}
