function calcular() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operacion = document.getElementById("operacion").value;
    let resultadoElemento = document.getElementById("resultado");
    let errorElemento = document.getElementById("error");

    // Limpiar mensajes anteriores
    resultadoElemento.textContent = "";
    errorElemento.textContent = "";

    // Validar que los valores no estén vacíos
    if (numero1.trim() === "" || numero2.trim() === "") {
        errorElemento.textContent = "Error: No puedes dejar campos vacíos.";
        return;
    }

    // Convertir los valores a números
    let n1 = parseFloat(numero1);
    let n2 = parseFloat(numero2);

    // Validar que los valores sean números
    if (isNaN(n1) || isNaN(n2)) {
        errorElemento.textContent = "Error: Debes ingresar números válidos.";
        return;
    }

    // Validar división por cero
    if (operacion === "division" && n2 === 0) {
        errorElemento.textContent = "Error: No se puede dividir por cero.";
        return;
    }

    let resultado;
    switch (operacion) {
        case "suma":
            resultado = n1 + n2;
            break;
        case "resta":
            resultado = n1 - n2;
            break;
        case "multiplicacion":
            resultado = n1 * n2;
            break;
        case "division":
            resultado = n1 / n2;
            break;
    }

    // Mostrar resultado
    resultadoElemento.textContent = `Resultado: ${resultado}`;
}
