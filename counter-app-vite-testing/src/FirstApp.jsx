import PropTypes from 'prop-types'
// import { Fragment } from "react"

// export const FirstApp = () => {
// 	return (
// 		<Fragment>
// 			<h2>First App</h2>
// 			<p>Second Line</p>
// 		</Fragment>
// 	)
// }
// El Fragment de arriba es igual al <></> de abajo y sin importar

export const FirstApp = ({ title, subTitle, name }) => {
	return (
		<>
			<h1 data-testid="test-title"> {title} </h1>
			{/* <p>IOS & Android version {subTitle}</p> */}
			<p>{subTitle}</p>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	)
}

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	// subTitle: PropTypes.number
	subTitle: PropTypes.string
}

FirstApp.defaultProps = {
	// title: 'App Buyxpress Español',
	// subTitle: 33,
	name: 'Alan Fermin'
}