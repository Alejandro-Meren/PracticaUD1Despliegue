function cambiarAtributos() {
    // Cambiar el texto del parágrafo
    document.getElementById("demo").innerHTML = "El texto ha sido cambiado.";

    // Cambiar el enlace del <a> y su texto
    let enlace = document.getElementById("miEnlace");
    enlace.href = "https://www.wikipedia.org";
    enlace.innerHTML = "Ir a Wikipedia";

    // Cambiar el atributo src de la imagen
    let imagen = document.getElementById("miImagen");
    imagen.src = "/curso-de-informatica.jpeg"; // Nueva imagen
    imagen.alt = "Imagen cambiada"; // Nuevo texto alternativo

    // Cambiar la anchura de la imagen
    imagen.style.width = "300px";
}
