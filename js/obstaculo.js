import Shape from "./shape.js"

export default class Obstaculo extends Shape{
    constructor(largura, altura, xInicial, yInicial, GAME_WIDTH, GAME_HEIGHT){
        super(largura, altura, xInicial, yInicial, GAME_WIDTH, GAME_HEIGHT);
        this._direcao = "Direita";
    }

    get direcao(){
        return this._direcao;
    }

    set direcao(valor){
        this._direcao = valor;
    }

    update(){
        this.verificarDirecao();
        this.oscilar();
    }

    draw(contexto){
        contexto.fillStyle = this._cor;
        contexto.fillRect(this.posicao.x, this.posicao.y, this._largura, this._altura);
    }

    verificarDirecao(){
        if (this.posicao.x == 300){
            this._direcao = "Esquerda";
        }

        if (this.posicao.x == 100){
            this._direcao = "Direita";
        }
    }

    oscilar(){
        if(this._direcao == "Direita"){
            this.velocidade.setAngle(0)
            this.posicao.adiciona(this.velocidade);
        }
        if(this._direcao == "Esquerda"){
            this.velocidade.setAngle(Math.PI)
            this.posicao.adiciona(this.velocidade)
        }
    }
}