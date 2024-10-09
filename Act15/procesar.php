<?php
    $op = $_POST['opcion'];

    echo '<table>';
    for ($i = 1; $i <= $op; $i++) {
        echo "<tr><td>$i</td></tr>";
    }
    echo '</table>';
?>