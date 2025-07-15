// Ejercicio 3: Sistema de productos electrónicos
//  Modela un sistema de productos electrónicos con:
//  1.Clase Producto con nombre, precio, marca y método descripcion().
//  2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
//  3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
//  Crea instancias y muestra sus descripciones

class Producto {
    constructor(nombre, precio, marca ) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;

    }
    descripcion (){
        return `Producto: ${this.nombre}\nProcesador: ${this.procesador}\nPantalla: ${this.pulgadas} pulgadas`;
        
    }
        
    
}

class Telefono extends Producto{
    constructor(nombre, precio, marca, almacenamiento, ram ){
        super (nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;

    }

    descripcion(){
        return `${super.descripcion()}\nAlmacenamiento: ${this.almacenamiento} GB\nRAM: ${this.ram} GB`;
    }

}

class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `${super.descripcion()}\nProcesador: ${this.procesador}\nPantalla: ${this.pulgadas} pulgadas`;
  }
}


const miTelefono = new Telefono("Galaxy A30", 400, "Samsung", 256, 12);
const miLaptop = new Laptop("MacBook Air", 1500, "Apple", "M2", 13.6);


console.log("--- Teléfono ---");
console.log(miTelefono.descripcion());

console.log("\n--- Laptop ---");
console.log(miLaptop.descripcion());