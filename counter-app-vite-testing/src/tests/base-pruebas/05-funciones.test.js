import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'Dev_Alan'
        };

        const user = getUser()

        // Se puede trabajar conel toStricEqualo con el toEqual:
        // expect(testUser).toStrictEqual(user)
        expect(testUser).toEqual(user)

    })


    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Alan'
        const testUsuarioActivo = {
            uid: 'ABC567',
            username: name
        }
        const usuarioActivo = getUsuarioActivo(name)
        expect(testUsuarioActivo).toEqual(usuarioActivo)
    })


})


