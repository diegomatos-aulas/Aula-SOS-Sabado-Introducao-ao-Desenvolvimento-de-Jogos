import Shape from "./shape.js"
import inputHandler from "./inputHandler.js"

export default class Obstaculo extends Shape{
    constructor(largura, altura, initialX, initialY, GAME_WIDTH, GAME_HEIGHT){
        super(largura, altura, initialX, initialY, GAME_WIDTH, GAME_HEIGHT);
        this.direcao = "Direita"
        this.color = "red"
    }

    update(){
        this.verificarDirecao();
        this.oscilar();
    }

    draw(contexto){
        contexto.fillStyle = this.color;
        contexto.fillRect(this.position.x, this.position.y, this.largura, this.altura);
    }

    verificarDirecao(){
        if (this.position.x == 300){
            this.direcao = "Esquerda";
        }

        if (this.position.x == 100){
            this.direcao = "Direita";
        }
    }

    oscilar(){
        if(this.direcao == "Direita"){
            this.position.x++;
        }
        if(this.direcao == "Esquerda"){
            this.position.x--;
        }
    }
}