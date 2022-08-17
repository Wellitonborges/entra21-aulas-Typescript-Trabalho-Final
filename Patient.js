import { Person } from "./Person.js";
//impoprt e extendendo de person
export class Patient extends Person {
    // construtor //
    constructor(name, birth, cpf, nameMother, nameFather, address, genre) {
        //super de Person
        super(name, birth, cpf, nameMother, nameFather, address, genre);
    }
    apresentar() {
        return `Ola meu nome é ${this.name} sou ${this.genre}`;
    }
}
