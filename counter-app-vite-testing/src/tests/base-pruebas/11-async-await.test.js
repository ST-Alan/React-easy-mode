import { getImagen, getImagenSinApiKey } from '../../base-pruebas/11-async-await'

describe('Pruebas en 11-async-await.test', () => {


    test('getImagen debe retornar un url de la imagen', async () => {

        const url = await getImagen()
        console.log(url)
        expect(typeof url).toBe('string')

    })
    test('getImagenSinApiKey debe retornar el error del catch', async () => {

        const resp = await getImagenSinApiKey()
        console.log(resp)
        expect(resp).toBe('No se encontró la imagen')

    })

})