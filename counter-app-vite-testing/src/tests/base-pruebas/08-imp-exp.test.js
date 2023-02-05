import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {
	test('getHeroeById debe de retornar un héroe por ID', () => {


		const id = 1
		const hero = getHeroeById(id)
		//console.log(hero)

		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })


	})
	test('getHeroeById debe de retornar undefined sino xiste el ID', () => {


		const id = 100
		const hero = getHeroeById(id)
		//console.log(hero)

		expect(hero).toBeFalsy()
	})

	test('Esta prueba debe retornar un arreglo con los Héroes de DC', () => {

		const owner = 'DC'
		const hero = getHeroesByOwner(owner)
		//console.log(hero)
		expect(hero).toHaveLength(3)
		//Este también me sirve:
		//expect(hero.length).toBe(3)
		expect(hero).toStrictEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' }
		])
	})

	test('Esta prueba debe retornar un arreglo con los Héroes de Marvel', () => {

		const marvel = 'Marvel'
		const ownerMarvel = getHeroesByOwner(marvel)
		//console.log('ownerMarvel', ownerMarvel)
		expect(ownerMarvel).toHaveLength(2)
		expect(ownerMarvel).toStrictEqual([
			{ id: 2, name: 'Spiderman', owner: 'Marvel' },
			{ id: 5, name: 'Wolverine', owner: 'Marvel' }
		])

	})

})