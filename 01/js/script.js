var titulo = document.getElementById("titulo");
var parrafo = document.getElementsByClassName("parrafo");
var cuerpo = document.getElementById("cuerpo");

titulo.innerText="Nuevo título";

parrafo[0].innerText = "Parrafo 1 modificado";
parrafo[1].innerText = "Parrafo 2 modificado";
parrafo[2].innerText = "Parrafo 3 modificado";


cuerpo.style.backgroundColor = "#f4f4f4";
cuerpo.style.textAlign = "center";

titulo.style.color = "#333"
titulo.innerHTML = "<b> Título </b>"
titulo.style.marginBottom = "15px"
titulo.style.textTransform = "uppercase";

for (var i = 0; i < parrafo.length; i++){
    parrafo[i].style.fontSize = "18px";
    parrafo[i].style.padding = "10px";
    parrafo[i].style.width = "60%"
    parrafo[i].style.left = "5px", "solid";
    parrafo[i].style.borderRadix = "5px"
}


parrafo[0].style.width = "60%"
parrafo[0].style.color = "#e74c3c";
parrafo[0].style.backgroundColor = "#ffe6e6";
parrafo[0].style.border.color = "#c0392b";

parrafo[1].style.width = "60%"
parrafo[1].style.color = "#27ea60";
parrafo[1].style.backgroundColor = "#eaffea";
parrafo[1].style.border.color = "#27ea60";

parrafo[2].style.width = "60%"
parrafo[2].style.color = "#3498db";
parrafo[2].style.backgroundColor = "#e6f2ff";
parrafo[2].style.border.color = "#2980b9";