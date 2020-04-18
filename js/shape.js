export default class Shape{
    constructor(largura, altura, initialX, initialY){
        this.largura = largura;
        this.altura = altura;
        this.position = {
            x: initialX,
            y: initialY
        }
    }
}