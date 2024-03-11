export default class Impuestos {
  constructor(montoBrutoAnual, deducciones, deduccionesAnuales) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
    this._deduccionesAnuales = deduccionesAnuales;
  }

  getMontoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  setMontoBrutoAnual(montoBrutoAnual) {
    this._montoBrutoAnual = montoBrutoAnual;
  }

  getDeducciones() {
    return this._deducciones;
  }

  setDeducciones(deducciones) {
    this._deducciones = deducciones;
  }

  getDeduccionesAnuales() {
    return this._deduccionesAnuales;
  }

  setDeduccionesAnuales(deduccionesAnuales) {
    this._deduccionesAnuales = deduccionesAnuales;
  }

  calcularImpuesto() {
    const montoImponible = this._montoBrutoAnual - this._deducciones;
    const impuesto = montoImponible * 0.21;
    return impuesto;
  }
}
