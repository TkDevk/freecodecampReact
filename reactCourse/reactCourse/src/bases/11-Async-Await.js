/*Codigo largo*/

const getImagenPromesa = () =>{
    const promesa = new Promise( (resolve, reject) =>{
        resolve('https://sajdasdas.com')
    })
    return promesa;
}

getImagenPromesa().then(console.log)


/**
 * Resumido
 */

const getImagenPromise = () => new Promise (resolve => resolve('https://dasdasdasdas.com'))

getImagenPromise().then(console.log)

/**
 * Usando Async
 */

const getImagen = async() =>{
    try{
    const apiKey = 'N8hCb4IplsTO2sHBE0V0NydA5tEr5kW5'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); // await le indica que espere antes de ejecutar la promesa
   
    const {data} = await resp.json(); //envia una respuesta tipo json

    //Tarea traer imagen

    const { url } = data.images.original;
    const img = document.createElement( 'img' );
    img.src = url;
    document.body.append( img );

    }catch(error){
        console.error(error)
    } 
}  

getImagen();
//Solo puedo usar await si estoy dentro de una funcion async