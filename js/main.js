const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioDescuento = 100 - descuento;
const precioDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;

console.log({
    precioOriginal,
    porcentajePrecioDescuento,
    precioDescuento,

});