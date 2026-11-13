

let precios = [15.50, 42.00, 120.99, 8.50, 65.75, 20.00];

console.log("LISTA DE PRECIOS:");
console.log(precios);

// 1. CICLO FOR CLÁSICO
console.log("\n--- RECORRIDO CON FOR ---");

for (let i = 0; i < precios.length; i++) {
    console.log(`Índice ${i}: $${precios[i].toFixed(2)}`);
}


console.log("\n--- RECORRIDO CON FOR...OF ---");

let total = 0;

for (let precio of precios) {
    total += precio;
}

console.log("Monto total acumulado: $" + total.toFixed(2));


console.log("\n--- PRODUCTOS PREMIUM ---");

precios.forEach((precio) => {
    if (precio > 30.00) {
        console.log(
            `¡ALERTA! Producto prémium encontrado: $${precio.toFixed(2)}`
        );
    }
});
