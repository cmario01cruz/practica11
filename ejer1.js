

let inventario = ["Teclado", "Mouse", "Monitor"];

console.log("INVENTARIO INICIAL:");
console.log(inventario);


inventario.push("Audífonos");

console.log("\nDespués de push():");
console.log(inventario);

inventario.unshift("Laptop");

console.log("\nDespués de unshift():");
console.log(inventario);


let eliminadoFinal = inventario.pop();

console.log("\nProducto eliminado con pop():", eliminadoFinal);
console.log(inventario);


let eliminadoInicio = inventario.shift();

console.log("\nProducto eliminado con shift():", eliminadoInicio);
console.log(inventario);


inventario.splice(1, 1, "Impresora");

console.log("\nDespués de splice():");
console.log(inventario);


let subLista = inventario.slice(0, 2);

console.log("\nSub-lista obtenida con slice():");
console.log(subLista);


console.log("\nInventario original después de slice():");
console.log(inventario);
