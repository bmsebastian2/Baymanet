const objAnimados = [].slice.call(document.querySelectorAll(".aniStart"));
console.log(objAnimados);

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

  let i = 0;
  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(`visible${i}`);
          i++;
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});


