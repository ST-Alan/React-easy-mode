import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"

describe('Pruebas en 09-promesas.test', () => {

	test('getHeroeByIdAsync debe de retornar un héroe', (done) => {

		const id = 1
		getHeroeByIdAsync(id)
			.then(hero => {

				expect(hero).toEqual({
					id: 1,
					name: 'Batman',
					owner: 'DC'
				})

				done();//Se añade para funciones asíncronas
			})

	})

	test('getHeroeByIdAsync debe de retornar un error si el héroe no existe', (done) => {

		const id = 100
		getHeroeByIdAsync(id)
			.catch(error => {

				expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
				//console.log(error)

				done();//Se añade para funciones asíncronas
			})

	})

})