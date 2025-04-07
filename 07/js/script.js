function agregarFinal(){
    var cuadroTexto = document.getElementById("texto").value;
    var caja = document.getElementById("contenedor");

    if (cuadroTexto.trim() != ""){
        var parrafo = document.createElement("p");
        parrafo.textContent=cuadroTexto;
        caja.appendChild(parrafo);
    }
    else {
        alert("Cuadro de texto vacio.");
    }
    
}

/*
    Usa classList.toggle agrega o quita la clase automaticamente.
    parrafos[i].classList.toggle("estilo-modificado");
*/ 