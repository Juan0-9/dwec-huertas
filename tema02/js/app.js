function saludar() {
  
    alert("¡Hola! Soy Juan H. Huertas Chergui");
    console.log("Se a saludado");
    
}

function simularError() {
    
    console.error("Error!!!");

}

function queNavegadorSoy() {
    const infoNavegador = navigator.userAgent;
    // Muestra en ventana
    alert("Tu navegador es:\n" + navigator.userAgent);
    console.warn("Puede ser manipulado :User-Agent: ", infoNavegador);
}