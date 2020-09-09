/*
  Autor: Daniel dos Santos
  Data: 13/06/2020
  Observação: Classe cria objeto para chão do jogo.
*/

class Chao {

    constructor() {
      this.y = 450;
      this.altura = 50;
      this.chaoImg = new Image();
      this.chaoImg.src = "images/chao.png";
    }

    desenha = (largura) => {
      Control.getContext().save();
      Control.getContext().drawImage(
        this.chaoImg, 
        this.y, 
        0, 
        largura, 
        this.altura, 
        0, 
        this.y,
        largura, 
        this.altura, 
      );
      Control.getContext().restore();
    };

}