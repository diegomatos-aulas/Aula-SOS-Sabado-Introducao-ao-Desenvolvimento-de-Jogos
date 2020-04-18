import Shape from "./shape.js"

export default class Obstaculo extends Shape{
    constructor(largura, altura, initialX, initialY){
        super(largura, altura, initialX, initialY);
        this.direcao = "Direita"
    }

    oscilar(){
        if (this.position.x == 300){
            this.direcao = "Esquerda";
        }

        if (this.position.x == 100){
            this.direcao = "Direita";
        }
    }
}