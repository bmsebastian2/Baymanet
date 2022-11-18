const objAnimados = [].slice.call(document.querySelectorAll(".aniStart"));

const cargarImagen = (entradas, obervador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("offVisible");
    } else {
      entrada.target.classList.remove("offVisible");
    }
  });
};
const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "100px 0px 0px 100px",
  threshold: 0.5,
});
objAnimados.forEach((e) => observador.observe(e));

document.addEventListener("DOMContentLoaded", function () {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy"));


  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(`visible${entry.target.id}`);
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

<<<<<<< HEAD

=======
// selector
var menu = document.querySelector(".hamburger");

// method
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener("click", toggleMenu, false);
>>>>>>> 67c4060ebd20ef21265d38314a3091022b04b082
