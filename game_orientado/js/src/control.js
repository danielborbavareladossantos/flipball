/*
  Autor: Daniel dos Santos
  Data: 11/04/2020
  Observação: Classe que retorna objetos de elementos da tela.
*/

class Control {

  static getBody = () => {
    return document.getElementsByTagName("body")[0];
  };

  static getCanvas = () => {
    return document.getElementById("canvas");
  };

  static getContext = () => {
    return this.getCanvas().getContext("2d");
  };

  static getCentral = () => {
    return document.getElementById("central");
  };

  static getCanvasPlayer = () => {
    return document.getElementById("canvasPlayer");
  };

  static getContextPlayer = () => {
    return this.getCanvasPlayer().getContext("2d");
  };
  
}