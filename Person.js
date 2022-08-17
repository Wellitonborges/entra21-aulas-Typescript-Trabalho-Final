export class Person {
    // construtor //
    constructor(name, birth, cpf, nameMother, nameFather, address, genre) {
        this.name = name;
        this.birth = birth;
        this.cpf = cpf;
        this.nameMother = nameMother;
        this.nameFather = nameFather;
        this.address = address;
        this.genre = genre;
    }
    apresentar() {
        return `Oi meu Nome é ${this.name} `;
    }
}
