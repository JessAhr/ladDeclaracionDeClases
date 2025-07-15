// Ejercicio 4: Sistema de figuras geométricas
//  Crea un sistema de clases para figuras geométricas:
//  1.Clase Figura con propiedad color y método area() que devuelve 0.
// 2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
//  3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().
//  Crea instancias y muestra sus áreas


class Figura {
  constructor(color) {
    this.color = color;
  }

  area() {
    return 0;
  }
}


class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}


class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio ** 2;
  }
}

const miRectangulo = new Rectangulo("Amarillo", 5, 10);
const miCirculo = new Circulo("Verde", 7);


console.log("--- Figuras Geométricas ---");
console.log(`Rectángulo (${miRectangulo.color}) - Área: ${miRectangulo.area()}`);
console.log(`Círculo (${miCirculo.color}) - Área: ${miCirculo.area().toFixed(2)}`);
