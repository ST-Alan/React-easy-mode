import { useState } from "react";
import { PropTypes } from "prop-types";

export const CounterApp = ({ value, mensajeFinal }) => {

	const [counter, setCounter] = useState(value);

	const handleAdd = () => setCounter((c) => c + 1);
	const handleRemove = () => setCounter(counter - 1);
	const handleReset = () => setCounter(value);


	return (
		<>
			<h1>CounterApp</h1>
			<p> Buyxpress {counter} </p>
			<button onClick={handleAdd}>
				+1
			</button>
			<button onClick={handleRemove}>
				-1
			</button>
			<button aria-label="btn-reset" onClick={handleReset}>
				Reset
			</button>
			<p>{mensajeFinal}</p>
		</>
	)
}

CounterApp.propTypes = {
	value: PropTypes.number,
	mensajeFinal: PropTypes.string
}

CounterApp.defaultProps = {
	mensajeFinal: 'Silent is golden',
	value: 133
}