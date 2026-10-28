# Tarea 5 · Manipular el DOM

**Autor:** Juan Hakram Huertas Chergui · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

Abre la carpeta en VS Code, pulsa **Go Live** y prueba los botones con la consola abierta (F12): cada función deja un mensaje en ella.

## Capturas

### a) La página recién cargada

<img src="capturas/a-pagina.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

Se ve mi nombre en la barra de navegación y los tres párrafos de partida.

### b) Ejercicios 1 y 2

<img src="capturas/b-ej1-ej2.png" alt="Los párrafos después de aplicar los cambios y añadir dos párrafos" width="600">

Tras pulsar el botón «Aplicar cambios»:

- **Primero:** con `getElementById("primero")`, el texto cambia a «Texto modificado por JavaScript».
- **Segundo:** con `querySelector(".segundo")`, se selecciona por su clase y se resalta con `bg-warning-subtle`.
- **Tercero:** con `querySelectorAll("#contenido p")` y su posición en la lista (`[2]`), se pone en rojo con `text-danger`.

Después he pulsado «Añadir párrafo» dos veces, y aparecen «Párrafo nuevo 4» y «Párrafo nuevo 5».

### c) Ejercicio 3: resaltado al pasar el ratón

![Un párrafo resaltado con el ratón encima](capturas/c-ej3-resaltado.png)

El párrafo resaltado es el segundo, que es el que tiene el ratón encima. Se resalta cuando el ratón entra (`mouseenter`) y pierde el resaltado cuando sale (`mouseleave`). Los párrafos añadidos después no se resaltan, porque no tienen el evento hasta que se vuelve a pulsar «Activar resaltado».

### d) Ejercicio 4: `<b>hola</b>` con innerHTML

<img src="capturas/d-ej4-innerhtml.png" alt="El primer párrafo tras usar innerHTML" width="600">

- Con «Cambiar texto» (`textContent`) se ve: `<b>hola</b>`
- Con «Probar con innerHTML» se ve: **hola**

Con `innerHTML`, el navegador interpreta las etiquetas y muestra «hola» en negrita.

### e) Ejercicio 5: la lista de tareas

![La lista con tres tareas y una marcada](capturas/e-ej5-lista.png)

Se muestran tres tareas con sus casillas y una marcada, antes de pulsar «Borrar completadas». El contador indica 3.

### f) Ejercicio 6: los datos de la ventana en el móvil

<img src="capturas/f-ej6-movil.png" alt="Los datos de la ventana en el modo móvil" width="300">

Punto de corte:

- En el móvil (iPhone SE, 375 px): `xs`
- En mi pantalla: `xl`

## Reflexión

### ¿Qué diferencia hay entre textContent e innerHTML y por qué no se debe meter en innerHTML lo que escribe el usuario?

`textContent` trata todo lo que recibe como texto plano. En el ejemplo de `<b>hola</b>`, se mostraban las etiquetas porque no se procesaban.

`innerHTML` sí lo interpreta como código HTML, y por eso el resultado se ve en negrita.

Eso parece inofensivo, pero si lo que se mete en `innerHTML` lo escribe el usuario, puede colar cualquier etiqueta y hacer un ataque XSS (*Cross-Site Scripting*). Eso permitiría a un usuario malicioso robar cookies o sesiones.

Siempre hay que usar `textContent` para lo que escribe el usuario, e `innerHTML` solo para HTML escrito por el propio programador.

## Fuentes

- [HTML DOM Elements · W3Schools](https://www.w3schools.com/jsref/dom_obj_all.asp)
- [Node.textContent · MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
- [Element.innerHTML · MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)

## Uso de IA

He usado Claude (Anthropic) para revisar mi `app.js` y el README. Le pedí que me dijera qué errores tenía, y me señaló, entre otros, que en `anadirTarea()` faltaba `const`, que la clase `list-group-item` estaba mal escrita y que `#error5` se mostraba vacío. También le pedí que me explicara la diferencia entre `getElementById` y `querySelector`, y la de `textContent` frente a `innerHTML`, y que me corrigiera las erratas y el formato del README. Con sus respuestas corregí el código yo mismo, probé cada botón en el navegador con la consola abierta y comprobé que todo funcionaba antes de entregarlo.