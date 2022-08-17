import { Person } from "./Person.js";
export class Patient extends Person {
    constructor(name, birth, cpf, nameMother, nameFather, address, genre) {
        super(name, birth, cpf, nameMother, nameFather, address, genre);
    }
    apresentar() {
        return `Ainda não implementado`;
    }
}
