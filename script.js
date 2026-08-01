// Animación al cargar la página
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Animación al hacer scroll
const elementos = document.querySelectorAll("section, .card");

const mostrarElementos = () => {
  const altoPantalla = window.innerHeight;

  elementos.forEach((elemento) => {
    const posicion = elemento.getBoundingClientRect().top;

    if (posicion < altoPantalla - 100) {
      elemento.style.opacity = "1";
      elemento.style.transform = "translateY(0)";
    }
  });
};

elementos.forEach((elemento) => {
  elemento.style.opacity = "0";
  elemento.style.transform = "translateY(40px)";
  elemento.style.transition = "all .8s ease";
});

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

// Botón de WhatsApp
const boton = document.querySelector(".btn");

if (boton) {
  boton.addEventListener("click", () => {
    alert("¡Gracias por visitar Zoom Agency! Próximamente podrás contactarnos por WhatsApp.");
  });
}

// Año automático en el footer
const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Zoom Agency | Todos los derechos reservados.`;
}