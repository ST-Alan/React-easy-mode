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

export const FirstApp = ({title,subTitle}) => {
	return (
		<>
			<h2>First App {title}</h2>
			<p>IOS & Android version {subTitle}</p>
		</>
	)
}

FirstApp.propTypes={
	title: PropTypes.string,
	subTitle: PropTypes.number
}

FirstApp.defaultProps={
	title: 'App Buyxpress Español',
	subTitle: 'Version 0.0.1'
}