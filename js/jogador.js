import Shape from "./shape.js"

export default class Jogador extends Shape{
    constructor(largura, altura, xInicial, yInicial, GAME_WIDTH, GAME_HEIGHT, imagem){
        super(largura, altura, xInicial, yInicial, GAME_WIDTH, GAME_HEIGHT);
        this._color = "green"
        this._imagem = imagem;
    }

    get imagem(){
        return this._imagem;
    }

    set imagem(valor){
        this._imagem = valor;
    }

    update(dt, keysDown){

        this.movimentacaoDoJogador(keysDown);

        this.delimitarOJogadorNoCanvas();
    }

    draw(contexto){
        contexto.drawImage(this._imagem, this.posicao.x, this.posicao.y)
    }

    movimentacaoDoJogador(keysDown){
        keysDown.forEach(element => {
            if(element == "ArrowLeft"){ // => -1 se nao existir, ou >= 0 se existir
                this.velocidade.setAngle(Math.PI)
                this.posicao.adiciona(this.velocidade);
            }

            if(element == "ArrowRight"){
                this.velocidade.setAngle(0)
                this.posicao.adiciona(this.velocidade);
            }

            if(element == "ArrowUp"){
                this.velocidade.setAngle(-Math.PI/2)
                this.posicao.adiciona(this.velocidade);
            }

            if(element == "ArrowDown"){
                this.velocidade.setAngle(Math.PI/2)
                this.posicao.adiciona(this.velocidade);
            }
            
            if(element == "ControlLeft"){
                console.log("FOI")
            }
        });
    }

    delimitarOJogadorNoCanvas(){
        if (this.posicao.x < 0){
            this.posicao.x = 0
        }
        
        if (this.posicao.x + this._largura > this._GAME_WIDTH){
            this.posicao.x = this._GAME_WIDTH - this._largura;
        }
    
        if (this.posicao.y < 0){
            this.posicao.y = 0
        }
    
        if (this.posicao.y + this._altura > this._GAME_HEIGHT){
            this.posicao.y = this._GAME_HEIGHT - this._altura;
        }
    }
}