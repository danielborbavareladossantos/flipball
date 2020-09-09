/*
  Autor: Daniel dos Santos
  Data: 11/04/2020
  Observação: Classe que seta listeners de componentes.
*/

class Action {

  constructor() {

    //inicia jogo
    this.game = new Jogo();

    Control.getBody().addEventListener('keydown', (event) => {

      var keyCode = event.keyCode;

      if (keyCode === 38) {
        if (this.game.estadoAtual == this.game.estados.jogar) {
          this.game.estadoAtual = this.game.estados.jogando;
        } else if (this.game.estadoAtual == this.game.estados.jogando) {
          this.game.players[0].pula();
        } else if (this.game.estadoAtual == this.game.estados.perdeu && this.game.players[0].y >= 2*this.game.altura) {
          this.game.estadoAtual = this.game.estados.jogar;
          this.game.obstaculo.limpa();
          this.game.reset();
          this.game.players.forEach(element => {
            element.reset();
          });
        }
      }
      
    }, false);

    Control.getBody().addEventListener('keydown', (event) => {

      var keyCode = event.keyCode;

      //M
      if (keyCode === 77) {
        this.game.qtdPlayers = 1;
        this.game.reset();
        this.game.estadoAtual = this.game.estados.jogando;
        this.game.mode = 1;
      }
      
    }, false);

  }

}