var titulo = document.getElementById("titulo");
var parrafo = document.getElementsByClassName("parrafo");
var cuerpo = document.getElementById("cuerpo");

titulo.innerText="Nuevo título";

parrafo[0].innerText = "Parrafo 1 modificado";
parrafo[1].innerText = "Parrafo 2 modificado";
parrafo[2].innerText = "Parrafo 3 modificado";

parrafo[1].outerHTML = "<div>Parrafo ahhhhhh</div>";

cuerpo.style.backgroundColor = "#f4f4f4";
cuerpo.style.textAlign = "center";
titulo.style.color = "#333"
titulo.style.