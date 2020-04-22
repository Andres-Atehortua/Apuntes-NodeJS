//Types
const framework: string = "Angular";
const isProduction: boolean = true;
const PORT: number = 3000;
let nameOfFriend: string = "Jose";
const styles: Array<string> = ["./css/style.css", nameOfFriend];

const sayHello: Function = (name: string): string => `Hello ${name}`;

const value: string = sayHello(nameOfFriend);

console.log(value);
