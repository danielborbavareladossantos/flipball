/*
  Autor: Daniel dos Santos
  Data: 13/06/2020
  Observação: Classe que gerencia game.
*/

class Neural {

    constructor(distancia,altura,velocidade,player) {

        this.player = player;
        
        //sensores
        this.distancia = distancia;
        this.altura = altura;
        this.velocidade = velocidade;

        //atuador
        this.pula = false;

        this.neuronioEntrada(distancia, altura, velocidade);
    }

    neuronioEntrada = (d,a,v) => {
        var rd = d*this.player.pesos.lista[0].number;
        var ra = a*this.player.pesos.lista[1].number;
        var rv = v*this.player.pesos.lista[2].number;
        var total = rd+ra+rv;
        
        if (total < 0)
            total = 0;

        var rSaida = this.neuronioSaida(total);

        if (rSaida > 0)
            this.pula = true;
    };

    neuronioSaida = (result) => {
        var rr = result*this.player.pesos.lista[3].number;

        if (rr < 0)
            rr = 0;

        return rr;
    };

}