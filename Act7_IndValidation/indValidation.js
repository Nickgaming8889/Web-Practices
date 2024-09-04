function Validation() {
    let email_ = document.getElementById("correo").value;
    let sex_ = document.getElementById("sexo");
    let boletin_ = document.getElementById("bol").value;
    let career_ = document.getElementById("career").value;
    let pass_ = document.getElementById("pass").value;
    let prom_ = document.getElementById("prom").value;
    let date_ = document.getElementById("date").value;

    if (email_ == "" && sex_.checked == false && boletin_== "" && career_ == "0" && pass_ == "" && prom_ == "" && date_ == "") {
        alert("faltan campos por llenar");
        return false;
    }
    else {
        alert("Campos llenos");
        return true;
    }
}