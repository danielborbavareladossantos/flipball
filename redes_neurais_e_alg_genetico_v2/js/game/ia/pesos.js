/*
  Autor: Daniel dos Santos
  Data: 13/06/2020
  Observação: Classe que gerencia game.
*/

class Pesos {

    constructor(genetica,tipagem) {
        this.lista = [];
        this.limite = 100;

        if (genetica == null || tipagem === "aleatorio") {
            for (let i = 0; i < 4; i++) {
                this.lista.push(new Peso(this.getNumber(),this.getRandomIntInclusive(0,1)));
            }
        } else {
            if (tipagem === "restrito") {
                var geneticaMutada = this.mutacao(genetica,this.getRandomIntInclusive(0,10));
                this.lista = geneticaMutada;
            } else {
                var geneticaMutada = this.mutacao(genetica,this.getRandomIntInclusive(0,20));
                this.lista = geneticaMutada;
            }
            // console.log("Gerado genetica mutada: ");
            // console.log(JSON.stringify(geneticaMutada));
        }
    };

    getNumber = () => {
        const simbol = this.getRandomIntInclusive(0,1);
        var number = this.getRandomIntInclusive(0,this.limite);

        if (simbol === 0) {
            number = number*-1;
        }

        return number;
    };

    getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    atualizacao = () => {
        this.lista.forEach(element => {
            if (element.number === this.limite)
                element.elevacao = 0;
            if (element.number === -this.limite)
                element.elevacao = 1;

            if (element.elevacao === 0)
                element.number--;
            else
                element.number++;
        });
    };

    mutacao = (lista,margem) => {
        lista.forEach(element => {
            for (let i = 0; i < margem; i++) {
                if (element.number === this.limite)
                    element.elevacao = 0;
                if (element.number === -this.limite)
                    element.elevacao = 1;

                if (element.elevacao === 0)
                    element.number--;
                else
                    element.number++;
            }
        });
        return lista;
    };

}