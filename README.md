shortcode:
imr: importar React
imp: importar un módulo genérico
rafc: React Arrow Function - Crea un módulo genérico

Desplegar el código en dev:
yarn dev

Exportar componente:
I:
export function App() {
	return (<h1>Hola Mundo</h1>);
}
para importarlo se hace así: 
import { App } from './HelloWorldApp'
Sin las llaves dice que no sabe quién es el componente por default

II:
function App() {
	return (<h1>Hola Mundo</h1>);
}
export default App;
para importarlo se hace así: 
import App from './HelloWorldApp'
En este caso debe estar sin llaves, porque el toma por defecto el módulo a importar de ese archivo. Si sólo ese nombre se coloca entre llaves no funciona