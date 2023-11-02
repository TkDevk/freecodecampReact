import {gettingHero} from "./bases/08-importaciones.js";

const promise = new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        //resolve();
      const p1 =  gettingHero(2);
      resolve( p1 ); // Cuando resolve > then
    },2000)
});

//const promise = new Promise( (resolve,reject) // args => (cuandosecumple,cuandoNo)

//We need to do something when the promise is completed, there are 2 important methods, then is ok or catch is an error or i called it

promise.then((heroe)=>{
    console.log('heroe', heroe)
})

.catch (err => console.warn(err));


console.log('TAREAS asincronas')


const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject)=>{ // this line makes promesa stay out of the scope
     
        setTimeout ( ()=>{
           const p2 = gettingHero(id);
           if(p2===undefined){
            return console.log('No se encuentra')
           }else{
            resolve(p2)
            
           }
        })
    });
}

getHeroByIdAsync(10)

//.then( heroe => console.log('Heroe', heroe))
    .then( console.log)
    .catch (console.warn) // console.warn es una funcion