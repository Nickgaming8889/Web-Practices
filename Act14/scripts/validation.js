function Validation() {
    var nombre = document.getElementById("campo1").value;
    var correo = document.getElementById("correo").value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var bol = document.getElementById("bol").checked;
    var comentario = document.getElementById("comme").value;
    var carrera = document.getElementById("career").value;
    var pasw = document.getElementById("pass").value;
    var promedio = document.getElementById("prom").value;
    var fecha = document.getElementById("date").value;
  
    if (
      nombre != "" &&
      correo != "" &&
      sexo != null &&
      bol != null &&
      comentario != "" &&
      carrera != "0" &&
      pasw != "" &&
      promedio >= 60 && promedio <= 100 &&
      fecha != ""
    ) {
      return true;
    } else {
      alert("Faltan campos por llenar");
      return false;
    }
  }