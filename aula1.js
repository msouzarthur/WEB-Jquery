function exibeElementoByTag(tag)
{
    $(tag).show();
}
function ocultaElementoByTag(tag)
{
    $(tag).hide();
}
function ocultaElementoByClass(classe)
{
    $('.'+classe).hide();
}
function exibeElementoByClass(classe)
{
    $('.'+classe).show();
}
function exibeElementoById(id)
{
    $('#'+id).show();
}
function ocultaElementoById(id)
{
    $('#'+id).hide();
}