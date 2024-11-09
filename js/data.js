const LOCAL_STORAGE_GUARDADOS = "guardados";

const DISENIO_EMOCIONAL = {
  nombre: "Diseño emocional",
  materia: "Visualización e Interfaces",
  href: "../pdf/Diseño emocional.pdf"
}


const GUARDADOS = [
  DISENIO_EMOCIONAL
];
      
localStorage.setItem(
  LOCAL_STORAGE_GUARDADOS,
  JSON.stringify(GUARDADOS)
);
