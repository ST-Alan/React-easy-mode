import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";
describe('Pruebas en FirstApp', () => {

	// test('Debe de hacer match con el snapshot', () => {

	// 	const title = 'Hola, Soy Goku'
	// 	const { container } = render(<FirstApp title={title} />)
	// 	console.log(container)
	// 	expect(container).toMatchSnapshot()


	// })

	test('Debe mostrar el título en un h1', () => {
		const title = 'Hola, Soy Goku'
		// La desestructuración con jest permite colocar otro método después del container. en este caso se busca obtener un nodo por un texto, entonces se usa getByText
		const { container, getByText } = render(<FirstApp title={title} />)

		// El getByText lo que hace es que dentro de lo que se renderiza se encuentre el título
		// El toBeTruthly() quiere indicar que ese elemento debe existir
		expect(getByText(title)).toBeTruthy()

		const h1 = container.querySelector('h1')
		//Lo que estoy esperando es que el h1.innerTML sea la constante title dentro de una etiqueta h1
		// expect(h1.innerHTML).toBe(title)
		// Se puede hacer como la línea de arriba o se puede hacer como la línea de abajo
		expect(h1.innerHTML).toContain(title)

	})

})