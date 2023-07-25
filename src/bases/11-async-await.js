// Async - Await


// const getImagenPromesa = () => 
//     new Promise (resolve => resolve('https://uhdiuhsuf.com'))

// getImagenPromesa().then(console.log);

// const getImagen = async() => {
//     return 'https://uhdiuhsuf.com';
// }

//console.log(getImagen());

const getImagen = async() => {

    try{
        const apiKey = 'KzyMREzo7zKl78GBWCsb8F3cKDseVxQY';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    }catch (error){
        console.error(error);//manejo del error
    }

}


getImagen();

