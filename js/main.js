// 1º PRINCIPIO SOLID => PRINCIPIO DE ÚNICA RESPONSABILIDADE

// 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
import Jogador from "./jogador.js"
import Obstaculo from "./obstaculo.js"
import InputHandler from "./inputHandler.js"
import Shape from "./shape.js";

const canvas = document.getElementById("GameScreen");
const contexto = canvas.getContext("2d");
let GAME_WIDTH = canvas.width = 400, GAME_HEIGHT = canvas.height = 400;
let entityList = [];
let input;

function init(){
    // 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
    let jogador = new Jogador(50, 50, GAME_WIDTH/2 - 25, GAME_HEIGHT/2 - 25, GAME_WIDTH, GAME_HEIGHT);
    let obstaculo = new Obstaculo(20, 50, 100, 100, GAME_WIDTH, GAME_HEIGHT)
    entityList.push(jogador);
    entityList.push(obstaculo);

    input = new InputHandler();
    GameLoop();
}

function GameLoop(){
    window.requestAnimationFrame(GameLoop);
    contexto.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Verificando as teclas pressionadas
    // E se o jogador esta dentro do canvas
    entityList.forEach(entity => {
        entity.update(input.getKeysDown());
    });
    
    entityList.forEach(entity => {
        entity.draw(contexto);
    });
}

init();
