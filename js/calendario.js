function abrir(){
	document.getElementById("segundo").classList.add('activido');
	document.getElementById("segundo2").classList.add('activido');
	document.getElementById("primeiro").classList.remove('activido');
	document.getElementById("primeiro1").classList.remove('activido');
	document.getElementById("direita").style.display = "none";
	document.getElementById("esquerda").style.display = "none";
	document.getElementById("direita2").style.display = "block";
	document.getElementById("esquerda2").style.display = "block";
}

function abrir2(){
	document.getElementById("terceiro").classList.add('activido');
	document.getElementById("terceiro3").classList.add('activido');
	document.getElementById("segundo").classList.remove('activido');
	document.getElementById("segundo2").classList.remove('activido');
	document.getElementById("direita2").style.display = "none";
	document.getElementById("esquerda2").style.display = "none";
	document.getElementById("direita3").style.display = "block";
	document.getElementById("esquerda3").style.display = "block";
}

function abrir3(){
	document.getElementById("primeiro").classList.add('activido');
	document.getElementById("primeiro1").classList.add('activido');
	document.getElementById("segundo").classList.remove('activido');
	document.getElementById("segundo2").classList.remove('activido');
	document.getElementById("direita2").style.display = "none";
	document.getElementById("esquerda2").style.display = "none";
	document.getElementById("direita").style.display = "block";
	document.getElementById("esquerda").style.display = "block";
}

function abrir4(){
	document.getElementById("segundo").classList.add('activido');
	document.getElementById("segundo2").classList.add('activido');
	document.getElementById("terceiro").classList.remove('activido');
	document.getElementById("terceiro3").classList.remove('activido');
	document.getElementById("direita3").style.display = "none";
	document.getElementById("esquerda3").style.display = "none";
	document.getElementById("direita2").style.display = "block";
	document.getElementById("esquerda2").style.display = "block";
}
