/*
  Autor: Daniel dos Santos
  Data: 11/04/2020
  Observação: Classe que cria componentes.
*/

class Build {

  constructor() {
    var div = this.getDiv();
    var canvas = this.getCanvas();
    var br = this.getBr();
    var h4 = this.getH4();
    var central = this.getCentral();

    div.appendChild(canvas);
    div.appendChild(br);
    div.appendChild(h4);
    div.appendChild(br);
    div.appendChild(central);

    this.addElementBody(div);
  }

  addElementBody = (element) => {
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(element);
  };

  getDiv = () => {
    var div = document.createElement("div");
    div.classList.add("center");
    return div;
  };

  getCentral = () => {
    var div = document.createElement("div");
    div.classList.add("center");
    div.id = "central";
    return div;
  };

  getCanvas = () => {
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.classList.add("canvas");
    return canvas;
  };

  getBr = () => {
    var tagBr = document.createElement("br");
    return tagBr;
  };

  getH4 = () => {
    var tagH4 = document.createElement("h4");
    tagH4.innerHTML = "Players Ativos";
    return tagH4;
  };

}