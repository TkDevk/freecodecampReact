//Example Destructuring function
//Destructuring objects const {} = object;
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
 * useContext
 * 
 */


const api = {
    id:'1e3123123',
    email: "api@yhaoo.es",
    password: "papiXd",
    age:30,
}


const useContext = ({id,email}) =>{
   return{
    userName: id,
    emailAdress: email,
    games:{
        favorite: 'tf2',
        mostPlayed: 'csgo',

    }
   }
}



const {userName,emailAdress,games} = useContext(api);

console.log(`Your id is ${userName} and is linked with this email${emailAdress}`);

//I can extraer xD from an inner object 

const {favorite} = games;

console.log(`Tu juego favorito es ${favorite}`)

//For an object i have to set the value into the return 