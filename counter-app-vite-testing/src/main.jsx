import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import { SecondComponent } from './SecondComponent';
// import App from './HelloWorldApp'
// import HelloWorldApp from './HelloWorldApp'
import './style.css'



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <HelloWorldApp /> */}
		{/* <FirstApp title='Hola soy yo' /> */}
		{/* <SecondComponent /> */}
		<CounterApp value={133} />
	</React.StrictMode>
)