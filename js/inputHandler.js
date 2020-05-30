import Vector from "./vector.js"

export default class InputHandler{
    constructor(){
        this.keysDown = {
            KeyW: false,
        }

        this.posicaoDoMouse = new Vector (0, 0);

        document.addEventListener("keydown", (event) => {
            // 2º PRINCIPIO SOLID => PRINCIPIO DE ABERTO/FECHADO
            if(this.keysDown.hasOwnProperty(event.code)){
                this.keysDown[event.code] = true;
            }
        })
        
        document.addEventListener("keyup", (event) => {
            // 2º PRINCIPIO SOLID => PRINCIPIO DE ABERTO/FECHADO
            if(this.keysDown.hasOwnProperty(event.code)){
                this.keysDown[event.code] = false;
            }
        })

        document.addEventListener("mousemove", (event)=>{
            this.posicaoDoMouse.x = event.clientX;
            this.posicaoDoMouse.y = event.clientY;
        })
    }

    getKeysDown(){
        let teclasPressionadas = [];

        for (const tecla in this.keysDown) {
            if(this.keysDown[tecla]){
                teclasPressionadas.push(tecla)
            }
        }
        
        return teclasPressionadas;
    }

    getPosicaoDoMouse(){
        return this.posicaoDoMouse;
    }
}