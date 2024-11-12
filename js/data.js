const LOCAL_STORAGE_GUARDADOS = "guardados";

const DISENIO_EMOCIONAL = {
  nombre: "Diseño emocional",
  materia: "Visualización e Interfaces",
  href: "../pdf/Diseño emocional.pdf",
};

const LENGUAJE_PHP = {
  nombre: "Lenguaje PHP",
  materia: "Programación Web II",
  href: "../pdf/Lenguaje PHP.pdf",
};

const VISUALIZACION_DE_DATOS = {
  nombre: "Visualización de datos",
  materia: "Visualización e Interfaces",
  href: "../pdf/Visualización de datos.pdf",
};

const GUARDADOS = [LENGUAJE_PHP, DISENIO_EMOCIONAL, VISUALIZACION_DE_DATOS];

localStorage.setItem(LOCAL_STORAGE_GUARDADOS, JSON.stringify(GUARDADOS));
