<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $options = [];
    for ($i = 0; $i <= 5000; $i++) {
        $options[] = "<option value='$i'>$i</option>";
    }

    echo "<form action='procesar.php' method='post' onsubmit='return validarFormulario()'>";
    echo "<select name='opcion'>";
    echo "<option value='0'>Seleccione una opción</option>";
    echo implode("", $options);
    echo "</select>";
    echo "<br><br>";
    echo "<input type='submit' value='Enviar'>";
    echo "</form>";

    echo "<script>";
    echo "function validarFormulario() {";
    echo "  var opcion = document.querySelector('select[name=\"opcion\"]').value;";
    echo "  if (opcion <= 0) {";
    echo "    alert('Debe seleccionar una opción con valor mayor a 0');";
    echo "    return false;";
    echo "  }";
    echo "  return true;";
    echo "}";
    echo "</script>";
?>
</body>
</html>