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

Se pueden tener tantos Describe component como sean nececsarios
Puede haber un Describe dentro de otro describe aunque no se suele colocar así