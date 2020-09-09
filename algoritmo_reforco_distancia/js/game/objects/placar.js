/*
  Autor: Daniel dos Santos
  Data: 25/07/2020
  Observação: Classe responsável por mostrar pontos do jogo.
*/

class Placar {

  constructor(game) {
    this.desenha(game);
  };

  desenha = (game) => {
    //desenha text
    Control.getContext().beginPath();
    Control.getContext().fillStyle = "black";
    Control.getContext().font = "38px Arial";
    Control.getContext().fillText(game.qtdPontos, game.largura-50, 50);
  };

}