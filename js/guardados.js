let nodo_section = document.querySelector("#guardados");
const JSON_GUARDADOS = localStorage.getItem(LOCAL_STORAGE_GUARDADOS);
const CONTENIDOS_GUARDADOS = JSON.parse(JSON_GUARDADOS) || [];

function agruparPorMateria() {
  const agrupadosPorMateria = {};

  CONTENIDOS_GUARDADOS.forEach((i) => {
    if (agrupadosPorMateria[i.materia]) {
      agrupadosPorMateria[i.materia].push(i);
    } else {
      agrupadosPorMateria[i.materia] = [i];
    }
  });

  return agrupadosPorMateria;
}

function crearArticlesAgrupados() {
  const AGRUPADOS = agruparPorMateria();

  Object.keys(AGRUPADOS).forEach((materia) => {
    let nodo_div_materia = document.createElement("div");

    let nodo_h2 = document.createElement("h2");
    nodo_h2.textContent = materia;
    nodo_div_materia.appendChild(nodo_h2);

    let nodo_ul = document.createElement("ul");

    AGRUPADOS[materia].forEach((i) => {
      let nodo_li = document.createElement("li");
      let nodo_a = document.createElement("a");
      nodo_a.href = i.href;
      nodo_a.textContent = i.nombre;
      nodo_a.target = "_blank";
      nodo_li.appendChild(nodo_a);
      nodo_ul.appendChild(nodo_li);
    });

    nodo_div_materia.appendChild(nodo_ul);

    nodo_section.appendChild(nodo_div_materia);
  });
}

crearArticlesAgrupados();
