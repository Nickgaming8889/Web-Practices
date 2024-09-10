function valArray() {
    let email_ = document.getElementById('email').value;
    let password_ = document.getElementById('pass').value;
    let e = false;
    let p = false;

    const email = ["nickjonas@gmail.com", "example@outlook.com", "taktaka@hotmail.com"];
    const pass = ["1234", "4321", "5372"];

    if (email_ == "" || password_ == "") {
        alert("Faltan campos por llenar");
        return false;
    }

    for (let i = 0; i < email.length; i++) {
        if (email_ == email[i]) {
            e = true;
            if (password_ == pass[i]) {
                p = true;
                break
            }     
        }
    }

    
    if (e && p) {
        alert("Bienvenido usuario");
    }
    else {
        alert("Datos Incorrectos")
    }
}