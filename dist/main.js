"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Crear una instancia de Cliente
var cliente = new _Cliente["default"]('John Doe', {
  id: 1
});

// Crear una instancia de Impuestos
var impuestos = new _Impuestos["default"](100000, 10000, [5000, 2000]);

// Calcular el impuesto
var impuestoTotal = impuestos.calcularImpuesto();
console.log("Cliente: ".concat(cliente.getNombre()));
console.log("Impuesto Total a Pagar: ".concat(impuestoTotal));