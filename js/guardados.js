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
    nodo_div_materia.classList.add("materia");

    let nodo_header = document.createElement("div");
    nodo_header.classList.add("materia-header");

    let boton_toggle = document.createElement("button");
    boton_toggle.textContent = materia;
    boton_toggle.classList.add("toggle-btn");
    boton_toggle.addEventListener("click", () => {
      let nodo_ul = nodo_div_materia.querySelector(".articulos");
      if (nodo_ul.style.display === "none") {
        nodo_ul.style.display = "block";
        boton_toggle.textContent = materia;
      } else {
        nodo_ul.style.display = "none";
        boton_toggle.textContent = materia;
      }
    });

    nodo_header.appendChild(boton_toggle);
    nodo_div_materia.appendChild(nodo_header);

    let nodo_ul = document.createElement("ul");
    nodo_ul.classList.add("articulos");
    nodo_ul.style.display = "none";

    AGRUPADOS[materia].forEach((i) => {
      let nodo_li = document.createElement("li");
      let nodo_a = document.createElement("a");
      nodo_a.href = i.href;
      nodo_a.textContent = i.nombre;
      nodo_a.target = "_blank";
      nodo_li.appendChild(nodo_a);
      nodo_ul.appendChild(nodo_li);
    });

    nodo_div_materia.appendChild(boton_toggle);
    nodo_div_materia.appendChild(nodo_ul);

    nodo_section.appendChild(nodo_div_materia);
  });
}

crearArticlesAgrupados();
