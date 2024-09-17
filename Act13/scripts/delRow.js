$('input[value="Eliminar"]').on('click', function() {
    $(this).closest('.row').remove();
});