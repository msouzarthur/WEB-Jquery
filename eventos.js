/*
.click() - acionado com o click do mouse
.dblclick() - acionado com 2 clicks do mouse
.mousedown() - acionado quando pressiona o mouse
.mouseover() - acionado quando o mouse sobrepõe
.mouseout() - acionado quando o mouse sai da area
------------------------------------------------- mouse
.keydown() - captura uma tecla
.keypress() - captura uma tecla, menos alt,ctrl,shift,esc
.keyup() - captura quando solta a tecla
--------------------------------------------------- teclado
.focus() - quando recebe o foco do cursor
.blur() - quando perde o foco do cursor
.change() - quando elemento é modificado
.submit() - quando dá enter no elemento - Botão
------------------------------------------------ formulários
*/
$(document).ready(function(){
    console.log("O DOM está carregado!");
    /*
    $('#principal').click(function(){
        alert('elemento foi clicado');
    }); $('#principal').dblclick(function(){
        alert('elemento foi doubleclicado');
    }); $('#principal').mousedown(function(){
        alert('houve um click');
    }); $('#principal').mouseover(function(){
        alert('passou por cima');
    }); $('#principal').mouseout(function(){
        alert('elemento foi clicado');
    
    }); $('#campo').keydown(function(){
        alert('Botão foi pressionado');
    }); $('#campo').keypress(function(){
       alert('Botão foi pressionado - press');
    }); $('#campo').keyup(function(){
       alert('Botão foi soltado');
    });
    
    $('#campo').focus(function(){
         alert('recebeu foco');
    });
    $('#campo').blur(function(){
        alert('perdeu o foco');
    });
    */
    $('#campo').change(function(){
        alert('mudou');
    });
    $('#campo2').submit(function(){
        alert('confirmação');
    });
});