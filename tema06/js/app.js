/*
  Tarea 6 · DWEC · Juan Hakram Huertas Chergui
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}

// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Juan Hakram",
  apellidos: "Huertas Chergui",
  edad: 28,
  curso: "2º DAW",

  presentarse: function () {
    return `Soy ${this.nombre} ${this.apellidos}, tengo ${this.edad} años y estudio ${this.curso}.`;
  },
};

/*
 * Muestra la ficha del estudiante.
 * Crea un <ul> con un <li> por propiedad y un <p> con la frase de presentarse().
 */
function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const claves = ["nombre", "apellidos", "edad", "curso"];
  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${clave}: ${estudiante[clave]}`;
    ul.append(li);
  });

  salida.append(ul);

  const p = document.createElement("p");
  p.textContent = estudiante.presentarse();
  salida.append(p);

  console.log("Ejercicio 1 - Objeto Estudiante: ", estudiante);
}

function cumplirAnios() {
  estudiante.edad++;
  verFicha();
  console.log(
    "Ejercicio 1 - !Felicidades! Edad actualizada: ",
    estudiante.edad,
  );
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();

  console.log("Ejercicio 1 - Curso borrado: ", estudiante.curso);
}

// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = ""; // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color); // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    return;
  }

  const colorQuitado = colores.pop();

  mostrarColores();

  console.log(
    `Ejercicio 2 - Color quitado con pop: ${colorQuitado}. Colores: ${comoTexto(colores)} `,
  );
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    return;
  }

  const colorQuitado = colores.shift();

  mostrarColores();
  console.log(
    `Ejercicio 2 - Color quitado con shift: ${colorQuitado}. Colores: ${comoTexto(colores)}`,
  );
}

mostrarColores(); // pinta los tres colores de partida nada más cargar

// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" },
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

// Muestra todos los productos y el total de ellos.
function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent =
    productos.length === 1
      ? "Hay 1 producto."
      : `Hay ${productos.length} productos.`;
  console.log("Ejercicio 3 - Todos los productos:", productos);
}

// Ordena los productos por precio de menor a mayor y los pinta.
function ordenarPorPrecio() {
  const copiaProductos = [...productos];
  copiaProductos.sort(function (a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(copiaProductos);

  document.querySelector("#mensaje3").textContent =
    "Productos ordenados por precio (de más barato a más caro).";

  console.log(
    "Ejercicio 3 - Productos ordenados por precio:",
    copiaProductos,
    "Original:",
    productos,
  );
}
// filtra los productos de más de 50 € y los pinta.
function filtrarCaros() {
  const masDe50 = productos.filter(function (producto) {
    return producto.precio > 50;
  });

  pintarProductos(masDe50);

  document.querySelector("#mensaje3").textContent =
    masDe50.length === 1
      ? "Hay 1 producto de más de 50 €."
      : `Hay ${masDe50.length} productos de más de 50 €.`;

  console.log(
    `Ejercicio 3 - Productos de más de 50 €: ${masDe50.length}`,
    masDe50,
  );
}

function buscarProducto() {
  const textoBuscarProducto = document
    .querySelector("#buscarProducto")
    .value.trim()
    .toLowerCase();
  if (textoBuscarProducto === "") {
    document.querySelector("#mensaje3").textContent =
      "Por favor, introduce un texto para buscar.";
    return;
  }
  // Busca el primer producto que contenga el texto en la búsqueda.
  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(textoBuscarProducto);
  });

  if (encontrado === undefined) {
    pintarProductos([]);
    document.querySelector("#mensaje3").textContent = "Producto no encontrado.";
  } else {
    pintarProductos([encontrado]);

    document.querySelector("#mensaje3").textContent = "Producto encontrado.";
  }
}

mostrarProductos(); // la tabla completa nada más cargar

// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Juan ",
  notas: [],
  //Añade una nota al array de notas
  //Devuelve false si la nota no es válida.
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  },

  // Calcula la media de las notas.
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }

    const suma = this.notas.reduce(function (acumulador, nota) {
      return acumulador + nota;
    }, 0);
    return suma / this.notas.length;
  },
};

function mostrarNotas() {
  // Crea un badge para cada nota
  // y añade la clase correspondiente según el valor de la nota
  const contenidoNotas = document.querySelector("#notas");
  contenidoNotas.textContent = "";
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge");

    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenidoNotas.appendChild(badge);
  });

  //Mostrar la media de las notas.
  const media = alumno.media();
  const contenidoMedia = document.querySelector("#media");

  if (alumno.notas.length === 0) {
    contenidoMedia.textContent = "Todavía no hay notas.";
  } else {
    contenidoMedia.textContent = `Media de ${alumno.notas.length} notas: ${media.toFixed(2)}`;
  }

  console.log(
    `Ejercicio 4 - Mostrar notas del alumno:${comoTexto(alumno.notas)}
     Media: ${media.toFixed(2)}`
  );
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const nota = casilla.value.trim();

  const error = document.querySelector("#error4");

  if (nota === "") {
    error.textContent = "Escribe una nota antes de añadir.";
    error.classList.remove("d-none");
    return;
  }
  const notaNumero = Number(nota);
  if (!alumno.anadirNota(notaNumero)) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  } else {
    console.log(
      `Ejercicio 4 - Nota añadida: ${notaNumero}. Notas actuales:
      ${comoTexto(alumno.notas)}`
    );
  }

  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();

  console.log("Ejercicio 4 - Notas borradas.");
}

mostrarNotas();

// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function dobles(num) {
  return num.map(function (n) {
    return n * 2;
  });
}

function verDobles() {
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
  const dobles = dobles(numeros);

  const contenido = document.querySelector("#salida5");
  contenido.textContent = "";

  const p = document.createElement("p");
  p.textContent = `Dobles: ${comoTexto(dobles)}.`;
  contenido.append(p);

  console.log("Ejercicio 5 ver Dobles - Dobles:", comoTexto(dobles));

  const p2 = document.createElement("p");
  p2.textContent = `Números: ${comoTexto(numeros)}.`;
  contenido.append(p2);
  console.log("Ejercicio 5 ver Dobles - Números originales:", comoTexto(numeros));
}
function pares(num) {
  return num.filter(function (n) {
    return n % 2 === 0;
  });
}
function verPares() {
  const pares = pares(numeros);
  
  const contenido = document.querySelector("#salida5");
  contenido.textContent = ""; 

  const p = document.createElement("p");
  p.textContent = `Pares: ${comoTexto(pares)}.`;
  contenido.append(p);
  console.log("Ejercicio 5 ver Pares - Pares:", comoTexto(pares));
}

function suma(num) {
  return num.reduce(function (total, n) {
    return total + n;
  }, 0);
}
function verSuma() {
  const suma = suma(numeros);

  const contenido = document.querySelector("#salida5");
  contenido.textContent = "";

  const p = document.createElement("p");
  p.textContent = `Suma de ${comoTexto(numeros)}: ${suma}.`;
  contenido.append(p);

  console.log(`Ejercicio 5 ver Suma - Suma: ${suma}`);
}

function verCadena() {
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
  const contenido = document.querySelector("#salida5");
  contenido.textContent = "";

  const pPares = document.createElement("p");
  pPares.textContent = `Pares: ${comoTexto(pares(numeros))}.`;
  contenido.append(pPares);

  const pDoblePares = document.createElement("p");
  pDoblePares.textContent = `Dobles de los pares: ${comoTexto(dobles(pares(numeros)))}.`;
  contenido.append(pDoblePares);

  const pSumaDoblePares = document.createElement("p");
  pSumaDoblePares.textContent = `Suma de los dobles de los pares: ${suma(dobles(pares(numeros)))}.`;
  contenido.append(pSumaDoblePares);
  
}

// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = [
  "Granada",
  "Sevilla",
  "Málaga",
  "Córdoba",
  "Jaén",
  "Almería",
  "Cádiz",
  "Huelva",
];
let ciudades = [...ciudadesOriginal]; // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
