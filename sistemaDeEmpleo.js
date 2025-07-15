//  Ejercicio 2: Sistema de empleados
//  Crea un sistema de clases para representar empleados de una empresa:
//  1.Clase Empleado con propiedades: nombre, edad, salarioBase y 
// método calcularSalario() que devuelve el salario base.
//  2.Clase Gerente que herede de Empleado y añada bonificacion. 
// Sobrescribe calcularSalario() para que sume la bonificación.
//  3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.
//  Crea instancias de cada tipo y muestra sus salarios

class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
        
    }

    calcularSalario(){
        return this.salarioBase;
    }

    
}

class Gerente extends Empleado{
    constructor (nombre, edad, salarioBase, bonificacion){
        super (nombre, edad, salarioBase);
        this.bonificacion = bonificacion;

    }

    calcularSalario(){
        return this.salarioBase + this.bonificacion;
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, edad, salarioBase, lenguaje){
        super (nombre, edad, salarioBase);
        this.lenguaje = lenguaje;

    }

        
}

const empleadoBase = new Empleado ("Mariana", 28, 2500);
const   gerente = new Gerente ("Cristian", 30, 3000, 1500);
const desarrollador = new Desarrollador ("karen", 26, 1500, "JavaScript");

console.log("--- Salarios ---");
console.log(`${empleadoBase.nombre}: $${empleadoBase.calcularSalario()}`);
console.log(`${gerente.nombre} (Gerente): $${gerente.calcularSalario()}`);
console.log(`${desarrollador.nombre} (Desarrollador de ${desarrollador.lenguaje}): $${desarrollador.calcularSalario()}`)