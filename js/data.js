const LOCAL_STORAGE_GUARDADOS = "guardados";

const DISENIO_EMOCIONAL = {
  cuatrimestre: "Segundo cuatrimestre 2024",
  nombre: "Diseño emocional.pdf (1 MB)",
  materia: "Visualización e Interfaces",
  href: "../pdf/Diseño emocional.pdf",
  extension: "../imagenes/pdf.jpg"
};

const LENGUAJE_PHP = {
  cuatrimestre: "Segundo cuatrimestre 2023",
  nombre: "Lenguaje PHP.pdf (701 KB)",
  materia: "Programación Web II",
  href: "../pdf/Lenguaje PHP.pdf",
  extension: "../imagenes/pdf.jpg"
};

const VISUALIZACION_DE_DATOS = {
  cuatrimestre: "Primer cuatrimestre 2023",
  nombre: "Visualización de datos.pdf (370 KB)",
  materia: "Visualización e Interfaces",
  href: "../pdf/Visualización de datos.pdf",
  extension: "../imagenes/pdf.jpg"
};

const GUARDADOS = [LENGUAJE_PHP, DISENIO_EMOCIONAL, VISUALIZACION_DE_DATOS];

localStorage.setItem(LOCAL_STORAGE_GUARDADOS, JSON.stringify(GUARDADOS));
