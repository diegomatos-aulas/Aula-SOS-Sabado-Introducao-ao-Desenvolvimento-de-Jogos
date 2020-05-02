export default class InputHandler{
    constructor(){
        this.keysDown = {
            ArrowRight: false,
            ArrowLeft: false,
            ArrowUp: false,
            ArrowDown: false,
            ControlLeft: false
        }

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
}