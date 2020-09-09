/*
  Autor: Daniel dos Santos
  Data: 17/07/2020
  Observação: Classe que cria obstaculos pro jogo.
*/

class Obstaculo {

    constructor(game) {
        this.lista = [];
        this.tempoInsere = 0;
        this.game = game;
    }

    insere = () => {
		this.lista.push({
			x: this.game.largura,
			largura: 30+Math.floor(21*Math.random()),
			altura: 30+Math.floor(100*Math.random()),
			cor: this.game.getRandomColor()
        });
        // this.lista.push({
		// 	x: this.game.largura,
		// 	largura: 30,
		// 	altura: 100,
		// 	cor: this.game.getRandomColor()
		// });

		this.tempoInsere = 30+Math.floor(21*Math.random());
    };
    
	atualiza = () => {
		if (this.tempoInsere == 0) {
			this.insere();
		} else {
			this.tempoInsere--;
		}

		for (var i = 0, tam = this.lista.length; i < tam; i++) {
			var obs = this.lista[i];

            obs.x -= this.game.velocidade;
            
            this.game.players.forEach(element => {
                if (
                    (element.x < obs.x+obs.largura && 
                    element.x+element.largura >= obs.x && 
                    element.y+element.altura >= this.game.chao.y-obs.altura)
                    // ||
                    // (element.x < obs.x+obs.largura && 
                    // element.x+element.largura >= obs.x && 
                    // element.y+element.altura <= obs.altura+element.altura)
                ) {
                    this.game.estadoAtual = this.game.estados.perdeu;
                    if (this.game.mode==1) {
                        this.game.esforco.reforca(false);
                        console.log(this.game.esforco);
                    }
                } else if (element.x >= obs.x+10 && element.x <= obs.x+10) {
                    element.score++;
                    if (this.game.mode==1) {
                        this.game.esforco.reforca(true);
                    }
                    this.game.qtdPontos = this.game.players[0].score;
                //remove obstaculo que já chegou no inicio do canvas
                } else if (obs.x <= -obs.largura) {
                    this.lista.splice(i,1);
                    tam--;
                    i--;
                }
            });
		}
    };
    
	limpa = () => {
		this.lista = [];
    };
    
	desenha = () => {
		//obs do chao
		for (var i = 0, tam = this.lista.length; i<tam; i++) {
			var obs = this.lista[i];
			Control.getContext().fillStyle = obs.cor;
			Control.getContext().fillRect(obs.x, this.game.chao.y-obs.altura, obs.largura, obs.altura);
		}

		//obs do ceu
		for (var i = 0, tam = this.lista.length; i<tam; i++) {
			var obs = this.lista[i];
			Control.getContext().fillStyle = obs.cor;
			Control.getContext().fillRect(obs.x, 0, obs.largura, obs.altura);
		}
	};
  
  }