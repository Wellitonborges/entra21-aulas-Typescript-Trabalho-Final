export class Person{
    public name:string
    public birth:Date
    public cpf:number
    public nameMother:string
    public nameFather:string
    public address:string
    public genre:string

    constructor(name:string,birth:Date,cpf:number,nameMother:string,nameFather:string,address:string,genre:string){
    this.name=name
    this.birth=birth
    this.cpf=cpf
    this.nameMother=nameMother
    this.nameFather=nameFather
    this.address=address
    this.genre=genre
    } 
    }
