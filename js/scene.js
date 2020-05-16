// 1º PRINCIPIO SOLID => PRINCIPIO DE ÚNICA RESPONSABILIDADE

// 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
import Jogador from "./jogador.js"
import Obstaculo from "./obstaculo.js"
import InputHandler from "./inputHandler.js"
import CollisionHandler from "./collisionHandler.js"

const canvas = document.getElementById("GameScreen");
const contexto = canvas.getContext("2d");
let GAME_WIDTH = canvas.width = 400, GAME_HEIGHT = canvas.height = 400;
let listaDeEntidades = [];
let input, jogador;

let imagemDoJogador = new Image();
imagemDoJogador.addEventListener("load", init);
imagemDoJogador.src = "../assets/player.png";

function init() {
    // 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
    jogador = new Jogador(50, 50, GAME_WIDTH / 2 - 25, GAME_HEIGHT / 2 - 25, GAME_WIDTH, GAME_HEIGHT, imagemDoJogador);
    let obstaculo = new Obstaculo(20, 50, 100, 100, GAME_WIDTH, GAME_HEIGHT)
    listaDeEntidades.push(jogador);
    listaDeEntidades.push(obstaculo);

    input = new InputHandler();
    GameLoop();
}

function GameLoop() {
    window.requestAnimationFrame(GameLoop);
    contexto.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Realiza a lógica de todas as entidades do jogo
    listaDeEntidades.forEach((entidade1, index1) => {
        entidade1.update(input.getKeysDown());
        listaDeEntidades.forEach((entidade2, index2) => {
            if (index1 <= index2) return;
            // Realiza as Colisões
            CollisionHandler(entidade1, entidade2, function(){
                this._cor = "Red";
            }, entidade1);
        });
    });

    // Desenha na tela as intidades do jogo
    listaDeEntidades.forEach(entity => {
        entity.draw(contexto);
    });
}