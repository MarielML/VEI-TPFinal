let nodo_section = document.querySelector("#guardados");
const JSON_GUARDADOS = localStorage.getItem(LOCAL_STORAGE_GUARDADOS);
const CONTENIDOS_GUARDADOS = JSON.parse(JSON_GUARDADOS) || [];

function agruparPorMateriayCuatrimestre() {
  const agrupadosPorMateriaYCuatrimestre = {};

  CONTENIDOS_GUARDADOS.forEach((i) => {
    if (!agrupadosPorMateriaYCuatrimestre[i.cuatrimestre]) {
      agrupadosPorMateriaYCuatrimestre[i.cuatrimestre] = {};
    }

    if (!agrupadosPorMateriaYCuatrimestre[i.cuatrimestre][i.materia]) {
      agrupadosPorMateriaYCuatrimestre[i.cuatrimestre][i.materia] = [];
    }

    agrupadosPorMateriaYCuatrimestre[i.cuatrimestre][i.materia].push(i);
  });

  return agrupadosPorMateriaYCuatrimestre;
}

function crearArticlesAgrupados() {
  const AGRUPADOS = agruparPorMateriayCuatrimestre();

  Object.keys(AGRUPADOS).forEach((cuatrimestre) => {
    let nodo_div_cuatrimestre = document.createElement("div");

    let nodo_header_cuatrimestre = document.createElement("div");
    nodo_header_cuatrimestre.classList.add("cuatrimestre-header");

    let boton_toggle_cuatrimestre = document.createElement("button");
    boton_toggle_cuatrimestre.textContent = cuatrimestre;
    boton_toggle_cuatrimestre.classList.add("toggle-btn");
    boton_toggle_cuatrimestre.addEventListener("click", () => {
      let nodo_materias = nodo_div_cuatrimestre.querySelector(".materias");
      if (nodo_materias.style.display === "none") {
        nodo_materias.style.display = "block";
      } else {
        nodo_materias.style.display = "none";
      }
    });

    nodo_header_cuatrimestre.appendChild(boton_toggle_cuatrimestre);
    nodo_div_cuatrimestre.appendChild(nodo_header_cuatrimestre);

    let nodo_materias = document.createElement("div");
    nodo_materias.classList.add("materias");
    nodo_materias.style.display = "none";

    Object.keys(AGRUPADOS[cuatrimestre]).forEach((materia) => {
      let nodo_div_materia = document.createElement("div");
      nodo_div_materia.classList.add("materiaEnFavoritos");

      let nodo_header_materia = document.createElement("div");
      nodo_header_materia.classList.add("materia-header");

      let boton_toggle_materia = document.createElement("button");
      boton_toggle_materia.textContent = materia;
      boton_toggle_materia.classList.add("toggle-btn");
      boton_toggle_materia.addEventListener("click", () => {
        let nodo_ul = nodo_div_materia.querySelector(".articulos");
        if (nodo_ul.style.display === "none") {
          nodo_ul.style.display = "block";
        } else {
          nodo_ul.style.display = "none";
        }
      });

      nodo_header_materia.appendChild(boton_toggle_materia);
      nodo_div_materia.appendChild(nodo_header_materia);

      let nodo_ul = document.createElement("ul");
      nodo_ul.classList.add("articulos");
      nodo_ul.style.display = "none";

      AGRUPADOS[cuatrimestre][materia].forEach((i) => {
        let nodo_li = document.createElement("li");
        nodo_li.classList.add("file-item");
        let nodo_div1 = document.createElement("div");
        let nodo_div2 = document.createElement("div");
        let nodo_img_extension = document.createElement("img");
        nodo_img_extension.src = i.extension;
        nodo_img_extension.classList.add("extension");
        let nodo_a_nombre = document.createElement("a");
        nodo_a_nombre.href = i.href;
        nodo_a_nombre.textContent = i.nombre;
        nodo_a_nombre.target = "_blank";
        nodo_div1.appendChild(nodo_img_extension);
        nodo_div1.appendChild(nodo_a_nombre);
        let nodo_a_favorito = document.createElement("a");
        nodo_a_favorito.href = "";
        let nodo_img_favorito = document.createElement("img");
        nodo_img_favorito.src = "../imagenes/favoritos.png";
        nodo_img_favorito.classList.add("extension");
        nodo_a_favorito.appendChild(nodo_img_favorito);
        let nodo_a_descargar = document.createElement("a");
        nodo_a_descargar.href = i.href;
        nodo_a_descargar.target = "_blank";
        let nodo_img_descargar = document.createElement("img");
        nodo_img_descargar.src = "../imagenes/descargar.jpg";
        nodo_img_descargar.classList.add("extension");
        nodo_a_descargar.appendChild(nodo_img_descargar);
        let nodo_check = document.createElement("input");
        nodo_check.type = "checkbox";
        nodo_check.classList.add("file-checkbox");
        nodo_div2.appendChild(nodo_a_favorito);
        nodo_div2.appendChild(nodo_a_descargar);
        nodo_div2.appendChild(nodo_check);
        nodo_li.appendChild(nodo_div1);
        nodo_li.appendChild(nodo_div2);
        nodo_ul.appendChild(nodo_li);
      });

      nodo_div_materia.appendChild(nodo_ul);
      nodo_materias.appendChild(nodo_div_materia);
    });

    nodo_div_cuatrimestre.appendChild(nodo_materias);
    nodo_section.appendChild(nodo_div_cuatrimestre);
  });
}

crearArticlesAgrupados();
