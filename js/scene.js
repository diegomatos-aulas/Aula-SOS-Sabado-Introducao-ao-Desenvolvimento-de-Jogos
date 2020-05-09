// 1º PRINCIPIO SOLID => PRINCIPIO DE ÚNICA RESPONSABILIDADE

// 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
import Jogador from "./jogador.js"
import Obstaculo from "./obstaculo.js"
import InputHandler from "./inputHandler.js"

const canvas = document.getElementById("GameScreen");
const contexto = canvas.getContext("2d");
let GAME_WIDTH = canvas.width = 400, GAME_HEIGHT = canvas.height = 400;
let entityList = [];
let input, jogador;

let imagemDoJogador = new Image();
imagemDoJogador.addEventListener("load", init)
imagemDoJogador.src = "../assets/player.png";

function init() {
    // 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
    jogador = new Jogador(50, 50, GAME_WIDTH / 2 - 25, GAME_HEIGHT / 2 - 25, GAME_WIDTH, GAME_HEIGHT, imagemDoJogador);
    let obstaculo = new Obstaculo(20, 50, 100, 100, GAME_WIDTH, GAME_HEIGHT)
    entityList.push(jogador);
    entityList.push(obstaculo);

    input = new InputHandler();
    GameLoop();
}

function GameLoop() {
    window.requestAnimationFrame(GameLoop);
    contexto.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Verificando as teclas pressionadas
    // E se o jogador esta dentro do canvas
    entityList.forEach((entity1, index1) => {
        entity1.update(input.getKeysDown());
        entityList.forEach((entity2, index2) => {
            if (index2 <= index1) { return; }
            if (entity1.position.x + entity1.largura >= entity2.position.x &&
                entity1.position.x <= entity2.position.x + entity2.largura &&
                entity1.position.y + entity1.altura >= entity2.position.y &&
                entity1.position.y <= entity2.position.y + entity2.altura) {
                entity2.color = "blue";
            }
            else {
                entity2.color = "red";
            }
        });
    });

    entityList.forEach(entity => {
        entity.draw(contexto);
    });
}

// init();
