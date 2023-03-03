import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe('Pruebas en <FirstApp />', () => {

	// test('Debe de hacer match con el snapshot', () => {
	// 	const title = 'Hola, Soy Goku'
	// 	const { container } = render(<FirstApp title={title} />)
	// 	console.log(container)
	// 	expect(container).toMatchSnapshot()
	// })


	test('Debe mostrar el título en un h1', () => {
		const title = 'Hola, Soy Goku'

		const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
		expect(getByText(title)).toBeTruthy()

		// const h1 = container.querySelector('h1')
		// expect(h1.innerHTML).toContain(title)
		// expect(grtByTestId('test-title')).toBeTruthy()
		expect(getByTestId('test-title').innerHTML).toContain(title)
	})

	test('Debe mostrar el subtítulo enviado por props', () => {

		const title = 'Hola, Soy Goku'
		const subTitle = 'Soy un subtítulo'
		// const { getByText } = render(<FirstApp
		// 	title={title}
		// 	subTitle={subTitle}
		// />)
		const { getAllByText } = render(<FirstApp
			title={title}
			subTitle={subTitle}
		/>)
		expect(getAllByText(subTitle).length).toBe(2)

	})

})