import Vector from "./vector.js"

export default class Shape{
    constructor(largura, altura, xInicial, yInicial, GAME_WIDTH, GAME_HEIGHT){
        this._largura = largura;
        this._altura = altura;
        this._GAME_WIDTH = GAME_WIDTH;
        this._GAME_HEIGHT = GAME_HEIGHT;
        this.posicao = new Vector(xInicial, yInicial)
        this.velocidade = new Vector(1, 0);
        this._cor = "Black";
    }

    get largura(){
        return this._largura;
    }

    get altura(){
        return this._altura;
    }

    get GAME_WIDTH(){
        return this._GAME_WIDTH;
    }

    get GAME_HEIGHT(){
        return this._GAME_HEIGHT;
    }

    get cor(){
        return this._cor;
    }
    
    set largura(valor){
        this._largura = valor;
    }

    set altura(valor){
        this._altura = valor;
    }

    set GAME_WIDTH(valor){
        this._GAME_WIDTH = valor;
    }

    set GAME_HEIGHT(valor){
        this._GAME_HEIGHT = valor;
    }

    set cor(valor){
        this._cor = valor;
    }

    update(deltaTime){

    }

    draw(contexto){
        contexto.fillStyle = this._cor;
        contexto.fillRect(this.posicao.x, this.posicao.y, this._largura, this._altura);
    }

    estadoOriginal(){
        this._cor = "Black";
    }
}