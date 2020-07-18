function replace(str, str1, str2){
	var novaStr = "";
	for(i = 0; i < str.length;i++){
		if(str[i] == str1){
			novaStr += str2;
		}else{
			novaStr += str[i];
		}
	}
	return novaStr;
}

function geraMenu(){
	var conteudo = `<h3>
	<div class="dropdown menu">
		<div class="dropdown-toggle" data-toggle="dropdown"><a href="#" class="opcoes">MAIS...</a>
		</div>
		<ul class="dropdown-menu">
		  	<li><a href="index.html">HOME</a></li>
		  	<li><a href="Caça Palavras.html">CAÇA PALAVRAS</a></li>
			<li><a href="Jogo da Forca.html">JOGO DA FORCA</a></li>
			<li><a href="Jogo da Memória.html">JOGO DA MEMÓRIA</a></li>
		</ul>
	  </div>
	</h3>`;
	document.getElementById("colunaMenu").innerHTML = conteudo;
}

//Desenvolvido por: https://Gist.github.com/remino/1563878

function msToTime(duration) {
	var milliseconds = parseInt((duration % 1000) / 100),
	  seconds = parseInt((duration / 1000) % 60),
	  minutes = parseInt((duration / (1000 * 60)) % 60),
	  hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
  
	return minutes + ":" + seconds;
  }