class jogoCacaPalavras{
	constructor(){	
	this.letras = ["A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.iniciaPalavra = false;
	this.letrasAtivadas = [];
	}

	distribuiLetras(){
		for (let i = 1;i<=400;i++){
			let numeroAleatorio = Math.floor(Math.random() * this.letras.length)			
			document.getElementById("letra"+i).textContent = this.letras[numeroAleatorio]
		}
	}

	
	formaPalavra(btn){
		if(this.iniciaPalavra == true){
			btn.setAttribute("style","background-color:blue");
			this.letrasAtivadas.push(btn.getAttribute("id"));
		}
		
	}


	iniciaFinalizaPalavra(){
		if(this.iniciaPalavra == false){
			this.iniciaPalavra = true;
		}else{
			this.iniciaPalavra = false;
		}
	}
	

}

var novoJogo;
  function criaElementos(){
        var tabela = document.createElement("table");
        var contadorDeBotoes = 1;
        for (let lin = 1; lin <= 20; lin++) {
            var tableRow = document.createElement("tr");
            for (let col = 1; col <= 20; col++) {
                var tableColumn = document.createElement("td");
                var botao = document.createElement("button");
                botao.setAttribute("id","letra"+contadorDeBotoes);
                botao.setAttribute("linha",lin);
                botao.setAttribute("coluna",col);
                botao.setAttribute("style","width:30px;height:30px");
                botao.setAttribute("onclick","novoJogo.iniciaFinalizaPalavra()");
	botao.setAttribute("onmouseenter","novoJogo.formaPalavra(this)");
                tableColumn.appendChild(botao);
                tableRow.appendChild(tableColumn);  
                contadorDeBotoes++;               
            }
            tabela.appendChild(tableRow);
                       
        }
        document.getElementById("painelJogo").appendChild(tabela);
        }
