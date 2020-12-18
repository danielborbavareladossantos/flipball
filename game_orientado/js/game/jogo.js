/*
  Autor: Daniel dos Santos
  Data: 13/06/2020
  Observação: Classe que gerencia game.
*/

class Jogo {

    constructor() {
        //declara atributos importante para jogo
        this.frames = 0;
        this.velocidade = 6;
        this.altura = 500;
        this.largura = 500;
        this.estadoAtual = 0,
        this.estados = {
            jogar: 0,
            jogando: 1,
            perdeu: 2
        };
        this.doencas = ["Coronavirus","H1N1","Ebola","Raiva","Dengue"];
        this.players = [];
        this.chao = new Chao();
        this.obstaculo = new Obstaculo(this);

        //configura limites do canvas
        this.configuraCanvas();
        
        //declara imagem de background do jogo
        this.backgroundImg = new Image();
        this.backgroundImg.src = "images/marketplace.png";

        //define imagem para perdeu
        this.perdeuImg = new Image();
        this.perdeuImg.src = "images/perdeu.png";

        //define imagem para play
        this.jogarImg = new Image();
        this.jogarImg.src = "images/jogar.png";

        //deixa correndo frame
        this.roda();

        //cria players
        this.reset();
    }

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    instanciaPlayersAuto = (qtd) => {
        this.players = [];
        for (let i = 0; i < qtd; i++) {
            var p = new Player(this.getRandomColor(),this.doencas[Math.floor(5*Math.random())]);
            this.players.push(p);
        }
    };

    reset = () => {
        //cria players
        this.instanciaPlayersAuto(1);

        //desenha player painel
        new PainelPlayer(this.players);
    };

    configuraCanvas = () => {
        Control.getCanvas().width = this.largura;
        Control.getCanvas().height = this.altura;
        Control.getCanvas().style.border = "1px solid #000";
    };

    desenha = () => {
        //desenha fundo
        Sprite.getSpriteBg().desenha(this.backgroundImg,0,0);

        if (this.estadoAtual == this.estados.jogar) {
            Sprite.getSpriteJogar().desenha(
                this.jogarImg,
                (this.largura-Sprite.getSpriteJogar().largura)/2, 
                (this.altura-Sprite.getSpriteJogar().altura)/2
            );
        } else if (this.estadoAtual == this.estados.perdeu) {
            Sprite.getSpritePerdeu().desenha(
                this.perdeuImg,
                (this.largura-Sprite.getSpritePerdeu().largura)/2, 
                (this.altura-Sprite.getSpritePerdeu().altura)/2
            );
        } else if (this.estadoAtual == this.estados.jogando) {
            //desenha obstaculo
            this.obstaculo.desenha(this.largura);
        }

        //desenha chao
        this.chao.desenha(this.largura);

        //desenha player
        this.players.forEach(element => {
            element.desenha();
        });
        
    };

    atualiza = () => {
        //cria novo frame
        this.frames++;

        // atualiza player
        this.players.forEach(element => {
            element.atualiza(this);
        });

        //cria obstaculos
        if (this.estadoAtual == this.estados.jogando) {
            this.obstaculo.atualiza();
        }
    };

    roda = () => {
        this.atualiza();
        this.desenha();

        window.requestAnimationFrame(this.roda);
    };

}