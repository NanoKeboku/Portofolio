let toggle = document.querySelector(".left-side.active");
let btnPhone = document.querySelector(".phone");
let btnDesktop = document.querySelector(".desktop");
let act = toggle.addEventListener("click", function () {
  let tambah = document.querySelector(".left-nav");
  tambah.classList.toggle("open");
  toggle.classList.toggle("fix");
  btnPhone.classList.toggle("active");
});

const text = document.querySelector(".secText");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = ` Web Dev `;
  }, 0);
  setTimeout(() => {
    text.textContent = ` Designer`;
  }, 4000);
  setTimeout(() => {
    text.textContent = ` UI/UX Designer`;
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

const mode = document.getElementById("mode");
mode.addEventListener("click", lightMode());
function lightMode() {
  const blue = document.querySelectorAll("blue");
  const light = document.querySelectorAll(".light");
  blue.forEach((y) => {
    y.classList.toggle("blue-active");
  });

  light.forEach((x) => {
    x.classList.toggle("check");
    // x.classList.toggle("blue");
    if (x.classList.contains("check")) {
      btnDesktop.innerHTML = `<img src="./ICON/dark.png" alt="lightMode" />`;
    } else {
      btnDesktop.innerHTML = `<img src="./ICON/light.png" alt="lightMode" />`;
    }
  });
}

lightMode();
// const navLeft = document.querySelector(".fix");

// if (navLeft.classList.contains("fix")) {
//   navLeft.style.backgroundColor = "white";
// }
