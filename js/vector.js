export default class Vector {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    // RESGATAR O ANGULO DO VETOR
    getAngle() {
        let angle = Math.atan2(this._y, this._x)
        return angle;
    }

    // DEFINE O ANGULO DO VETOR
    setAngle(angle) {
        let modulo = this.getModulo();
        this._x = Math.cos(angle) * modulo;
        this._y = Math.sin(angle) * modulo;
    }

    // RESGATAR O MODULO DO VETOR
    getModulo() {
        let modulo = Math.sqrt(this._x * this._x + this._y * this._y)
        return modulo;
    }

    // DEFINIR O MODULO DO VETOR
    setModulo(value) {
        let angle = this.getAngle();
        this._x = Math.cos(angle) * value;
        this._y = Math.sin(angle) * value;
    }

    soma(vector) {
        let novoX = this._x + vector.x;
        let novoY = this._y + vector.y;
        let soma = new Vector(novoX, novoY);
        return soma;
    }

    adiciona(vector) {
        this._x += vector.x;
        this._y += vector.y;
    }
}