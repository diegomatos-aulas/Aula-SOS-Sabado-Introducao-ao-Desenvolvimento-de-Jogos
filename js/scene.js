// 1º PRINCIPIO SOLID => PRINCIPIO DE ÚNICA RESPONSABILIDADE

// 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
import Jogador from "./jogador.js"
import Obstaculo from "./obstaculo.js"
import InputHandler from "./inputHandler.js"
import CollisionHandler from "./collisionHandler.js"
import Galeria from "./galeria.js"

const canvas = document.getElementById("GameScreen");
const contexto = canvas.getContext("2d");
let GAME_WIDTH = canvas.width = 400, GAME_HEIGHT = canvas.height = 400;
let listaDeEntidades = [];
let tempoAnterior = 0, deltaTime;
let input, jogador;

function init() {
    Galeria.CarregarImagem("jogador_img", "../assets/imagens/player.png", startGame, this);
    Galeria.CarregarImagem("tiro_img", "../assets/imagens/tiro.png", startGame, this);
    Galeria.CarregarAudio("shoot_sound", "../assets/audios/shoot_sound.mp3", startGame, this);
}

function startGame(){
    console.log("StartGame")
    // 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
    jogador = new Jogador(50, 50, GAME_WIDTH / 2 - 25, GAME_HEIGHT / 2 - 25, GAME_WIDTH, GAME_HEIGHT, Galeria.imagens.jogador_img);
    let obstaculo = new Obstaculo(20, 50, 100, 100, GAME_WIDTH, GAME_HEIGHT)
    listaDeEntidades.push(jogador);
    listaDeEntidades.push(obstaculo);

    input = new InputHandler();
    window.requestAnimationFrame(GameLoop);
}

function GameLoop(tempoAtual) {
    window.requestAnimationFrame(GameLoop);

    deltaTime = tempoAtual - tempoAnterior;
    tempoAnterior = tempoAtual;

    contexto.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Realiza a lógica de todas as entidades do jogo
    listaDeEntidades.forEach((entidade1, index1) => {
        entidade1.update(deltaTime, input.getKeysDown());
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

init();
