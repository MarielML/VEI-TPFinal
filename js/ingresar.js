const INGRESAR = document.getElementById("ingresar");
const JSON_GUARDADOS = localStorage.getItem(LOCAL_STORAGE_GUARDADOS);

const CONTENIDOS_GUARDADOS = JSON.parse(JSON_GUARDADOS) || [];

INGRESAR.addEventListener("click", () => {
  event.preventDefault();
  if (CONTENIDOS_GUARDADOS.length === 0) {
    window.location.href = "./paginas/home.html";
  } else {
    window.location.href = "./paginas/guardados.html";
  }
});
