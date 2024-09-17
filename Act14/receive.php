<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Impress PHP</title>
</head>
<body>
    
    <?php 
        $password = $_POST['pasw'];
        $bool = $_POST['boletin'];
        $rol_ = $_POST['carrera'];
        $rol_txt = ($rol_ == 1) ? "INFO" : "ICOM";

        echo "Bienvenido ", $_POST['nombre'], "<br>";
        echo "Correo: ", $_POST['correo'], "<br>";
        echo "Sexo: ", $_POST['sexo'], "<br>";
        echo "Comentarion: ", $_POST['comentario'], "<br>";
        echo "Carrera: ", $rol_txt, "<br>";
        echo "Promedio: ", $_POST['promedio'], "<br>";
        echo "Fecha: ", $_POST['fecha'], "<br>";
    ?>

</body>
</html>