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

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var {nombre} = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreEdad(persona) {
  var {nombre, edad} = persona
  console.log(`hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreEnMayusculas(luis);
imprimirNombreEnMayusculas(juan);
imprimirNombreEnMayusculas({nombre: 'mary'});
imprimirNombreEdad(luis);
imprimirNombreEdad(juan);
