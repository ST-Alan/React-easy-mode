import { usContext } from "../../base-pruebas/06-deses-obj"

describe('Esta prueba es de desestructuración de Objetos', () => {

    test('getUsContext debe retornar un objeto', () => {
        const clave = 'Super Dev'
        const edad = 33
        const getUsContext = usContext({ clave, edad })
        expect(getUsContext).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
})



