import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import { SecondComponent } from './SecondComponent';
// import App from './HelloWorldApp'
// import HelloWorldApp from './HelloWorldApp'



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <HelloWorldApp /> */}
		{/* <FirstApp /> */}
		<SecondComponent />
	</React.StrictMode>
)