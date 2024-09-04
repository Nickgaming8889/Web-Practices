function eliminarAlumnos() {
    $('.alumno').hide();
    $('#mensaje').html('Tu registro fue eliminado...');
    setTimeout("$('#mensaje').html('');",5000);
}

function eliminarMaestro() {
    $('#maestro1').hide();
    $('#mensaje').html('<img src="">')
    setTimeout("$('#mensaje').html('');",5000);
}


function eliminarMaestro(id) {
    $('#maestro'+id).hide();
    $('#mensaje').html('<img src="">')
    setTimeout("$('#mensaje').html('');",5000);
}