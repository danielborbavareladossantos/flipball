var indexNextObs = 0;
var pesos = [
    {peso: 0, status: true},
    {peso: 0, status: false},
    {peso: 0, status: true},
    {peso: 0, status: true},
    {peso: 0, status: false},
    {peso: 0, status: true},
];
var flgIa = false;
var historico = [];

const execute = () => {

    //entradas
    // console.log("Distancia x proximo obs: "+obstaculos._obs[indexNextObs].x);
    // console.log("Altura do proximo obs: "+obstaculos._obs[indexNextObs].altura);
    // console.log("Altura da bola: "+bloco.altura);
    
    flgIa = true;
    indexNextObs = bloco.score;    
    
    var result = perceptron(
        obstaculos._obs[indexNextObs].x,
        obstaculos._obs[indexNextObs].altura-bloco.altura
    );

    //saida
    if (result)
        bloco.pula();

};

const perceptron = (dH,dV) => {
    const n0 = neuronio({v0:dH,i:0},{v1:dV,i:1});
    const n1 = neuronio({v0:dH,i:2},{v1:dV,i:3});
    const r = neuronio({v0:n0,i:4},{v1:n1,i:5});
    if (r > 0)
        return true;
    else
        return false;
};

const neuronio = (obj0,obj1) => {
    const r0 = obj0.v0 * pesos[obj0.i].peso;
    const r1 = obj1.v1 * pesos[obj1.i].peso;
    const soma = r0 + r1;
    if (soma > 0)
        return soma;
    else
        return 0;
};

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const ajuste = (obj,a) => {
    if (obj.status && obj.peso < 1000) {
        return {peso: obj.peso+a, status: true};
    } else if (obj.status && obj.peso > 1000) {
        return {peso: obj.peso-a, status: false};
    } else if (!obj.status && obj.peso > -1000) {
        return {peso: obj.peso-a, status: false};
    } else if (!obj.status && obj.peso < -1000) {
        return {peso: obj.peso+a, status: true};
    }
};

const randomInicializate = (min, max) => {
    if (historico.length == 0) {
        pesos[0].peso = random(-1000,1000);
        pesos[1].peso = random(-1000,1000);
        pesos[2].peso = random(-1000,1000);
        pesos[3].peso = random(-1000,1000);
        pesos[4].peso = random(-1000,1000);
        pesos[5].peso = random(-1000,1000);
        return;
    }

    var obj = aprendeComPassado();
    if (obj.max == 0) {
        pesos[0] = ajuste(obj.pesos[0],120);
        pesos[1] = ajuste(obj.pesos[1],140);
        pesos[2] = ajuste(obj.pesos[2],160);
        pesos[3] = ajuste(obj.pesos[3],180);
        pesos[4] = ajuste(obj.pesos[4],200);
        pesos[5] = ajuste(obj.pesos[5],220);
    } else {
        pesos[0] = ajuste(obj.pesos[0],10);
        pesos[1] = ajuste(obj.pesos[1],20);
        pesos[2] = ajuste(obj.pesos[2],30);
        pesos[3] = ajuste(obj.pesos[3],40);
        pesos[4] = ajuste(obj.pesos[4],50);
        pesos[5] = ajuste(obj.pesos[5],60);
    }
};

const aprendeComPassado = () => {
    var max = -99999;
    var vpesos = null;
    historico.forEach(element => {
        if (element.score >= max) {
            max = element.score;
            vpesos = element.pesos;
        }
    });
    return {pesos:vpesos,max:max};
};