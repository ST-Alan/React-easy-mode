
export const getImagen = async () => {

    try {

        const apiKey = '7OR9uxzO15LAc5HnCctXyCICqa6cNc32';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen'
    }



}

getImagen();



export const getImagenSinApiKey = async () => {

    try {

        const apiKey = '';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen'
    }



}

getImagenSinApiKey();



