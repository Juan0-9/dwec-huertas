/*
  Tarea 3 · DWEC · Juan Hakram Huertas Chergui
  Variables, tipos y conversiones.
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");

// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20; // number
  console.log("edad =", edad, "→", typeof edad);

  const nombre = "Juan"; // string
  const esMayorDeEdad = true; //boolean
  let email = null; // null
  const coso = undefined; //undefined
  const numeroGrande = 10n; //bigInt

  //muestra en la consola el valor y el typeof de cada una
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("esMayorDeEdad =", esMayorDeEdad, "→", typeof esMayorDeEdad);
  console.log("email =", email, "→", typeof email);
  console.log("indefinido =", coso, "→", typeof coso);
  console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);

  // valor a variable let y vuelve a mostrar su typeof.
  email = "juan@gmail.com";
  console.log("email =", email, "→", typeof email);
}

// Ejercicio 2 · Conversiones explícitas

function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, predicción y el resultado con su tipo
  const a = String(123); // espero "123"
  console.log("String(123) →", a, typeof a);

  const b = Number("123"); // espero 123
  console.log("Number(\"123\") →", b, typeof b);

  const c = Number("12abc"); // espero NaN
  console.log("Number(\"12abc\") →", c, typeof c);

  const d = Number(""); // espero 0
  console.log('Number("") →', d, typeof d);

  const e = Number(true); // espero 1
  console.log(" Number(true) →", e, typeof e);

  const f = Boolean(0); // espero false
  console.log("Boolean(0) →", f, typeof f);

  const g = Boolean("texto"); // espero true
  console.log('Boolean("texto") →', g, typeof g);

  const h = Boolean(""); // espero false
  console.log('Boolean("") →', h, typeof h);
}

// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2); // espero 3

  console.log('"5" + 2 →', "5" + 2); // espero 52
  console.log('"5" / 2 →', "5" / 2); // espero 2.5
  console.log('"5" * 2 →', "5" * 2); // espero 10
  console.log('7 + "3" →', 7 + "3"); // espero 10
  console.log('8 % "3" →', 8 % "3"); // espero 2

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5"); // espero true
  console.log('5 === "5" →', 5 === "5"); // espero false

  console.log("0 == false →", 0 == false); // espero true
  console.log("0 === false →", 0 === false); // espero false

  console.log("null == undefined →", null == undefined); // espero true
  console.log("null === undefined →", null === undefined); // espero false
}

// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "Juan Hakram Huertas Chergui";
  const ciclo = "Desarrollo de aplicaciones web";
  const curso = "segundo";
  const aficion = "leer";

  // Un dato que cambia, con let
  let horasEstudio = 21;
  horasEstudio += 3;
  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}. Estoy en ${curso} del grado superior de ${ciclo}. Mi afición es ${aficion}. He estudiado ${horasEstudio} horas esta semana. `;
  alert(ficha);
  console.log(ficha);
  const fichaConMas =
    "Soy " +
    nombre +
    ". Estoy en " +
    curso +
    " del grado superior de " +
    ciclo +
    ". Mi afición es " +
    aficion +
    ". He estudiado " +
    horasEstudio +
    " horas esta semana. ";
  console.log(fichaConMas);
  console.log("Ficha con ` === ficha con mas: " + (ficha === fichaConMas));
}
