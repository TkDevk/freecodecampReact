import heroes, { owners }  from '../data/heroes.js' // Puedo hacer dos exportaciones heroes seria la default, con {} especifico exportaciones individuales que se encuentren en './data/heroes.js' 

// Puedo exportar de varias maneras desde un archivo. puedo tambien escoger cual quiero como default y la que no es default la traigo destructurada
console.log(owners)
//import {heroes}  from './data/heroes.js'

//import papacho from './data/heroes.js'
console.log(heroes)

// const rty = ({id,owner}) =>{
//    return{
//       idHero:id,
//       belong:owner
    
//    }
// }

//  const {idHero} = rty(heroes)
//  console.log(idHero)
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find  
const getHeroById = (id) =>{
    return heroes.find((hero)=> {
        if(hero.id===id){
            return true;
        }else{
            return false;
        }
    });
}
//CallBack
console.log(getHeroById(2))

const gettingHero = (id) => {
   return heroes.find( (heroe)=> heroe.id===id)
}
//method find returns the first value in the provided array that satisfies the provided testing function
console.log(gettingHero(3))

//e.g: const found = array1.find((element) => element > 10);
const gettingFasterHero = (id) => heroes.find((heroex) => heroex.id === id);
console.log(gettingFasterHero(4))

const getHerosByOwner = (owner) => heroes.find((owners)=>owners.owner===owner);
console.log(getHerosByOwner('DC'))

//Filter since i need to find more than 1 value

const getHeroeByOwner = (owner) => heroes.filter((ow)=> ow.owner===owner);
console.log(getHeroeByOwner('Marvel'))
//f2