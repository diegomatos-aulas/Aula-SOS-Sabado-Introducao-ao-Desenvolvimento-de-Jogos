// 1º PRINCIPIO SOLID => PRINCIPIO DE ÚNICA RESPONSABILIDADE

// 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
import Jogador from "./jogador.js"
import Obstaculo from "./obstaculo.js"
import InputHandler from "./inputHandler.js"
import CollisionHandler from "./collisionHandler.js"
import Galeria from "./galeria.js"

export default class Cena {
    constructor() {
        this.canvas = document.getElementById("GameScreen");
        this.contexto = this.canvas.getContext("2d");
        this.GAME_WIDTH = this.canvas.width = 400, this.GAME_HEIGHT = this.canvas.height = 400;
        this.listaDeEntidades = [];
        this.tempoAnterior = 0;
        this.deltaTime = 0;
    }

    init() {
        Galeria.CarregarImagem("jogador_img", "../Introducao-ao-Desenvolvimento-de-Jogos/assets/imagens/player.png", this.startGame, this);
        Galeria.CarregarImagem("tiro_img", "../Introducao-ao-Desenvolvimento-de-Jogos/assets/imagens/tiro.png", this.startGame, this);
        Galeria.CarregarAudio("shoot_sound", "../Introducao-ao-Desenvolvimento-de-Jogos/assets/audios/shoot_sound.mp3", this.startGame, this);    
    }

    startGame(){
        // 3º PRINCIPIO SOLID => PRINCIPIO DA SUBSTITUIÇÃO DE LISKOV
        this.jogador = new Jogador(50, 50, 0, 0, this.GAME_WIDTH,  this.GAME_HEIGHT, Galeria.imagens.jogador_img);
        let obstaculo = new Obstaculo(20, 50, 100, 100,  this.GAME_WIDTH,  this.GAME_HEIGHT)
        this.listaDeEntidades.push(this.jogador);
        this.listaDeEntidades.push(obstaculo);

        this.input = new InputHandler();
        window.requestAnimationFrame(this.gameLoop);
    }

    gameLoop(tempoAtual){
        window.requestAnimationFrame(this.gameLoop);

        tempoAtual /= 1000;
        this.deltaTime = tempoAtual - tempoAnterior;
        this.tempoAnterior = tempoAtual;    

        this.update();
        this.draw();
    }

    update(){
        // Realiza a lógica de todas as entidades do jogo
        this.listaDeEntidades.forEach((entidade1, index1) => {
            entidade1.update(deltaTime, input);
            this.listaDeEntidades.forEach((entidade2, index2) => {
                if (index1 <= index2) return;
                // Realiza as Colisões
                CollisionHandler(entidade1, entidade2, function(){
                    this._cor = "Red";
                }, entidade1);
            });
        });
    }

    draw(){
        // Desenha na tela as intidades do jogo
        this.listaDeEntidades.forEach(entidade => {
            this.entidade.draw(contexto);
        });
    }

    adicionarEntidadeAoJogo(entidade){
        this.listaDeEntidades.push(entidade)
    }
}
