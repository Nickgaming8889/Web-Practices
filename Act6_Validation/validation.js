function validation() {
    var x = document.getElementById("email").value;
    var y = document.getElementById("name").value;
    var z = document.getElementById("rol").value;
    if (x == "" || y == "" || z == "0") {
        alert("Faltan parametros por llenar");
        return false;
    }
    else {
        alert("Campos llenos");
        return true;
    }
}