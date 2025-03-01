function calcularPrecio() {
    let edadInput = document.getElementById("edad").value;
    let precioElemento = document.getElementById("precio");
    let errorElemento = document.getElementById("error");

    // Limpiar mensajes anteriores
    precioElemento.textContent = "";
    errorElemento.textContent = "";

    // Validar que la entrada no esté vacía
    if (edadInput.trim() === "") {
        errorElemento.textContent = "Error: El campo no puede estar vacío.";
        return;
    }

    // Convertir la entrada a número
    let edad = parseInt(edadInput);

    // Validar si es un número válido
    if (isNaN(edad)) {
        errorElemento.textContent = "Error: Ingresa un número válido para la edad.";
        return;
    }

    // Validar si la edad es negativa o nula
    if (edad <= 0) {
        errorElemento.textContent = "Error: La edad debe ser un número positivo mayor que 0.";
        return;
    }

    let precio;

    if (edad < 12) {
        precio = "Gratis";
    } else if (edad >= 12 && edad <= 18) {
        precio = "Precio reducido: 5€";
    } else {
        precio = "Precio completo: 10€";
    }

    // Mostrar el precio calculado
    precioElemento.textContent = `Precio de la entrada: ${precio}`;
}
