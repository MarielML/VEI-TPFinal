document.addEventListener("DOMContentLoaded", () => {
    const telefonoInput = document.getElementById("telefono");
    const mailInput = document.getElementById("mail-externo");
    const guardarCambiosBtn = document.getElementById("guardar-cambios");
  
    // Cargar datos del Local Storage
    const datosGuardados = JSON.parse(localStorage.getItem("perfilUsuario")) || {};
    telefonoInput.value = datosGuardados.telefono || "";
    mailInput.value = datosGuardados.mail || "";
  
    // Guardar cambios en el Local Storage
    guardarCambiosBtn.addEventListener("click", () => {
      const nuevoTelefono = telefonoInput.value.trim();
      const nuevoMail = mailInput.value.trim();
  
      if (!nuevoTelefono || !nuevoMail) {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      const nuevosDatos = {
        telefono: nuevoTelefono,
        mail: nuevoMail,
      };
  
      localStorage.setItem("perfilUsuario", JSON.stringify(nuevosDatos));
      alert("Cambios guardados con éxito.");
    });
  });