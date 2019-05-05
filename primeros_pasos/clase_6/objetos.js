var luis = {
  nombre: 'luis',
  apellido: 'gonzalez',
  edad: 21
}

var juan = {
  nombre: 'juan',
  apellido: 'lovera',
  edad: 25
}

/* primera forma de function
 function imprimirNombreEnMayusculas(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

forma de mandar los datos de un objetos
imprimirNombreEnMayusculas(luis.nombre);
imprimirNombreEnMayusculas(juan.nombre);
*/

/* segunda forma de mandar function
function imprimirNombreEnMayusculas(persona) {
  console.log(persona.nombre.toUpperCase());
}

forma de mandar el parametro correspondiente
imprimirNombreEnMayusculas(luis);
imprimirNombreEnMayusculas(juan);

*/

function imprimirNombreEnMayusculas({nombre}) {
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(luis);
imprimirNombreEnMayusculas(juan);
imprimirNombreEnMayusculas({nombre: 'mary'});
