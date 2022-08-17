import { Doctor } from "./Doctor.js";
import { Patient } from "./Patient.js";
import { Person } from "./Person.js";

let doctor1: Doctor = new Doctor('Dr Augusto', new Date('11/11/1991'), 123456789, 'Vanderleia', 'Godofredo', 'Rua Tilanbuco', 'Masculino', 'Cirurgião',144114622)
let person1: Person = new Person('Jão', new Date('11/11/1991'), 123456789, 'Mery Of Help', 'Tião pedro', 'Rua Escuridão das trevas N°666', 'Masculino')
let patient1: Patient = new Patient('Cebolinha', new Date('11/11/1991'), 987654321, 'Pai do Cebolinha', 'Maria Cebolinha', 'Rua Agro é Tech', 'Masculino')

doctor1.name
doctor1.birth
doctor1.cpf
doctor1.nameMother
doctor1.nameMother
doctor1.speciality
doctor1.setmedicalLicense

person1.name
person1.birth
person1.cpf
person1.nameMother
person1.nameMother





console.log(doctor1.apresentar());
console.log(person1.apresentar());


