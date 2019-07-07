import './styles/styles.scss';

class DavidDong {
  public name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
const info = new DavidDong('Dong', 1232);
info.getInfo();
const dabc = "asd";
