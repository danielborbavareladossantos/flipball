var 
frames = 0, 
maxPulos = 3,
VELOCIDADE = 6,
canvas, 
ctx, 
ALTURA, 
LARGURA, 
estadoAtual,
estados = {
	jogar:0,
	jogando:1,
	perdeu:2
},
record,
img,
//objeto chao
chao = {
	y:550,
	altura:50,
	cor: "#ffdf70",
	desenha: function() {
		ctx.fillStyle = this.cor;
		ctx.fillRect(0, this.y, LARGURA, this.altura);
	}
},
//objeto personagem
bloco = {
	x:60,
	y:0,
	altura:50,
	largura:50,
	cor:"#fc5753",
	gravidade:1.1,
	velocidade:0,
	forcaDoPulo:20,
	score:0,
	rotacao: 0,
	atualiza: function() {
		this.velocidade += this.gravidade;
		this.y += this.velocidade;
		this.rotacao += Math.PI / 180 * VELOCIDADE;

		//chega no chao
		if (this.y > chao.y - this.altura && estadoAtual != estados.perdeu) {
			this.y = chao.y - this.altura;
			this.velocidade = 0;
		}
	},
	pula: function() {
		if (this.y > 100) {
			this.velocidade = -this.forcaDoPulo;
		}
	},
	reset: function() {
		this.velocidade = 0;
		this.y = 0;
		this.score = 0;
	},
	desenha: function() {
		// ctx.fillStyle = this.cor;
		// ctx.fillRect(this.x, this.y, this.largura, this.altura);
		ctx.save();
		ctx.translate(this.x+this.largura/2,this.y+this.altura/2);
		ctx.rotate(this.rotacao);
		avatar.desenha(avatarImg, -this.largura/2, -this.altura/2);
		ctx.restore();
	}
},
//objeto obstaculos
obstaculos = {
	_obs: [],
	cores: ["#ffbc1c","#ff1c1c","#ff85e1","#52a7ff","#78ff5d"],
	tempoInsere:0,
	insere: function() {
		this._obs.push({
			x:LARGURA,
			largura: 30+Math.floor(21*Math.random()),
			altura: 30+Math.floor(100*Math.random()),
			cor: this.cores[Math.floor(5*Math.random())]
		});

		this.tempoInsere = 30+Math.floor(21*Math.random());
	},
	atualiza: function() {
		if (this.tempoInsere == 0) {
			this.insere();
		} else {
			this.tempoInsere--;
		}

		for (var i = 0, tam = this._obs.length; i < tam; i++) {
			var obs = this._obs[i];

			obs.x -= VELOCIDADE;

			if (
				(bloco.x < obs.x+obs.largura && 
				bloco.x+bloco.largura >= obs.x && 
				bloco.y+bloco.altura >= chao.y-obs.altura)
				||
				(bloco.x < obs.x+obs.largura && 
				bloco.x+bloco.largura >= obs.x && 
				bloco.y+bloco.altura <= obs.altura+bloco.altura)
			) {
				estadoAtual = estados.perdeu;

			} else if (obs.x == 0) {
				bloco.score++;
			//remove obstaculo que já chegou no inicio do canvas
			} else if (obs.x <= -obs.largura) {
				this._obs.splice(i,1);
				tam--;
				i--;
			}
		}
	},
	limpa: function() {
		this._obs = [];
	},
	desenha: function() {
		//obs do chao
		for (var i = 0, tam = this._obs.length; i<tam; i++) {
			var obs = this._obs[i];
			ctx.fillStyle = obs.cor;
			ctx.fillRect(obs.x, chao.y-obs.altura, obs.largura, obs.altura);
		}

		//obs do ceu
		for (var i = 0, tam = this._obs.length; i<tam; i++) {
			var obs = this._obs[i];
			ctx.fillStyle = obs.cor;
			ctx.fillRect(obs.x, 0, obs.largura, obs.altura);
		}
	}
};

//funcao principal
function main() {

	ALTURA = window.innerHeight;
	LARGURA = window.innerWidth;

	if (LARGURA >= 500) {
		LARGURA = 600;
		ALTURA = 600;
	}

	canvas = document.createElement("canvas");
	canvas.width = LARGURA;
	canvas.height = ALTURA;
	canvas.style.border = "1px solid #000";

	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	document.addEventListener("mousedown",clique);

	estadoAtual = estados.jogar;

	record = localStorage.getItem("record");
	if (record == null)
		record = 0;

	//define imagem para fundo
	backgroundImg = new Image();
	backgroundImg.src = "images/background.jpg";

	//define imagem para boneco
	avatarImg = new Image();
	avatarImg.src = "images/bola.png";

	//define imagem para perdeu
	perdeuImg = new Image();
	perdeuImg.src = "images/perdeu.png";

	//define imagem para play
	jogarImg = new Image();
	jogarImg.src = "images/jogar.png";

	roda();

}

//se user clica
function clique(event) {

	if (estadoAtual == estados.jogar) {
		estadoAtual = estados.jogando;
	} else if (estadoAtual == estados.jogando) {
		bloco.pula();
	} else if (estadoAtual == estados.perdeu && bloco.y >= 2*ALTURA) {
		estadoAtual = estados.jogar;
		obstaculos.limpa();
		bloco.reset();
	}
	
}

//corre jogo
function roda() {
	atualiza();
	desenha();

	window.requestAnimationFrame(roda);
}

//atualiza jogo
function atualiza() {
	frames++;

	bloco.atualiza();
	if (estadoAtual == estados.jogando) {
		obstaculos.atualiza();
	}
}

//monta jogo
function desenha() {
	// ctx.fillStyle = "black";
	// ctx.fillRect(0,0,LARGURA,ALTURA);
	bg.desenha(backgroundImg,0,0);
	// avatar.desenha(avatarImg,50,50);

	//menu
	if (estadoAtual == estados.jogar) {
		// ctx.fillStyle = "#fc5753";
		// ctx.fillRect(LARGURA/2-50, ALTURA/2-50, 100, 100);
		jogar.desenha(jogarImg,(LARGURA-jogar.largura)/2, (ALTURA-jogar.altura)/2);
	} else if (estadoAtual == estados.perdeu) {
		// ctx.fillStyle = "red";
		// ctx.fillRect(LARGURA/2-50, ALTURA/2-50, 100, 100);
		perdeu.desenha(perdeuImg,(LARGURA-perdeu.largura)/2, (ALTURA-perdeu.altura)/2);

		ctx.save();
		ctx.translate(LARGURA/2,ALTURA/2);
		ctx.fillStyle = "#fff";

		//desenha record
		if (bloco.score >= record) {
			ctx.fillText("Novo Record!",-150,185);
			ctx.fillText(record,35,102);
		} else if (bloco.score < 10)
			ctx.fillText(record,35,102);
		else if (record >= 10 && record < 100)
			ctx.fillText(record,35,102);
		else
			ctx.fillText(record,35,102);

		//desenha score atual
		if (bloco.score < 10)
			ctx.fillText(bloco.score,15,22);
		else if (bloco.score >= 10 && bloco.score < 100)
			ctx.fillText(bloco.score,2,22);
		else
			ctx.fillText(bloco.score,-11,22);
		ctx.restore();

		//grava record
		if (bloco.score > record) {
			localStorage.setItem("record", bloco.score);
			record = bloco.score;
		}

	} else if (estadoAtual == estados.jogando) {
		obstaculos.desenha();
	}

	ctx.fillStyle = "#fff";
	ctx.font = "50px Arial";
	ctx.fillText(bloco.score,30,68);

	chao.desenha();
	bloco.desenha();
}

//executa metodo principal
main();