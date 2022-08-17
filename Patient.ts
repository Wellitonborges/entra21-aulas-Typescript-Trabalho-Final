import { Person } from "./Person.js";

export class Patient extends Person {

    constructor(name: string,
        birth: Date,
        cpf: number,
        nameMother: string,
        nameFather: string,
        address: string,
        genre: string) {
        super(name, birth, cpf, nameMother, nameFather, address, genre)
    }

    apresentar():string{

        return `Ainda não implementado`
    }
}