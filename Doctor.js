import { Person } from "./Person.js";
//impoprt e extendendo de person
export class Doctor extends Person {
    // construtor //
    constructor(name, birth, cpf, nameMother, nameFather, address, genre, speciality) {
        //super de Person
        super(name, birth, cpf, nameMother, nameFather, address, genre);
        this.speciality = speciality;
        this.medicalLicense = this.medicalLicense;
    }
    set setmedicalLicense(medicalLicense) {
        this.medicalLicense = medicalLicense;
    }
    apresentar() {
        return `Ola meu nome é ${this.name} sou ${this.speciality} minha licença é ${this.medicalLicense}atendo no endereço ${this.address}`;
    }
}
