export default class Shape{
    constructor(largura, altura, initialX, initialY, GAME_WIDTH, GAME_HEIGHT){
        this.largura = largura;
        this.altura = altura;
        this.GAME_WIDTH = GAME_WIDTH;
        this.GAME_HEIGHT = GAME_HEIGHT;
        this.position = {
            x: initialX,
            y: initialY
        }
        this.color = "black";
    }

    update(){

    }

    draw(contexto){
        contexto.fillStyle = this.color;
        contexto.fillRect(this.position.x, this.position.y, this.largura, this.altura);
    }
}