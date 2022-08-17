import { Person } from "./Person.js";
export class Doctor extends Person {
    constructor(name, birth, cpf, nameMother, nameFather, address, genre, speciality) {
        super(name, birth, cpf, nameMother, nameFather, address, genre);
        this.speciality = speciality;
        this.medicalLicense = this.medicalLicense;
    }
    apresentar() {
        return `Ainda não implementado`;
    }
}
