// 1º PRINCIPIO SOLID => PRINCIPIO DE ÚNICA RESPONSABILIDADE
import Jogador from "./jogador.js"
import Obstaculo from "./obstaculo.js"

const canvas = document.getElementById("GameScreen");
const contexto = canvas.getContext("2d");
let width = canvas.width = 400, height = canvas.height = 400;
let jogador, obstaculo;

let input = {
    ArrowRight: false,
    ArrowLeft: false,
    ArrowUp: false,
    ArrowDown: false,
    ControlLeft: false
}

document.addEventListener("keydown", function (event){
    // 2º PRINCIPIO SOLID => PRINCIPIO DE ABERTO/FECHADO
    if(input.hasOwnProperty(event.code)){
        input[event.code] = true;
    }
})

document.addEventListener("keyup", function (event){
    // 2º PRINCIPIO SOLID => PRINCIPIO DE ABERTO/FECHADO
    if(input.hasOwnProperty(event.code)){
        input[event.code] = false;
    }
})

function init(){
    // 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
    jogador = new Jogador(50, 50, width/2 - 25, height/2 - 25);
    obstaculo = new Obstaculo(20, 50, 100, 100);
    GameLoop();
}

function GameLoop(){
    window.requestAnimationFrame(GameLoop);

    // Verificando as teclas pressionadas
    // E se o jogador esta dentro do canvas
    if (input.ArrowLeft == true){
        jogador.position.x--;
    }
    if (input.ArrowRight == true){
        jogador.position.x++;
    }

    if (input.ArrowUp == true){
        jogador.position.y--;
    }

    if (input.ArrowDown == true){
        jogador.position.y++;
    }

    if (input.ControlLeft == true){
        console.log("FOI")
    }

    if (jogador.position.x < 0){
        jogador.position.x = 0
    }
    if (jogador.position.x + jogador.largura > width){
        jogador.position.x = width - jogador.largura;
    }

    if (jogador.position.y < 0){
        jogador.position.y = 0
    }

    if (jogador.position.y + jogador.altura > height){
        jogador.position.y = height - jogador.altura;
    }

    obstaculo.oscilar();

    if(obstaculo.direcao == "Direita"){
        obstaculo.position.x++;
    }
    if(obstaculo.direcao == "Esquerda"){
        obstaculo.position.x--;
    }

    if(jogador.direcao == "Direita"){
        jogador.position.x++;
    }
    if(jogador.direcao == "Esquerda"){
        jogador.position.x--;
    }

    contexto.clearRect(0, 0, width, height)
    contexto.fillRect(jogador.position.x, jogador.position.y, jogador.largura, jogador.altura);
    contexto.fillRect(obstaculo.position.x, obstaculo.position.y, obstaculo.largura, obstaculo.altura);
}

init();
