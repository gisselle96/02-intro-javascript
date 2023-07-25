// Fetch API
const apiKey = 'KzyMREzo7zKl78GBWCsb8F3cKDseVxQY';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//este codigo se ve feo y dificil de mantener:
// peticion.then(resp => {
//     resp.json().then(data => {
//         console.log(data)
//     })
//     //console.log(resp)
// })

peticion
    .then(resp => resp.json() )
    .then(({data}) => {
        
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

        //console.log(data.images.original.url)
    })
    .catch(console.warn);




