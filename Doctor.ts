import { Person } from "./Person.js"

export class Doctor extends Person {

    public speciality: string
    private medicalLicense:string

    constructor(name: string,
         birth: Date,
          cpf: number, 
          nameMother: string,
           nameFather: string, 
           address: string, 
           genre: string, 
           speciality: string) {

super(name,birth,cpf,nameMother,nameFather,address,genre)

        this.speciality = speciality
        this.medicalLicense=this.medicalLicense
         
    }

    apresentar(): string {

        return `Ainda não implementado`
    }
}