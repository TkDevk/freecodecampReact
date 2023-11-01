/*Destructuting ARrays const []= array;  **/

// [0 1 2 3 4 5 6]
const personajes = ['Cartman','Kenny','Stan']
//F2 change all the same values stand in the value and then press f2
const [, ,stan] = personajes;

console.log(stan)

const returnArray = ()=>{
    return ['ABC', 123];
}


/***
 * 
 * IMPORTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANT!
 */
const [numeros, letras] = returnArray();  //with the array i can return values through position

console.log(`It should be letters ${letras}, should be numbers ${numeros}`)

//I can call a function with ()

const useState = (valor) =>{
    return[valor, ()=>{console.log('Hola mundo')}];
} 

const arr = useState('pancholo');
//i can call the function like this
arr[1]();
/**
 * Tarea: El primer valor sea nombre, el segundo se llame set nombre
 */
const useStatte = ( nombre ) =>{
    return [nombre, ()=>{ console.log('sapo hp')}]
}
const arr0 = useState('Harmenio');
console.log(arr0);

/**
 * PILAS PA!
 */
const [nombre, SetNombre] =useStatte('Jacinto');
console.log(`${nombre} va y mira este mensaje que me esta dando setNombre ${SetNombre}`)
//
SetNombre(); // Lo saco y lo manejo como funcion