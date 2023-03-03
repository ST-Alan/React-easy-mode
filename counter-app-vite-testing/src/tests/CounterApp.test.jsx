import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from '../CounterApp'

describe('Pruebas en <CounterApp/>', () => {

	const init = 133
	test('Debe hacer match con el snapshot', () => {
		const { container } = render(<CounterApp value={init} />)
		expect(container).toMatchSnapshot()
	})

	test('Debe mostrar el valor inicial de 133 <CounterApp value={133}>', () => {
		render(<CounterApp value={init} />)
		expect(screen.getByText(value)).toBeTruthy()
	})

	test('Debe de incrementar con el botón +1', () => {

		render(<CounterApp value={init} />)
		// En la línea de abajo le coloco el +1 porque es el texto del botón que quiero probar
		fireEvent.click(screen.getByText('+1'))
		expect(screen.getByText('134')).toBeTruthy()

	})

	test('Debe de decrementar con el botón -1', () => {

		render(<CounterApp value={init} />)
		// En la línea de abajo le coloco el +1 porque es el texto del botón que quiero probar
		fireEvent.click(screen.getByText('-1'))
		screen.debug()
		expect(screen.getByText('132')).toBeTruthy()

	})


	test('Debe funcionar el botón de reset', () => {
		render(<CounterApp value={355} />)
		fireEvent.click(screen.getByText('+1'))
		fireEvent.click(screen.getByText('-1'))
		fireEvent.click(screen.getByText('+1'))
		fireEvent.click(screen.getByText('Reset '))
		// screen.debug()
		// expect(screen.getByText(356)).toBeTruthy()
		{/* buttom aria-label="btn-rest") */ }
		FireEvent.click.screen.getByRole('button', { name: 'btn-reset' }))
	expect(screen.getByText(355)).toBeTruthy()
})

})