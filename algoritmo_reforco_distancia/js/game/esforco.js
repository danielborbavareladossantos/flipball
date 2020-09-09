/*
  Autor: Daniel dos Santos
  Data: 25/07/2020
  Observação: Classe que faz controle de esforço para players
*/

class Esforco {

    constructor() {
        this.tabela = [];
        this.escolhas = [];
        this.registra = 0;
    };

    defineAcao = (game) => {
        var {distancia,altura} = this.getParams(game);
        return this.check(distancia,altura);
    };

    reforca = (tipo) => {
        var ultimaEscolha = this.escolhas[this.escolhas.length-1];

        var index = this.tabela.findIndex(e => e.distancia == ultimaEscolha.distancia && e.acao == ultimaEscolha.acao);
        if (tipo)
            this.tabela[index].retribuicao = this.tabela[index].retribuicao+1;
        else
            this.tabela[index].retribuicao = this.tabela[index].retribuicao-1;
    };

    buscaPerto = (lista,param) => {

        var nLista = [];
        lista.forEach(element => {
            if (element.retribuicao > -3) {
                nLista.push(element);
            }
        });

        var min = Number.POSITIVE_INFINITY;
        var i = 0;
        nLista.forEach((element,index) => {
            if (Math.abs(element.distancia-param) < min) {
                min = Math.abs(element.distancia-param);
                i = index;
            }
        });
        
        return nLista[i];
    };

    check = (distancia,altura) => {

        // if (!(distancia > 100 && distancia < 110))
        //     return 0;
        if (this.registra > 100) {
            this.registra = 0;
            return 0;
        } else {
            this.registra++;
        }

        //garante poucas iteracoes
        if (this.tabela.length>0) {
            //retorna valor mais proximo do array
            var closest = this.buscaPerto(this.tabela,distancia);
            
            //garante poucas iteracoes
            if (Math.abs(closest.distancia-distancia) < 5) {
                //faz filtro pelo distancia retornando a acao
                var rLista = this.tabela.filter(e => e.distancia == closest.distancia);
                if (rLista && rLista.length>0) {
                    if (rLista[0].retribuicao >= rLista[1].retribuicao) {
                        this.escolhas.push(rLista[0]);
                        return rLista[0].acao;
                    } else {
                        this.escolhas.push(rLista[1]);
                        return rLista[1].acao;
                    }
                }
            }
        }

        //faz insercoes
        var tab = this.tabela.filter(e => e.distancia == distancia);
        if (!(tab.length>0)) {
            var r0 = {acao:0,distancia:distancia,altura:altura,retribuicao:0};
            var r1 = {acao:1,distancia:distancia,altura:altura,retribuicao:0};
            this.tabela.push(r0);
            this.tabela.push(r1);
            this.escolhas.push(r0);
            return r0.acao;
        }

        return 0;
        
    };

    getParams = (game) => {
        const agente = game.players[0];
        const listObs = game.obstaculo.lista;
        var frenteObs = [];
        var nearObs = null;
        var distancia = 0;
        var altura = 0;

        //add todos objetos a frente
        listObs.forEach(element => {
            if (agente.x < element.x+30) {
                frenteObs.push(element);
            }
        });

        //retira obstaculo mais proximo
        var md = Number.POSITIVE_INFINITY;
        frenteObs.forEach(element => {
            var d = (element.x-agente.x);
            if (d<md) {
                md = d;
                nearObs = element;
            }
        });

        //calcula posicoes
        if (nearObs!=null) {
            distancia = (nearObs.x-agente.x);
            altura = (nearObs.altura-agente.y);
        }

        return {
            distancia:distancia,
            altura:altura,
        };

    };

    marcador = () => {
        this.tabela.forEach(element => {
            Control.getContext().beginPath();
            Control.getContext().fillStyle = "red";
            Control.getContext().fillRect(element.x, element.y, 5, 5);
            Control.getContext().fill();
        });
    };

}