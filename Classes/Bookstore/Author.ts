 export class Author {
    name: string;
    age: number;
    shortBio: string;
    
    
    constructor(name:string, age:number, shortBio:string) {
    
            this.name = name;
      
            this.age = age;
     
            this.shortBio = shortBio;

    
    
    }

    get getName(): string {
        return this.name;
    }

    get getAge(): number {
        return this.age;
    }

    get getShortBio(): string {
        return this.shortBio;
    }

    getFullPersonalInfo() {
        const resultOfInformation = [];
        resultOfInformation.push(this.name, this.age, this.shortBio);
        return resultOfInformation;
    }
    
}


