import Vector from "./vector.js"

export default class Shape{
    constructor(largura, altura, initialX, initialY, GAME_WIDTH, GAME_HEIGHT){
        this.largura = largura;
        this.altura = altura;
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.position1 = new Vector(initialX, initialY)
        this.position = {
            x: initialX,
            y: initialY
        }
        this.position1.setLength(100);
        console.log(this.position1.getLength())
        this.color = "black";
    }

    update(){

    }

    draw(contexto){
        contexto.fillStyle = this.color;
        contexto.fillRect(this.position.x, this.position.y, this.largura, this.altura);
    }
}