function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(imgCanvas ,xCanvas, yCanvas) {
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
		ctx.drawImage(imgCanvas, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var 
bg = new Sprite(200, 200, 600, 600),
avatar = new Sprite(0,0,470,470),
perdeu = new Sprite(0, 0, 454, 340),
jogar = new Sprite(0, 0, 454, 340);