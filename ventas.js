const ventas = [
    { id: 1, producto: "Laptop", categoria: "Electrónica", precio: 1200, cantidad: 2, vendedor: "Ana" },
    { id: 2, producto: "Mouse", categoria: "Electrónica", precio: 25, cantidad: 5, vendedor: "Luis" },
    { id: 3, producto: "Teclado", categoria: "Electrónica", precio: 45, cantidad: 3, vendedor: "Ana" },
    { id: 4, producto: "Monitor", categoria: "Electrónica", precio: 300, cantidad: 1, vendedor: "Pedro" },
    { id: 5, producto: "Silla Gamer", categoria: "Muebles", precio: 250, cantidad: 2, vendedor: "Ana" },
    { id: 6, producto: "Escritorio", categoria: "Muebles", precio: 180, cantidad: 1, vendedor: "Luis" },
    { id: 7, producto: "Lámpara LED", categoria: "Iluminación", precio: 35, cantidad: 4, vendedor: "Pedro" },
    { id: 8, producto: "Webcam", categoria: "Electrónica", precio: 80, cantidad: 2, vendedor: "Ana" }
];

const electronica = ventas.filter(venta => venta.categoria === "Electrónica");
console.log(electronica);

const ventasGrandes = ventas.filter(venta => venta.precio >= 100);
console.log(ventasGrandes);

const totales = ventas.map(venta => venta.precio * venta.cantidad);
console.log(totales);

const productosConTotal = ventas.map(venta => ({ producto: venta.producto, total: venta.precio * venta.cantidad }));
console.log(productosConTotal);

const electronicaConDescuento = ventas.filter(venta => venta.categoria === "Electrónica")
    .map(venta => ({
        producto: venta.producto,
        totalConDescuento: venta.precio * venta.cantidad * 0.85
    }));
console.log(electronicaConDescuento);

// Calcula la suma de TODOS los totales (precio × cantidad)
let totalGeneral = 0;
for (let i = 0; i < totales.length; i++) {
    totalGeneral += totales[i];
}
console.log("Total General:", totalGeneral);


const totalAna = ventas.filter(venta => venta.vendedor === "Ana")
    .map(venta => venta.precio * venta.cantidad);; //Da un array denumeros
let totAna = 0;
for (let i = 0; i < totalAna.length; i++) {
    totAna += totalAna[i];
}
console.log("Total de Ana:", totAna);


const productosPremium = ventas.filter(venta => venta.precio >= 200)
    .map(venta => venta.producto);//estoy creando un array de string, no uno de objetos con {}

console.log("Productos Premium:", productosPremium);

