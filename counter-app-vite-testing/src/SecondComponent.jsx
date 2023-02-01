const newMessage = { nombre: 'Alan', apellido: 'Fermin' }

const getResult = () => {
	return 4 + 4
}

const getSuma = (a, b) => {
	return a + b
}
export const SecondComponent = () => {
	return (
		<>
			<h1>{newMessage.nombre}</h1>
			<h2>{getSuma(30, 3)}</h2>
			<h3>{getResult()}</h3>
			<code>{JSON.stringify(newMessage)}</code>
		</>
	)
}
