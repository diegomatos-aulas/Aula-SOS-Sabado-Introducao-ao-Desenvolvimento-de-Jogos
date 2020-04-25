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

        if(this.keysDown.ArrowRight){
            teclasPressionadas.push("ArrowRight")
        }
        
        if(this.keysDown.ArrowLeft){
            teclasPressionadas.push("ArrowLeft")
        }
        
        if(this.keysDown.ArrowUp){
            teclasPressionadas.push("ArrowUp")
        }
        
        if(this.keysDown.ArrowDown){
            teclasPressionadas.push("ArrowDown")
        }
        
        if(this.keysDown.ControlLeft){
            teclasPressionadas.push("ControlLeft")
        }


        return teclasPressionadas;
    }
}