var mostrarBotao = document.getElementById("mostrar");
var containerprodDiv = document.getElementById("containerprod");

mostrarBotao.addEventListener("click", function() {
	containerprodDiv.style.display = "grid";
});

var mostrarBotao = document.getElementById("mostrar");
var containerprodDiv = document.getElementById("containerprod");

mostrarBotao.addEventListener("click", function() {
	containerprodDiv.style.display = "grid";
	mostrarBotao.classList.add("escondido");
	mostrarBotao.parentNode.removeChild(mostrarBotao);
});