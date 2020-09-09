# FlipBall

Project with the objective of making an analysis based on better algorithms for a game similar to Flipbird.

Projeto com objetivo de fazer uma análise com base em melhores algoritmos para jogo similar ao Flipbird.

## Installation

Game was developed in pure Javascript, without using a framework, and can be easily run by playing index.html for your browser.

Jogo foi desenvolvido em Javascript puro, sem uso de framework, e pode ser rodado facilmente jogando o index.html para seu navegador.

## Content

### game_estrutural

When i started this project i had not yet done the BoardJSClient project (https://github.com/danielborbavareladossantos/BoardJSClient), so i developed it in a structural way with the help of tutorials on the internet, still with no objective of programming an i.a. in the future.

Quando iniciei esse projeto ainda não tinha feito o projeto BoardJSClient (https://github.com/danielborbavareladossantos/BoardJSClient), então o desenvolvi de forma estrutural com o auxilio de tutoriais na internet, ainda sem objetivo de programar uma i.a. futuramente.

![alt text](https://github.com/danielborbavareladossantos/flipball/blob/master/docs/game1.gif?raw=true)

### redes_neurais_e_alg_genetico_v1

After finishing the game, i was studying about neural network algorithms, and I thought about using the game to improve my learning in this area, unfortunately when looking at the code after a few months that I had developed, i realized that it was better to start from scratch and then time more organized. :/

Após finalizar o jogo, estava estudando sobre algoritmo de redes neurais, e pensei em usar o jogo para melhorar meu aprendizado sobre essa área, infelizmente ao olhar para o código depois de alguns meses que tinha desenvolvido, percebi que era melhor começar do zero e dessa vez deixar mais organizado. :/

![alt text](https://github.com/danielborbavareladossantos/flipball/blob/master/docs/game2.gif?raw=true)

### game_orientado

So for the base of this game i decided to use the BoardJSCliente project that i had developed months ago, at the time i didn't realize it, but this project was a good basis for making games in pure JS, so I developed the same object-oriented game.

Então para base desse game resolvi utilizar o projeto BoardJSCliente que havia desenvolvido a meses atrás, na época não havia percebido mas esse projeto era uma boa base para fazer jogos em JS puro, então desenvolvi o mesmo jogo orientado a objeto.

![alt text](https://github.com/danielborbavareladossantos/flipball/blob/master/docs/game3.gif?raw=true)

### algoritmo_reforco_distancia

I had finished the project and could start the project with neural networks, but talking to teachers and doing some research i saw that the reinforcement algorithm is also a good algorithm for this type of situation. So i started the implementation using only a sensor, the distance from the agent (player) to the obstacle.

Tinha finalizado o projeto e já poderia iniciar o projeto com redes neurais, mas conversando com professores e fazendo algumas pesquisas vi que o algoritmo de reforço também é um bom algoritmo para esse tipo de situação. Então iniciei a implementação apenas utilizando um sensor, a distância do agente (player) até o obstáculo.

![alt text](https://github.com/danielborbavareladossantos/flipball/blob/master/docs/distancia.png?raw=true)

### algoritmo_reforco_distancia_altura

The distance algorithm had worked very well, a few minutes and he already knew how to jump at the right times, so i decided to increase one more sensor, the height. Except that I had not thought that when increasing a sensor the state of which the player could be would increase exponentially. This algorithm may work, but it should wait a few hours (probably more than 4 hours) for all states to be checked.

O algoritmo de distância havia funcionado muito bem, poucos minutos e ele já sabia pular nas horas certas, então decidi aumentar mais um sensor, a altura. Só que não havia pensado que ao aumentar um sensor o estado do qual o player poderia estar iriam aumentar exponencialmente. Esse algoritmo pode funcionar mas deve se esperar algumas horas (provavelmente mais de 4h) para que sejam verificada todos os estados.

![alt text](https://github.com/danielborbavareladossantos/flipball/blob/master/docs/distanciaAltura.png?raw=true)

### redes_neurais_e_alg_genetico_v2

Not wanting to wait so long for training, i started implementing the neural network algorithm with a genetic algorithm, using 3 sensors, distance, height and speed, and speed is a fixed data, so i left it because the idea was to be able to have the possibility of increase the speed of the game to make it harder and so the network knows how to deal with this variable too. The genetic algorithm in this case will play the role of the backpropagation of regulating the weights according to more promising players, with random weights being able to pass the obstacles.

Não querendo esperar tanto para o treinamento, dei início a implementação do algoritmo de redes neurais com algoritmo genético, usando 3 sensores, distância, altura e velocidade, sendo que velocidade é um dado fixo, deixei assim pois a ideia era poder ter a possibilidade de aumentar a velocidade do jogo para dificultar e assim a rede saber lidar com essa variável também. O algoritmo genético nesse caso vai fazer o papel do backpropagation de ir regulando os pesos conforme players mais promissores, com pesos aleatórios vão conseguindo passar os obstáculos.

![alt text](https://github.com/danielborbavareladossantos/flipball/blob/master/docs/rede.png?raw=true)

## Credits

Project developed by Daniel Borba Varela dos Santos.

Projeto desenvolvido por Daniel Borba Varela dos Santos.

Linkedin - https://www.linkedin.com/in/daniel-dos-santos-b89010158/

Facebook - https://www.facebook.com/daniel.borba.948