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

function cumpleaños(persona) {
  return {
    ...persona,
    edad:   persona.edad + 1
  }
}

imprimirNombreEnMayusculas(luis);
imprimirNombreEnMayusculas(juan);
