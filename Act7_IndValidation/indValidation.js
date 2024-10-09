function Validation() {
    var nombre = document.getElementById("campo1").value;
    var correo = document.getElementById("correo").value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var boletin = document.getElementById("bol").checked;
    var comentario = document.getElementById("comment").value;
    var carrera = document.getElementById("career").value;
    var pasw = document.getElementById("pass").value;
    var promedio = document.getElementById("prom").value;
    var fecha = document.getElementById("date").value;
  
    if (nombre == "" && correo == "" && correo == "" && sexo == undefined && !boletin && comentario == " " && carrera == "0" && pasw == "" && (promedio < 60 && promedio > 100) && fecha == "") {
        alert("Por favor, complete todos los campos correctamente");
        return false;
    }
  
    return true;
}
  
