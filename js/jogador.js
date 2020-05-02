import Shape from "./shape.js"

export default class Jogador extends Shape{
    constructor(largura, altura, initialX, initialY, GAME_WIDTH, GAME_HEIGHT){
        super(largura, altura, initialX, initialY, GAME_WIDTH, GAME_HEIGHT);
        this.color = "green"
    }

    update(keysDown){

        this.movimentacaoDoJogador(keysDown);

        this.delimitarOJogadorNoCanvas();
    }

    draw(contexto){
        contexto.fillStyle = this.color;
        contexto.fillRect(this.position.x, this.position.y, this.largura, this.altura);
    }

    movimentacaoDoJogador(keysDown){
        keysDown.forEach(element => {
            if(element == "ArrowLeft"){ // => -1 se nao existir, ou >= 0 se existir
                this.position.x--;
            }

            if(element == "ArrowRight"){
                this.position.x++;
            }

            if(element == "ArrowUp"){
                this.position.y--;
            }

            if(element == "ArrowDown"){
                this.position.y++;
            }
            
            if(element == "ControlLeft"){
                console.log("FOI")
            }
        });
    }

    delimitarOJogadorNoCanvas(){
        if (this.position.x < 0){
            this.position.x = 0
        }
        
        if (this.position.x + this.largura > this.GAME_WIDTH){
            this.position.x = this.GAME_WIDTH - this.largura;
        }
    
        if (this.position.y < 0){
            this.position.y = 0
        }
    
        if (this.position.y + this.altura > this.GAME_HEIGHT){
            this.position.y = this.GAME_HEIGHT - this.altura;
        }
    }
}