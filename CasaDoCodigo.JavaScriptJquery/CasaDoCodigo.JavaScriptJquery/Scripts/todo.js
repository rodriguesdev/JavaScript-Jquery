$(document).ready(function () {
    function onTarefaDeleteClick() {
        $(this).parent('.tarefa-item').hide('slow', function () {
            $(this).remove();
        });
    }

    $('.tarefa-delete').click(onTarefaDeleteClick);

    function onTarefaItemClick() {
        var text = $(this).children('.tarefa-texto').text();
        var html = "<input type='text' " +
        "class='tarefa-edit' value='" +
        text + "'>";
        $(this).html(html);
        $(".tarefa-edit").keydown(onTarefaEditKeydown);
    }

});