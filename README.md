# Rick And Morty

Es una aplicación de Rick and Morty que utiliza una API Rest y está llena de malas prácticas, errores, y además cuenta con problemas para escalar.

La aplicación es una base de datos, hecha por Rick, la cual mantiene un registro de todas las ubicaciones del universo (Incluidas planetas y dimensiones), junto con el registro de todos los personajes que fueron vistos en cada ubicación. 

Además cuenta con algunos filtros para hacer más fácil la búsqueda, junto con un historial de visualizaciones de personajes.  
<br />
# Objetivos
En esta práctica vamos a centrarnos en agregarle tests al proyecto utilizando los conocimientos adquiridos sobre testing asincrónico de la Testing Library de React. Para ello nos centraremos en los siguientes desafíos:
- El primer desafío consiste en testear la barra de navegación mobile, la cual se abre/cierra según un clic en el ícono de hamburguesa.
- El segundo desafío será testear el componente location-detail utilizando un mock de la feature de characters, para verificar que se invoca correctamente ese componente hijo.
<br />
<br />

# Consigna de trabajo
¡Iniciamos! Lo primero que debemos hacer es identificar qué componentes —que no hemos testeado previamente— podemos testear con las herramientas de testing asincrónico que ya conocemos. Entre ellos podemos identificar los siguientes:
- **features/navigation/navigation-mobile.component.tsx**
  En este caso tenemos distintos casos de prueba para realizar. Primero, deberemos verificar que ningún componente hijo de la barra de navegación mobile se muestre en pantalla. Luego, nos podremos centrar en los tests que verifican que los componentes se muestren correctamente luego de hacer clic en el ícono de hamburguesa, esperando el próximo render de React. Recordemos que para esto deberemos utilizar la librería userEvent en conjunto con el await findBy… 
- **features/location/detail/location-detail.component.tsx**
  La dificultad más grande de este componente radica en que deberemos crear un mock para verificar que invocamos las veces correctas el componente hijo de card de characters, y junto con él la propiedad loading (que es añadida por el HOC de withLoading). Una vez que tengamos el mock correctamente creado y configurado, podemos proceder a realizar los tests de cada estado posible.
<br />
<br />

### **IMPORTANTE**

Te dejamos el código base para que puedas comenzar a trabajar 
en el siguiente enlace.



Ahora sí, ¡manos a la obra!
Bonus track
Con los test añadidos, deberías alcanzar un nivel de cobertura de código del 65-70%. Si no es así, ¡tendrás que fijarte qué líneas dejaste sin testear para poder alcanzarlo!
