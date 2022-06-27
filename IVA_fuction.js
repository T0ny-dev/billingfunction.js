//iva de mexico
let iva = 0.16;
let precioFinal;

function calcularIva(precio){
  let ivaProducto = precio * iva;
  console.log(`el IVA del producto es ${ivaProducto}`)
  precioFinal = precio - ivaProducto; 
}

// call fuction calcularIva(1800);