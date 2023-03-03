Las pruebas constan por lo general de 3 partes:

1.- Inicialización:
const message1 = 'Hola Mundo'

2.- Estímulo:
Lo que se aplica al sujeto de prueba
const mesagge2 = message1.trim();

3.- Asersiones - Observar el comportamiento:
El comportamiento por lo general es el esperado

expect(message1).toBe(message2)

En jest no se hace if ni nada de eso, se utiliza el expect para evaluar y en este caso el toBe para saber si ambas funciones son iguales

Se pueden tener tantos Describe component como sean necesarios
Puede haber un Describe dentro de otro describe aunque no se suele colocar así

-------------------------------------------------------------------------------------
FirstApp.test.jsx
Las pruebas deben ser flexibles, deben evaluar todo lo que yo deseo que evalúen sin necesidad de que se conviertan en un dolor de cabeza, no deben ser tan estrictas
-------------------------------------------------------------------------------------
FirstAppFlexible.test.jsx
Se le puede poner un data attribute a cualquier elemento. En este ejemplo se coloca data-testid="test-title"

Se usa getByTestId para obtener el attribute

Se hace esto para que sea para decirle que el atributo exista
expect(getByTestId('test-title')).toBeTruthy()


Con esto podemos validar que el atributo test-title sea igual al título que está en la variable title
expect(getByTestId('test-title').innerHTML).toBe(title)

Con esto se valida que exista el título, si importar que haya caracteres antes o después
expect(getByTestId('test-title').innerHTML).toContain(title)


En el caso de que se quieran ubicar dos o más elementos se usa el getAllByTest
El getAllByTest devuelve un arreglo de elementos HTML, por lo que usa el .lenght
Esto es para que chequee que el arrecglo tenga dos elementos
expect(getAllByText(subTitle).length).toBe(2)
-------------------------------------------------------------------------------------
FirstApp2.test.jsx es FirstApp.test.jsx pero con el código limpio
En el @testing-library/react se importa el screen

Se coloca el:
render(<FirstApp title={title} />)
Sin el:
const { container } =

screen: Ayuda a hacer limpiezas del código


screen.debug(): Muestra todo lo que hay en el método screen. Cuando se coloca después del render muestra todo los elementos que están renderizados dentro del HTML


De esta forma se valida que el title exista
render(<FirstApp title={title} />)
		// screen.debug()
		expect(screen.getAllByText(title)).toBeTruthy()


De esta forma se valida que el title no exista
render(<FirstApp title={title} />)
		// screen.debug()
		expect(screen.getAllByText(title)).not.toBeTruthy()


De esta forma se valida por etiquetas HTML:
En este caso un heading de nivel 1 o etiqueta H1
expect (screen.getByRole('heading', { level: 1 }))

debo colocar FirsAppp con etiqueta h1 donde coloqué data-testid

Para validar subtítulo se crea el subtítulo abajo de la variable del título
Solo que en vez de usar expect(getAllByText(subTitle).length).toBe(2)
Se usa: expect(screen. getAllByText(subTitle).length).toBe(2)
_____________________________________________________________________________________
Para trabajar cualquier testing con FirstApp hay que descomentarlo en main.jsx
-------------------------------------------------------------------------------------
fireEvent es un evento que viene con React Testing Library (Hay que verificar que se importe), sirve para capturar los eventos

En este caso en el debug se ve el número 132 desde la consola
	test('Debe de decrementar con el botón -1', () => {

		render(<CounterApp value={init} />)
		// En la línea de abajo le coloco el +1 porque es el texto del botón que quiero probar
		fireEvent.click(screen.getByText('-1'))
		screen.debug()
		expect(screen.getByText('9')).toBeTruthy()

	})

El useState no se evalúa. 