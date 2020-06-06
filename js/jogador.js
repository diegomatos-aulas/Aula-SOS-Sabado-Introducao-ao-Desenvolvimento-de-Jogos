import Shape from "./shape.js"

export default class Jogador extends Shape {
    constructor(largura, altura, xInicial, yInicial, GAME_WIDTH, GAME_HEIGHT, imagem) {
        super(largura, altura, xInicial, yInicial, GAME_WIDTH, GAME_HEIGHT);
        this._color = "green"
        this._imagem = imagem;
        this.velocidade.setModulo(400);
    }

    get imagem() {
        return this._imagem;
    }

    set imagem(valor) {
        this._imagem = valor;
    }

    update(deltaTime, input) {

        this.movimentacaoDoJogador(deltaTime, input.getKeysDown());

        this.mirarEmDirecaoAoMouse(input.getPosicaoDoMouse());

        this.delimitarOJogadorNoCanvas();
        this.posicao.adiciona(this.velocidade.produto(deltaTime));
    }

    draw(contexto) {
        // contexto.drawImage(this._imagem, this.posicao.x, this.posicao.y)
        contexto.save();
        contexto.translate(this.posicao.x, this.posicao.y);
        contexto.rotate(this.direcaoDoMouse);
        contexto.drawImage(this._imagem, -this.largura/2, -this.altura/2, this.largura, this.altura)
        contexto.restore();
    }

    movimentacaoDoJogador(deltaTime, keysDown) {
        // console.log(keysDown)
        if (keysDown.indexOf("KeyW") >= 0) { // => -1 se nao existir, ou >= 0 se existir
            this.velocidade.setModulo(400);
        } else {
            this.velocidade.setModulo(0);
        }
    }

    delimitarOJogadorNoCanvas() {
        if (this.posicao.x < 0) {
            this.posicao.x = 0
        }

        if (this.posicao.x + this._largura > this._GAME_WIDTH) {
            this.posicao.x = this._GAME_WIDTH - this._largura;
        }

        if (this.posicao.y < 0) {
            this.posicao.y = 0
        }

        if (this.posicao.y + this._altura > this._GAME_HEIGHT) {
            this.posicao.y = this._GAME_HEIGHT - this._altura;
        }
    }

    mirarEmDirecaoAoMouse(posicaoDoMouse) {
        this.direcaoDoMouse = posicaoDoMouse.subtrai(this.posicao).getAngle();
        this.velocidade.setAngle(this.direcaoDoMouse)
    }
}