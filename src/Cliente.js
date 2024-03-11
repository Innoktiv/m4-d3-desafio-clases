export default class Cliente {
    constructor(nombre, objeto) {
        this._nombre = nombre;
        this._objeto = objeto;
    }

    getNombre() {
        return this._nombre;
    }

    setNombre(nombre) {
        this._nombre = nombre;
    }

    getObjeto() {
        return this._objeto;
    }

    setObjeto(objeto) {
        this._objeto = objeto;
    }
}