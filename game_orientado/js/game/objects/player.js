/*
  Autor: Daniel dos Santos
  Data: 13/06/2020
  Observação: Classe player 
*/

class Player {

  constructor(cor, nome) {
      this.x = 60;
      this.y = 0;
      this.altura = 50;
      this.largura = 50;
      this.cor = cor;
      this.nome = nome;
      this.gravidade = 1.1;
      this.velocidade = 0;
      this.forcaDoPulo = 20;
      this.score = 0;
      this.rotacao = 0;
      this.avatarImg = new Image();
      this.avatarImg.src = "images/corona.png";
  }

  atualiza = (jogo) => {
		this.velocidade += this.gravidade;
		this.y += this.velocidade;
		this.rotacao += Math.PI / 180 * jogo.velocidade;

		//chega no chao
		if (this.y > jogo.chao.y - this.altura && jogo.estadoAtual != jogo.estados.perdeu) {
			this.y = jogo.chao.y - this.altura;
			this.velocidade = 0;
		}
  };
    
	pula = () => {
		if (this.y > 100) {
			this.velocidade = -this.forcaDoPulo;
		}
  };
    
	reset = () => {
		this.velocidade = 0;
		this.y = 0;
		this.score = 0;
  };
    
	desenha = () => {
    //desenha circle
    Control.getContext().beginPath();
    Control.getContext().arc(this.x+this.largura/2, this.y+this.altura/2, (this.altura/2)-6, 0, 2 * Math.PI, false);
    Control.getContext().fillStyle = this.cor;
    Control.getContext().fill();

    //desenha text
    Control.getContext().beginPath();
    Control.getContext().fillStyle = "black";
    Control.getContext().font = "10px Arial";
    Control.getContext().fillText(this.nome, this.x, this.y+this.altura+15);

    //desenha img
		Control.getContext().save();
		Control.getContext().translate(this.x+this.largura/2,this.y+this.altura/2);
		Control.getContext().rotate(this.rotacao);
		Sprite.getSpriteAvatar().desenha(this.avatarImg, -this.largura/2, -this.altura/2);
    Control.getContext().restore();
  };
  
}