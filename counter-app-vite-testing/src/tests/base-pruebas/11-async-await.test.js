import { getImagen } from '../../base-pruebas/11-async-await'

describe('Pruebas en 11-async-await.test', () => {


    test('getImagen debe retornar un url de la imagen', () => {

        const url = await getImagen()
        console.log(url)
        expect(typeof url).toBe('string')

    })

})