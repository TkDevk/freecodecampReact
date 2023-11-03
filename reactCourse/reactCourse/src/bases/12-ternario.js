/**
 * Ternario
 */
/**
const active = true;

let mensaje = '';

if (active){
    mensaje = 'Activo';
}else{
    mensaje= 'Inactivo'
}
*/
const active = true;
const activo = true;

const msg = ( active )? 'Activo': 'Inactivo';

//En react puedo hacer una comparacion IF con un ternario si es que un valor es un true
// es para indicar que no propese el else del operador ternario
const mensaje = activo && 'Activo' //Si solo quiero que se ejecute 'Activo', en react si queremos que algo se cumpla para ejecutar entonces usamos este ternario si activo es falso no se ejecuta

console.log(mensaje)