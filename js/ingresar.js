const INGRESAR = document.getElementById("ingresar");
const JSON_GUARDADOS = localStorage.getItem(LOCAL_STORAGE_GUARDADOS);

const CONTENIDOS_GUARDADOS = JSON.parse(JSON_GUARDADOS) || [];

function actualizarSaludo() {
  const horaActual = new Date().getHours();
  let saludo = "";

  if (horaActual >= 5 && horaActual < 12) {
    saludo = "¡Buenos días!";
  } else if (horaActual >= 12 && horaActual < 20) {
    saludo = "¡Buenas tardes!";
  } else {
    saludo = "¡Buenas noches!";
  }

  document.getElementById("saludo").textContent = saludo;
}

window.onload = actualizarSaludo;

INGRESAR.addEventListener("click", (event) => {
  event.preventDefault();
  if (CONTENIDOS_GUARDADOS.length === 0) {
    window.location.href = "./paginas/home.html";
  } else {
    window.location.href = "./paginas/guardados.html";
  }
});
