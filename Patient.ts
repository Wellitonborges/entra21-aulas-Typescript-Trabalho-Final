import { Person } from "./Person.js";

//impoprt e extendendo de person
export class Patient extends Person {

    // construtor //
    constructor(name: string,
        birth: Date,
        cpf: number,
        nameMother: string,
        nameFather: string,
        address: string,
        genre: string) {

        //super de Person
        super(name, birth, cpf, nameMother, nameFather, address, genre)
    }

    apresentar(): string {

        return `Ola meu nome é ${this.name} sou ${this.genre}`
    }
    }
