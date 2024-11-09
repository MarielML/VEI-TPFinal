let nodo_section = document.querySelector("#guardados");
const JSON_GUARDADOS = localStorage.getItem(LOCAL_STORAGE_GUARDADOS);
const CONTENIDOS_GUARDADOS = JSON.parse(JSON_GUARDADOS) || [];

function crearArticle(i) {
  let nodo_article = document.createElement("article");
  let nodo_a = document.createElement("a");
  nodo_a.href = i["href"];
  nodo_a.text = i["nombre"];
  nodo_a.target = "_blank";
  nodo_article.appendChild(nodo_a);
  nodo_section.appendChild(nodo_article);
}

function agregarGuardado() {
  for (let i in CONTENIDOS_GUARDADOS) {
      crearArticle(i);
  }
}
