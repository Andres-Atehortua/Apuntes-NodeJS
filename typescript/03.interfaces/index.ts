//INTERFACES -> Una interfaz se encarga de definir un comportamiento o propiedades.

interface IAnimal {
  name: string;
  color: string;
  age: number;
}

const dog: IAnimal = {
  name: "Baxter",
  color: "White and brown",
  age: 8,
};

interface OnInit {
  ngOnInit(): void;
}

class MyComponent implements OnInit {
  ngOnInit(): void {
    console.log();
  }
}
