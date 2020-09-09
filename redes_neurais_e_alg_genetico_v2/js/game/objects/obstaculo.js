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
		// this.lista.push({
		// 	x: this.game.largura,
		// 	largura: 30+Math.floor(21*Math.random()),
		// 	altura: 30+Math.floor(100*Math.random()),
		// 	cor: this.game.getRandomColor()
        // });
        this.lista.push({
			x: this.game.largura,
			largura: 10,
			altura: 30+Math.floor(100*Math.random()),
			// altura: 130,
			cor: this.game.getRandomColor()
		});

		this.tempoInsere = 40+Math.floor(21*Math.random());
		// this.tempoInsere = 41;
    };
    
	atualiza = () => {
		if (this.tempoInsere == 0) {
			this.insere();
		} else {
			this.tempoInsere--;
		}

		for (var i = 0, tam = this.lista.length; i < tam; i++) {
            var obs = this.lista[i];

            if (obs == null)
                return;

            obs.x -= this.game.velocidade;

            this.game.players.forEach(element => {
                if (element.estadoAtual != this.game.estados.perdeu) {
                    if (
                        (element.x < obs.x+obs.largura && 
                        element.x+element.largura >= obs.x && 
                        element.y+element.altura >= this.game.chao.y-obs.altura)
                        ||
                        (element.x < obs.x+obs.largura && 
                        element.x+element.largura >= obs.x && 
                        element.y+element.altura <= obs.altura+element.altura)
                    ) {
                        element.estadoAtual = this.game.estados.perdeu;
                    } else if (element.x >= obs.x+10 && element.x <= obs.x+10) {
                        element.score++;
                        this.game.qtdPontos = element.score;
                        if (this.game.qtdPontos > this.game.record) {
                            this.game.record = this.game.qtdPontos;
                        }
                    }
                }
            });
            
            const perdas = this.game.players.filter(element => (element.estadoAtual == this.game.estados.perdeu));
            if (perdas.length === this.game.players.length) {
                this.game.estadoAtual = this.game.estados.perdeu;
                this.game.qtdPontos = 0;
            }
        }
        
        this.lista = this.lista.filter(element => element.x+element.largura >= 0);
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