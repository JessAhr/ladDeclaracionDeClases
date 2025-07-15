//  Ejercicio 5: Sistema de animales
//  Modela un sistema de animales con:
//  1.Clase Animal con nombre, edad y método emitirSonido().
//  2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
//  3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
//  Crea instancias y haz que emitan sonidos

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "Sonido genérico de animal";
  }
}


class Perro extends Animal {
  emitirSonido() {
    return `${this.nombre} dice: ¡Guau guau!`;
  }
}


class Gato extends Animal {
  emitirSonido() {
    return `${this.nombre} dice: ¡Miau!`;
  }
}


const miPerro = new Perro("Hachi", 4);
const miGato = new Gato("Tonny", 2);


console.log("--- Sonidos de animales ---");
console.log(miPerro.emitirSonido());
console.log(miGato.emitirSonido());
