//Fetch API, keyword: endpoint
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
/**
 * La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). 
 */
const apiKey = 'N8hCb4IplsTO2sHBE0V0NydA5tEr5kW5'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
const peticion0 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion.then( resp =>{
    resp.json().then ( data =>{
        console.log(data)
    })  
})
.catch( console.warn);
//Las promesas pueden encadenarse

// Codigo mas resumido y limpio
peticion0 
    .then( resp => resp.json())
    .then( ({data}) =>{
        const { url } = data.images.original;
        const img = document.createElement( 'img' );
        img.src = url;
        document.body.append( img );
    })
    .catch (console.warn);
