//DECORADOR -> Un decorador es una funcion que ejecuta una logica en una clase, propiedad o funcion.

function SelfDriving(constructorFunctions: Function) {
  constructorFunctions.prototype.selfDriving = true;
}
function Wheels(numberOfWheels: number) {
  return function (constructor: Function) {
    constructor.prototype.wheels = numberOfWheels;
  };
}

@SelfDriving
@Wheels(4)
class Car {
  private brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

const nissan = new Car("nissan");

console.log(nissan.selfDriving);
console.log(nissan.wheels);
