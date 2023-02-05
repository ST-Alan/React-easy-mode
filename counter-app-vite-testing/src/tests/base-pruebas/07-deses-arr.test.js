import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('Debe retornar un string y un número', () => {

        const getRetornaArreglo = retornaArreglo()
        expect(getRetornaArreglo).toStrictEqual(['ABC', 123])
    })
})

