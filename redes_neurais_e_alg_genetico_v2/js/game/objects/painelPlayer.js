/*
  Autor: Daniel dos Santos
  Data: 19/07/2020
  Observação: Classe que cria um painel para os players.
*/

class PainelPlayer {

    constructor(players) {
      this.inserePlayers(players);
      this.count = players.length;
    };

    inserePlayers = (players) => {
      //limpa todos players já existentes na lista
      Control.getCentral().innerHTML = "";

      //add players a lista
      players.forEach(element => {
        var canvas = this.criacaoCanvas(element.nome);
        var context = canvas.getContext("2d");
        Control.getCentral().appendChild(canvas);
        this.configuraCanvasPlayer(canvas,context,element);
      });
    };

    criacaoCanvas = (name) => {
      var canvasPlayer = document.createElement("canvas");
      canvasPlayer.id = "id"+name;
      canvasPlayer.style = "margin-right:10px;";
      return canvasPlayer;
    };

    configuraCanvasPlayer = (canvas,ctx,player) => {
      //canvas
      canvas.width = player.largura;
      canvas.height = player.altura+20;
      canvas.style.border = "1px solid";
  
      //desenha circle
      ctx.beginPath();
      ctx.arc(
        player.largura/2, 
        player.altura/2, 
        (player.altura/2)-6, 
        0, 
        2 * Math.PI, 
        false
      );
      ctx.fillStyle = player.cor;
      ctx.fill();
  
      //desenha text
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.font = "10px Arial";
      ctx.fillText(player.nome, 0, player.altura+15);
        
      //desenha img
      player.avatarImg.onload = () => { 
        ctx.save();
        Sprite.getSpritePlayer().desenhaPlayer(
          ctx, 
          player.avatarImg,
          0, 
          0
        );
        ctx.restore();
      };
    };
    
  }