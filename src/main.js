import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

// Crear una instancia de Cliente
const cliente = new Cliente('John Doe', { id: 1 });

// Crear una instancia de Impuestos
const impuestos = new Impuestos(100000, 10000, [5000, 2000]);

// Calcular el impuesto
const impuestoTotal = impuestos.calcularImpuesto();

console.log(`Cliente: ${cliente.getNombre()}`);
console.log(`Impuesto Total a Pagar: ${impuestoTotal}`);