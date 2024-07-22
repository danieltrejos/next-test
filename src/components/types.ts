// Datos primitivos

let text = "Esto es un texto"
text = "hello"
// text = 123 //error
let number1: number = 123
let boolean1: boolean = false

//Conversion
let numberToText: string = number1.toString()

function multiplicarPor2( arr: number[] ) {
    const newArr = arr.map(item => item * 2) 
    return newArr  // devuelve un nuevo array
} 

console.log(multiplicarPor2([1, 2, 5])) 


const person : Programer = {
    name: "John Doe",
    age: 30,
    lenguage: "Javascript"
}

/* type Person = {
    name: string,
    age: number,
    gender?: 'Male' | 'Female'
}

type Programmer = {
    lenguage: 'Javascript' | 'TypeScript' 
}

type ProgramerPerson =  Person & Programmer

*/

interface Person1  {
    name: string,
    age: number,
    gender?: 'Male' | 'Female'
}

interface Programer extends Person{ 
    lenguage: 'Javascript' | 'TypeScript'
}


function addOneToAge(person: Person) {
    
}

export type Person = {
    name: string,
    age: number,
    gender?: 'Male' | 'Female'
}