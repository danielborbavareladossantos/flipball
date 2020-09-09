/*
  Autor: Daniel dos Santos
  Data: 13/06/2020
  Observação: Classe define sprit das imagens.
*/

class Sprite {

  constructor(x,y,largura,altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  };

  static getSpriteBg = () => {
    return new Sprite(0, 100, 500, 500);
  };

  static getSpriteAvatar = () => {
    return new Sprite(0,0,470,470);
  };

  static getSpritePlayer = () => {
    return new Sprite(0,0,50,50);
  };

  static getSpritePerdeu = () => {
    return new Sprite(0, 0, 454, 340);
  };

  static getSpriteJogar = () => {
    return new Sprite(0, 0, 454, 340);
  };

  desenha = (imgCanvas ,xCanvas, yCanvas) => {
    /*
      parametro 1, imagem
      parametro 2, x na imagem
      parametro 3, y na imagem
      parametro 4, largura na imagem
      parametro 5, altura na imagem
      parametro 6, x na canvas
      parametro 7, y na canvas
      parametro 8, largura na canvas
      parametro 9, altura na canvas
    */
    Control.getContext().drawImage(
      imgCanvas, 
      this.x, 
      this.y, 
      this.largura, 
      this.altura, 
      xCanvas, 
      yCanvas, 
      this.largura, 
      this.altura
    );
  };

  desenhaPlayer = (ctx, imgCanvas ,xCanvas, yCanvas) => {
    /*
      parametro 1, imagem
      parametro 2, x na imagem
      parametro 3, y na imagem
      parametro 4, largura na imagem
      parametro 5, altura na imagem
      parametro 6, x na canvas
      parametro 7, y na canvas
      parametro 8, largura na canvas
      parametro 9, altura na canvas
    */
    ctx.drawImage(
      imgCanvas, 
      this.x, 
      this.y, 
      this.largura, 
      this.altura, 
      xCanvas, 
      yCanvas, 
      this.largura, 
      this.altura
    );
  };

}