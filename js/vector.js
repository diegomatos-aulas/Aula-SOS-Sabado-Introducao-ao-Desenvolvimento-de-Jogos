export default class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getAngle(){
        let angle = Math.atan2(this.y, this.x)
        return angle;
    }

    getLength(){
        let length = Math.sqrt(this.x * this.x + this.y * this.y)
        return length;
    }

    setLength(value){
        let angle = this.getAngle();
        this.x = Math.cos(angle) * value;
        this.y = Math.sin(angle) * value;
    }
}
