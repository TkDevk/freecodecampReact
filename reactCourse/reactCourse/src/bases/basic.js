const nam = 'pepe';
const lastName =  'Papira';

const fullName = `${nam} 
${lastName}
${1+1}
${undefined}
`

console.log(fullName)

function holaMundo(nombre){
    return `Hola tu eres ? ${nombre} El hp?`
}
console.log(`${holaMundo("Fabio")}`) // ${} = Template String


//OBjetos literales

const person = {
    nombre: nam,
    apellido: lastName,
    edad: 200,
    "alien?": false,
    locacion : {
       ciudad:'Bogota',
       zipCode: 2312321,
       lat:21313,
       occitu:213123,
    },
};

console.table(` Es ${nam} un alien ?: ${person["alien?"]}.`)
console.log(person.locacion.ciudad)

// Como clonar un objeto?

const person2 = {...person}; //This will clone our person into person2 because ... is a rest parameter

const arr = [1,2,3,4,5]
//... copy the content
let arr2 = [...arr,6]
console.log(arr2)

//Map is a function

let numbers = [1,2,3,4,5,6,7]
const mapTest = numbers.map( function(numbers){ //proptypes, map create a new array, run for each element from array
    return numbers*3
});
console.log(mapTest)

//Functions, try to use const f = functions() o my function can not be modified

function laFunciona(x){
    return 2*x
}
console.log(laFunciona(4))

const laFuncion = (x) => x*2;
const laFuncion2 = (x) => {return x*2}
console.log(laFuncion(4))
console.log(laFuncion2(4));

const saludo = () => 'Hola gonorrea';
console.log(saludo())

//Arrown functions returning info as an object

const getUser = () =>({ // Con () le digo que quiero traer un objeto
    user:'el chimba',
    email: 'elchimba@yahoo.es'
})
console.log(getUser)

//Tarea
/**
 * 1) Transformar a una funcion flecha
 * 2) Tiene que retornar un objeto implicito
 * 3) Pruebas
 */

function getUerActive( nombre ){
    return {
        user: "pancholo",
        nameUser: nombre, 
}
}
console.log(getUerActive('Caramelo'))
/*
Solution
*/

const getUserActive = (nombre) => ({
    user: "pancholo",
    nameUser: nombre, 
});
console.log(getUerActive('Asesisono'))

//Destructuracion de objetos
//Destructuring_assignment
const personosa = {
    nombrre: 'Estrella',
    eddad:40,
    clavee: 'estrellita123',
}

//extrae del objeto lo que me importa y lo puedo usar
const {nombrre} = personosa; //Ahora nombrre existe fuera del ojeto

//const {nombrre, eddad, clavee} = personosa; 


//Si tengo otro valor con el mismo nombre puedo asignarlo cambio el valor del binding

//const { nombrre = nombre4} = personosa;

// Destructuracion con functions

const retornarPersona = (usuario) =>{
     console.log(usuario)
}

retornarPersona(personosa)

//Desstructuruda

const personMc = {
   nameMc: 'Dario',
   ageMc: 24,
   password: 'dara123123',
}

const returnPerson = (usuario)=>{
     const {nameMc, ageMc, password} = usuario;
     return console.log(`The password of ${nameMc} is:  ${ageMc}`)
}

returnPerson(personMc)

//Example Destructuring function

const duvan = {
    nameDuvan: 'Rodriguez',
    age: 27,
    location: 'Bogota',
}

const returnDuvan = ({nameDuvan, location, libreria='React'}) =>{ // i can overwrite
  console.log(`Duvan tiene el apellido ${nameDuvan} and he is currently living in ${location} city. He is learning ${libreria}`)
}
 returnDuvan(duvan);

 //Very important

const destructuringDuvan = ({nameDuvan, age, location}) =>{
      return{ //Is returning an object
        estudiante:nameDuvan,
        edad:age,
        ciudad:location,

      }
} 

destructuringDuvan(duvan)
console.log(destructuringDuvan(duvan))
//Test
const estudianteUser = destructuringDuvan(duvan);
//Test
console.log(estudianteUser)
//TEst
const {nameDuvan, age, location} = duvan;
//Test
console.log(`${nameDuvan} is ${age} years old`)
//
const {estudiante,edad} = destructuringDuvan(duvan);
//
console.log(`El estudiante ${estudiante} tiene ${edad} años`)

/***
 * 
 * 
 * 
 */