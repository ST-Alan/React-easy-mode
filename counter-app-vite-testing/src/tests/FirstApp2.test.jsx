import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => {
	const title = 'Hola, Soy Goku'
	const subTitle = 'Soy un Subtítulo'
	test('Debe hacer match con el snapshot', () => {

		const { container } = render(<FirstApp title={title} />)
		expect(container).toMatchSnapshot()


	})

	test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {

		render(<FirstApp title={title} />)
		expect(screen.getAllByText(title)).toBeTruthy()
		// screen.debug()
	})

	test('Debe mostrar el título en un h1', () => {
		render(<FirstApp title={title} />)
		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
	})

	test('Debe mostrar el subtítulo enviado por props', () => {
		render(
			<FirstApp
				title={title}
				subTitle={subTitle}
			/>)
		expect(screen.getAllByText(subTitle).length).toBe(2)

	})
})