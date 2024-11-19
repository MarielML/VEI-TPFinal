const LOCAL_STORAGE_GUARDADOS = "guardados";

const DISENIO_EMOCIONAL = {
  cuatrimestre: "Segundo cuatrimestre 2023",
  nombre: "Diseño emocional.pdf (1 MB)",
  materia: "Visualización e Interfaces",
  href: "../pdf/Diseño emocional.pdf",
  extension: "../imagenes/pdf.jpg",
};

const LENGUAJE_PHP = {
  cuatrimestre: "Segundo cuatrimestre 2024",
  nombre: "Lenguaje PHP.pdf (701 KB)",
  materia: "Programación Web II",
  href: "../pdf/Lenguaje PHP.pdf",
  extension: "../imagenes/pdf.jpg",
};

const PHP_EJERCICIO1 = {
  cuatrimestre: "Segundo cuatrimestre 2024",
  nombre: "PHP ejercicio 1.txt (15 B)",
  materia: "Programación Web II",
  href: "../pdf/PHP ejercicio 1.txt",
  extension: "../imagenes/txt.jpg",
};

const VISUALIZACION_DE_DATOS = {
  cuatrimestre: "Segundo cuatrimestre 2023",
  nombre: "Visualización de datos.pdf (370 KB)",
  materia: "Visualización e Interfaces",
  href: "../pdf/Visualización de datos.pdf",
  extension: "../imagenes/pdf.jpg",
};

const MIRO_LEO_PIENSO = {
  cuatrimestre: "Segundo cuatrimestre 2023",
  nombre: "Práctica Miro, Leo y Pienso.docx (11.3 KB)",
  materia: "Visualización e Interfaces",
  href: "../pdf/Practica-Miro.docx",
  extension: "../imagenes/word.jpg",
};

const GUARDADOS = [
  LENGUAJE_PHP,
  PHP_EJERCICIO1,
  DISENIO_EMOCIONAL,
  VISUALIZACION_DE_DATOS,
  MIRO_LEO_PIENSO,
];

localStorage.setItem(LOCAL_STORAGE_GUARDADOS, JSON.stringify(GUARDADOS));
