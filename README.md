# ISIS3710 - Parcial Práctico 1

* **Nombre del estudiante** - Leidy Johana Lozano Florez
* **Código** - 202125201

# Ejecución del parcial

* Descargar el proyecto y abrir una terminal dentro del directorio del proyecto, una vez dentro, correr el comando npm install para instalar todas las dependencias listadas en el package.json.
* Una vez instaladas las dependencias, correr el comando npm start para empezar el servidor local del proyecto. Se abrirá una pestaña del navegador en localhost con el proyecto.
* Una vez ahí se verá la página de login.

# Proceso seguido.

* Se decidió investigar en primera instancia como poner una imagen de fondo para el log in, algo que se logró con un tutorial de GeeksForGeeks que daba un estilo al div que contenía el componente del login. Posteriormente se modificó esta decisión con un archivo de .css, que facilitaba el manejo del fondo y del fondo blanco del formulario.
* Se siguió el tutorial del curso para hacer el form del login (no se añadió verificación de campos).
* Se trató de usar navigate para realizar el enrutamiento.
* Luego se intentó hacer los componentes de la homepage. Se hizo un componente record para cada uno de los records, este componente era genérico para que así lo pudiese usar cualquier deporte.
* Luego se trató de usar el componente record dentro de los componentes, se creó un archivo en moockaroo llamado "data.json" que contenía la información específicada por el enunciado. Luego se trató de conectar esta información siguiendo un tutorial de devcommunity. Todo esto fue almacenado dentro de un card, con una imagen predeterminada.
* No se logró hacer funcionar el routing, así que se probó directamente el componente homepage, pero no mostraba nada. 
