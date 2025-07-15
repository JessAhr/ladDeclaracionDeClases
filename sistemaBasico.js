// Ejercicio 1: Sistema básico de vehículos
//  Crea un sistema de clases para representar diferentes tipos de vehículos. Debes crear:
//  1.Una clase Vehiculo con propiedades: marca, modelo, año y un 
// método obtenerDetalles() que devuelva un string con toda la información.
//  2.Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas.
//  3.Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.
//  Crea instancias de ambas clases hijas y muestra sus detalles



class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.año}`;
  }
}


class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}\nNúmero de puertas: ${this.numeroPuertas}`;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}\nCilindrada: ${this.cilindrada} cc`;
  }
}

const miCoche = new Coche("Mazda", "3", 2022, 4);
const miMoto = new Moto("Honda", "CBR500R", 2023, 500);

console.log("--- Detalles del Coche ---");
console.log(miCoche.obtenerDetalles());

console.log("\n--- Detalles de la Moto ---");
console.log(miMoto.obtenerDetalles());
