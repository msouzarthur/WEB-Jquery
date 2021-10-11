var rodada = 1;
var matriz = Array(3);
matriz[0] = Array(3);
matriz[1] = Array(3);
matriz[2] = Array(3);

matriz[0][0] = 0;
matriz[0][1] = 0;
matriz[0][2] = 0;

matriz[1][0] = 0;
matriz[1][1] = 0;
matriz[1][2] = 0;

matriz[2][0] = 0;
matriz[2][1] = 0;
matriz[2][2] = 0;

$(document).ready(function(){
    $('#btnIniciar').click(function(){
        //validar digitação
        if($('#playerOne').val() ==''){
            alert('Nome inválido');
            return false;
        }
        if($('#playerTwo').val() ==''){
            alert('Nome inválido');
            return false;
        }
        
        //exibir nomes
        $('#nomePlayerOne').html($('#playerOne').val());
        $('#nomePlayerTwo').html($('#playerTwo').val());

        //trocar exibição
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    });
    //Recupera o campo
    $('.campo').click(function(){
        var idCampo = this.id;
        $('#'+idCampo).off();
        jogada(idCampo);
    });
    //Jogada
    function jogada(id){
        var icone ='';
        var ponto = 0;
        if(rodada%2!=0)
        {
            icone='url("imagens/marcacao_1.png")';
            ponto = ponto-1;
        }
        else
        {
            icone='url("imagens/marcacao_2.png")';
            ponto = ponto+1;
        }
        rodada++;
        //atualiza o fundo - css(atributo,elemento);
        $('#'+id).css('background-image',icone);
        
        var linha = id.substr(0,1);
        var coluna = id.substr(1);
        
        matriz[linha][coluna] = ponto;
        check();
    }
    function check(){
        var pontos = 0;
        var i;
        //primeira linha
        for(i=0; i<3; i++)
        {
            pontos = pontos+matriz[0][i];
        }
        ganhador(pontos);
        //segunda linha
        pontos = 0;
        for(i=0; i<3; i++)
        {
            pontos = pontos+matriz[1][i];
        }
        ganhador(pontos);
        //terceira linha
        pontos = 0;
        for(i=0; i<3; i++)
        {
            pontos = pontos+matriz[2][i];
        }
        ganhador(pontos);
        //colunas
        pontos = 0;
        for(i=0; i<3; i++)
        {
            pontos=0;
            pontos +=matriz[0][i];
            pontos +=matriz[1][i];
            pontos +=matriz[2][i];
            ganhador(pontos);
        }
        //diagonal primária
        pontos=0;
        pontos = matriz[0][0]+matriz[1][1]+matriz[2][2];
        ganhador(pontos);
        //diagonal secundária
        pontos=0;
        pontos = matriz[0][2]+matriz[1][1]+matriz[2][0];
        ganhador(pontos);
    };

    function ganhador(pontos){
        if(pontos==-3){
            var name = $('#playerOne').val();
            alert(name+' é o vencedor!');
            //desabilita os clicks se alguém já ganhou
            $('.campo').off();
        }
        else if(pontos == 3){
            var name = $('#playerTwo').val();
            alert(name+' é o vencedor!');
            //desabilita os clicks se alguém já ganhou
            $('.campo').off();
        }
    };
});