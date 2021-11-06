// const precioOriginal = 100;
// const descuento = 15;


const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}

// Escribiendo html desde javascript

const doItCalc = () => {
    const inputPrice = document.getElementById("input-price");
    const inputDiscount = document.getElementById('input-discount');

    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioFinal = calcularPrecioConDescuento(priceValue,discountValue);

    const resultPrice = document.getElementById('result');
    resultPrice.innerHTML = `Tu precio con descuento es de: $${precioFinal}`

}


