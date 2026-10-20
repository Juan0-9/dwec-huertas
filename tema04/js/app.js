/*
  Tarea 4 · DWEC · [Tu nombre y apellidos]
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
    const n1 = leerNumero("numero1");
    const n2 = leerNumero("numero2");

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      mostrar("Escribe los dos números antes de operar.", "danger");
      console.warn("Restar: falta algún número");
    } else {
      const resultado = n1 - n2;
      mostrar(`${n1} - ${n2} = ${resultado}`);
      console.log(`Sumar: ${n1} - ${n2} = ${resultado}`);
    }
}

function multiplicar() {
    const n1 = leerNumero("numero1");
    const n2 = leerNumero("numero2");

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      mostrar("Escribe los dos números antes de operar.", "danger");
      console.warn("Multiplicar: falta algún número");
    } else {
      const resultado = n1 * n2;
      mostrar(`${n1} * ${n2} = ${resultado}`);
      console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
    }
}

function dividir() {
    const n1 = leerNumero("numero1");
    const n2 = leerNumero("numero2");

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      mostrar("Escribe los dos números antes de operar.", "danger");
      console.warn("Dividir: falta algún número");
    } else {
      if (n2 === 0) {
        if (n1===5) {
          mostrar("Infinity: no se puede dividir por 0", "danger");
          console.warn("Dividir: Division 0/5= Infinity NaN.");
        } else {
          mostrar("No se puede dividir por 0.", "danger");
          console.warn("Dividir: Division por 0.");
        }
      } else {
        const resultado = n1 / n2;
        mostrar(`${n1} / ${n2} = ${resultado}`);
        console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
      }
    }
}

function potencia() {
    const n1 = leerNumero("numero1");
    const n2 = leerNumero("numero2");

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      mostrar("Escribe los dos números antes de operar.", "danger");
      console.warn("Potencia: falta algún número");
    } else {
      const resultado = n1 ** n2;
      mostrar(`${n1} ** ${n2} = ${resultado}`);
      console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
    }
}

function modulo() {
    const n1 = leerNumero("numero1");
    const n2 = leerNumero("numero2");

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      mostrar("Escribe los dos números antes de operar.", "danger");
      console.warn("Modulo: falta algún número");
    } else {
     if (n2 === 0) {
       if (n1 === 5) {
         mostrar("No se puede dividir por 0", "danger");
         console.warn("Modulo: 0%5= NaN.");
       } else {
         mostrar("No se puede dividir por 0.", "danger");
         console.warn("Modulo: Division por 0.");
       }
     } else {
       const resultado = n1 % n2;
       mostrar(`${n1} % ${n2} = ${resultado}`);
       console.log(`Modulo: ${n1} % ${n2} = ${resultado}`);
     }
    }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("cualEsMayor: falta algún número");
  } else {
   if (n1===n2) {
    mostrar(`${n1} es igual a ${n2}`);
    console.log(`cualEsMayor: ${n1} === ${n2}`);
   } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2} = `);
    console.log(`cualEsMayor: ${n1} > ${n2}`);
   } else {
    mostrar(`${n1} es menor que ${n2}`);
    console.log(`cualEsMayor: ${n1} < ${n2}`);
   }
  }

}

function parOImpar() {
  const n1 = leerNumero("numero1");
  
  if (Number.isNaN(n1)) { 
    mostrar("Escribe un número antes de operar.", "danger");
    console.warn("parOImpar: falta un número");
  } else {
    if (!Number.isInteger(n1)) { 
      mostrar(`${n1} no es ni par ni impar`, "warn");
      console.warn(`parOImpar: ${n1} no es ni par ni impar`);
    } else {
      const resultado = n1 % 2 === 0 ? "par" : "impar";
      mostrar(`${n1} es ${resultado}`);
      console.log(`Par o Impar: ${n1} es ${resultado}`);
    }
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  let contador = 0;

  // TODO: si el número falta, tiene decimales o pasa de MAXIMO_REPETICIONES, muestra un error en rojo.
  // TODO: si no, repite con un for tantas veces como diga «veces». En cada vuelta:
  //         anadirLinea(`for · repetición ${i} de ${veces}`);
  //       y cuenta las vueltas en una variable contador.
  // TODO: al terminar, añade una línea con el total: «Total: 5 repeticiones» o «Total: 1 repetición».
  if (Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.error("Bucle For: falta un número");
  } else {
    if (!Number.isInteger(veces)) {
      mostrar(`Bucle For: Numenro 1 : '${n1}' tiene decimales`, "danger");
      console.error(`Bucle For: Numenro 1 : '${n1}' tiene decimales`);
    } else {
      if (veces > MAXIMO_REPETICIONES) {
        mostrar(`Bucle For: Numenro 1 : '${n1}' es mayor que ${MAXIMO_REPETICIONES }, el numero maximo de repeticiones.`, "danger");
        console.error(`Bucle For: Numenro 1 : '${n1}' tiene decimales`);
      } else {
        for (let i = 0; i <= veces; i++) {
          anadirLinea(`for · repetición ${i} de ${veces}`);
          console.log(`for · repetición ${i} de ${veces}`);
          contador++;
        }
        anadirLinea(`Total: ${contador} repeticiones.`);
        console.log(`Total: ${contador} repeticiones.`);
      }
      
    }
  }
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  // TODO: lo mismo que bucleFor(), con un while.
  if (Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.error("Bucle For: falta un número");
  } else {
    if (!Number.isInteger(veces)) {
      mostrar(`Bucle For: Numenro 1 : '${n1}' tiene decimales`, "danger");
      console.error(`Bucle For: Numenro 1 : '${n1}' tiene decimales`);
    } else {
      if (veces > MAXIMO_REPETICIONES) {
        mostrar(
          `Bucle For: Numenro 1 : '${n1}' es mayor que ${MAXIMO_REPETICIONES}, el numero maximo de repeticiones.`,
          "danger",
        );
        console.error(`Bucle For: Numenro 1 : '${n1}' tiene decimales`);
      } else {
        while (contador <= veces) {
          anadirLinea(`for · repetición ${i} de ${veces}`);
          console.log(`for · repetición ${i} de ${veces}`);
          contador++;
        }
        anadirLinea(`Total: ${contador} repeticiones.`);
        console.log(`Total: ${contador} repeticiones.`);
      }
    }
  }
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
    if (Number.isNaN(veces)) {
      mostrar("Escribe un número antes de operar.", "danger");
      console.error("Bucle For: falta un número");
    } else {
      if (!Number.isInteger(veces)) {
        mostrar(`Bucle For: Numenro 1 : '${n1}' tiene decimales`, "danger");
        console.error(`Bucle For: Numenro 1 : '${n1}' tiene decimales`);
      } else {
        if (veces > MAXIMO_REPETICIONES) {
          mostrar(
            `Bucle For: Numenro 1 : '${n1}' es mayor que ${MAXIMO_REPETICIONES}, el numero maximo de repeticiones.`,
            "danger",
          );
          console.error(`Bucle For: Numenro 1 : '${n1}' tiene decimales`);
        } else {
          do {
            anadirLinea(`for · repetición ${i} de ${veces}`);
            console.log(`for · repetición ${i} de ${veces}`);
            contador++;
          } while (contador <= veces);
          anadirLinea(`Total: ${contador} repeticiones.`);
          console.log(`Total: ${contador} repeticiones.`);
        }
      }
    }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
}
