import { Person } from "./Person.js"

//impoprt e extendendo de person
export class Doctor extends Person {

    public speciality: string
    private medicalLicense:string

    // construtor //
    constructor(name: string,
         birth: Date,
          cpf: number, 
          nameMother: string,
           nameFather: string, 
           address: string, 
           genre: string, 
           speciality: string) {

            //super de Person
super(name,birth,cpf,nameMother,nameFather,address,genre)

        this.speciality = speciality
        this.medicalLicense=this.medicalLicense
         
    }
    set setmedicalLicense(medicalLicense) {
        this.medicalLicense =medicalLicense
    }
    apresentar(): string {

        return `Ola meu nome é ${this.name} sou ${this.speciality} minha licença é ${this.medicalLicense}atendo no endereço ${this.address}`
    }
}