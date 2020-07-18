class jogoCacaPalavras{
	// qtddColunasDeLetras e qtddLinhasDeLetras referem se respectivamente a quantidade de colunas e linhas
	// do painel de letras do jogo. 
	// pontuacao é utilizada para verificar quando o jogo é concluído. Quando ela estiver com o mesmo valor
	//da quantidade de palavras informada na chamada do construtor na variável qtddPalavrasParaEncontrar,
	// o método novaRodada() chamado.
	//chamado.
	//A variável iniciaPalavra serve com "gatilho" para iniciar e finalizar a formação de uma palavra. 
	//idsBotoesAtivadas guarda todos os botões/letras selecionados pelo usuário ao formar uma palavra. Seus
	//valores são usados para retornar os botões/letras a cor padrão caso a palavra formada não seja uma das
	//escolhidas para serem encontradas.
	// letrasAtivadas é um array que recebe o atributo "letra" de cada botão/letra que o usuário selecionar
	//ao formar uma palavra. Os valores desse array são usados para exibir a palavra formada na página.
	//O array direcoes são as direções possível em que uma palavra pode ser inserida no painel do jogo.
	constructor(qtddColunasDeLetras,qtddLinhasDeLetras,qtddPalavrasParaEncontrar){
	this.qtddColunasDeLetras;
	this.qtddLinhasDeLetras;
	this.qtddPalavrasParaEncontrar;
	this.pontuacao = 0;	
	this.letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.iniciaPalavra = false;
	this.idsBotoesAtivados = [];
	this.letrasAtivadas = [];
	this.direcoes =  ["horizontalDireita","horizontalEsquerda","verticalAbaixo","verticalAcima"];
	this.palavras = ['CACHORRO' ,'OCEANO' ,'PARIS' ,'CAMISA' ,'PERNETA' ,'CONTAGEM' ,'TELEFONE' ,'TELEVISÃO' ,'COMPUTADOR' ,'TECLADO' ,'SALGADO' ,'JANELA' ,'CANTOR' ,'CABELO' ,'ENXADA' ,'ONIBUS' ,'MONITOR' ,'CARROCERIA' ,'CARRETA' ,'TUBULAÇÃO' ,'MESÁRIO' ,'SUJEIRA' ,'RALADOR' ,'TABOLEIRO' ,'BICOITO' ,'ANELAR' ,'MANICURE' ,'CHINELO' ,'CALÇADO' ,'PIPOQUEIRA' ,'BONÉ' ,'MODEM' ,'CANECA' ,'COLHER' ,'XÍCARA' ,'BORBOLETA' ,'VENTILADOR' ,'VENTO' ,'SOPRAR' ,'CORPO' ,'CELULAR' ,'SMARTPHONE' ,'TELEFONIA' ,'OPERADORA' ,'PERCURSO' ,'FLORES' ,'FLORESTA' ,'CARPINTEIRO' ,'MOTORISTA' ,'CHUVA' ,'SOLEIRA' ,'PROGRAMADOR' ,'PROSTUTUTA' ,'COMPARAR' ,'COMPRAR' ,'DEDO' ,'MÃO' ,'PERNAS' ,'BRAÇOS' ,'CABEÇA' ,'OLHOS' ,'ORELHA' ,'NARIZ' ,'BOCA' ,'BOCHECHA' ,'CORAÇÃO' ,'FÍGADO' ,'ESTÔMAGO' ,'GOELA' ,'GARGANTA' ,'QUEIXO' ,'DENTE' ,'LÍNGUA' ,'UNHA' ,'TORNOZELO' ,'CANCANHAR' ,'JOELHO' ,'PELE' ,'OSSO' ,'RIM' ,'BEXIGA' ,'PÊNIS' ,'VAGINA' ,'ESÔFAGO' ,'FARINGE' ,'CÉREBRO' ,'PINTOR' ,'SECRETÁRIA' ,'SORVETE' ,'COBRADOR' ,'ATENDENTE' ,'ASSISTENTE' ,'PROFESSOR' ,'TAXISTA' ,'AGRÔNOMO' ,'PEDAGOGO' ,'GEÓGRAFO' ,'HISTORIADOR' ,'LINGUISTA' ,'LETRISTA' ,'GERENTE' ,'LÍDER' ,'DIRETOR' ,'SERVIDOR' ,'AUXILIAR' ,'SENADOR' ,'PREFEITO' ,'GOVERNADOR' ,'PRESIDENTE' ,'DEPUTADO' ,'SUPLENTE' ,'VICE' ,'ARROZ' ,'FEIJÃO' ,'MACARRÃO' ,'FEIJOADA' ,'SUCO' ,'VERDURA' ,'FRUTA' ,'PÃO' ,'SABONETE' ,'CEBOLA' ,'ALHO' ,'JILÓ' ,'ABÓBORA' ,'MANDIOCA' ,'AIPÍM' ,'MACAXEIRA' ,'GERIMUM' ,'MEXIRICA' ,'BERGAMOTA' ,'LARANJA' ,'LIMÃO' ,'MARACUJÁ' ,'MORANGO' ,'ALFACE' ,'COENTRO' ,'SALSINHA' ,'MANGA' ,'GUARANÁ' ,'REFRIGERANTE' ,'SUSPIRO' ,'BOLO' ,'BOLACHA' ,'EXTRATO' ,'TOMATE' ,'CENTRAL' ,'VASO' ,'GATO' ,'CADELA' ,'SOFÁ' ,'ARMÁRIO' ,'CAMA' ,'COLCHÃO' ,'CADEIRA' ,'BANCO' ,'DINHEIRO' ,'ALMOFADA' ,'SOFISTICADO' ,'CHÃO' ,'CÉU' ,'LUA' ,'SOL' ,'ESCOVA' ,'PORTA' ,'PORTAL' ,'CHAVE' ,'CADEADO' ,'CHUVEIRO' ,'BANHEIRO' ,'QUARTO' ,'SALA' ,'COZINHA' ,'VARANDA' ,'ÁREA' ,'GARAGEM' ,'PORTÃO' ,'PISCINA' ,'LAZER' ,'CHURRASQUEIRA' ,'PRISILHA' ,'LUZ' ,'LÂMPADA' ,'LAMPIÃO' ,'CANDEIA' ,'TESOURA' ,'FACA' ,'PRATO' ,'COPO' ,'TIGELA' ,'VASÍLHA' ,'PANELA' ,'TAMPA' ,'CALDEIRÃO' ,'ESPELHO' ,'LAVATÓRIO' ,'SHAMPOO' ,'HIDRATANTE' ,'CONDICIONADOR' ,'BATOM' ,'LÁPÍS' ,'CANETA' ,'CANELA' ,'CRAVO' ,'ROSA' ,'CAMPO' ,'ÁGUA' ,'FOGO' ,'TERRA' ,'ESPÍRITO' ,'PENTAGRAMA' ,'RELIGIÃO' ,'SATANÁS' ,'LÚCIFER' ,'LILITH' ,'BAPHOMET' ,'CANDOMBLÉ' ,'IGREJA' ,'TERREIRO' ,'EVANGÉLICO' ,'CATÓLICO' ,'CRISTÃO' ,'PROTESTANTE' ,'CERVEJA' ,'JUDEU' ,'MULÇUMANO' ,'BUDISTA' ,'TERRAPLANISTA' ,'ESPÍRITA' ,'KARDECISMO' ,'CATEQUISMO' ,'EXTREMO' ,'SUGAR' ,'BEIJAR' ,'AMAR' ,'SOBREVIVER' ,'QUERER' ,'DESEJAR' ,'FELICIDADE' ,'ALEGRIA' ,'FORTUNA' ,'BELEZA' ,'BONITO' ,'PRAZER' ,'FOGÃO' ,'GELADEIRA' ,'GARRAFA' ,'TAÇA' ,'ESPETO' ,'CHURRASCO' ,'GARÇOM' ,'CAIXA' ,'CONTA' ,'MENU' ,'CARDÁPIO' ,'BANDEIJA' ,'GUARDANAPO' ,'ASSENTO' ,'ENTRADA' ,'CHURRAQUEIRO' ,'ROSCA' ,'LEITE' ,'CAFÉ' ,'QUEIJO' ,'TORTA' ,'MOUSSE' ,'DOCE' ,'LEITO' ,'APARTAMENTO' ,'ENFERMARIA' ,'MÉDICO' ,'DOENTE' ,'PACIENTE' ,'CIRURGIÃO' ,'PEDIATRA' ,'CLÍNICO' ,'CLÍNICA' ,'CANTINA' ,'CATRACA' ,'CRACHÁ' ,'IDENTIFICAÇÃO' ,'IDENTIDADE' ,'GUICHÊ' ,'FICHA' ,'PRONTUÁRIO' ,'CARTÃO' ,'ESPERAR' ,'INJEÇÃO' ,'VACINA' ,'REMÉDIO' ,'MEDICAMENTO' ,'EXAME' ,'ULTRASSOM' ,'FOTOGRAFIA' ,'PHOTOSHOP' ,'EXCEL' ,'PROCESSADOR' ,'ENERGIA' ,'TELA' ,'BOTÃO' ,'CALÇA' ,'SAPATO' ,'TÊNIS' ,'BLUSA' ,'CALCINHA' ,'CUECA' ,'BOTINA' ,'BOTIJÃO' ,'GRANIZO' ,'GRANITO' ,'PEDRA' ,'FILOSOFIA' ,'HISTÓRIA' ,'PORTUGUÊS' ,'CIÊNCIAS' ,'TECNOLOGIA' ,'SISTEMA' ,'DESENVOLVIMENTO' ,'SOCIAL' ,'SOCIOLOGIA' ,'MATEMÁTICA' ,'BIOLOGIA' ,'QUÍMICA' ,'ARTE' ,'RUA' ,'AVENIDA' ,'ALAMEDA' ,'ESTRADA' ,'RODOVIA' ,'TRECHO' ,'PEDAÇO' ,'FATIA' ,'GARFO' ,'RIACHO' ,'PORTEIRO' ,'PORTARIA' ,'HOTEL' ,'HOTELARIA' ,'MOSTEIRO' ,'PADRE' ,'PASTOR' ,'OVELHA' ,'CABRA' ,'CAVALO' ,'ÉGUA' ,'VACA' ,'PEIXE' ,'BALEIA' ,'CAMARÃO' ,'RATOEIRA' ,'LEÃO' ,'ÁRIES' ,'TOURO' ,'VIRGEM' ,'ESCORPÍÃO' ,'AQUÁRIO' ,'SARGITÁRIO' ,'CAPRICÓRNIO' ,'LIBRA' ,'CÂNCER' ,'SACERDOTE' ,'DISCÍPULO' ,'APRENDIZ' ,'BRASIL' ,'ARGENTINA' ,'PARAGUAI' ,'URUGUAI' ,'FRANÇA' ,'AMÉRICA' ,'ÁSIA' ,'EUROPA' ,'AUSTRÁLIA' ,'PAQUISTÃO' ,'ÁFRICA' ,'ITÁLIA' ,'CHINA' ,'JAPÃO' ,'IUGOSLÁVIA' ,'CANADÁ' ,'MÉXICO' ,'MÁXIMO' ,'MÍNIMO' ,'MÉDIO' ,'ANELAR' ,'POLEGAR' ,'INDICADOR' ,'SORVETE' ,'PARALELO' ,'IMPORTAR' ,'EXPORTAR' ,'AJUDA' ,'EXIBIR' ,'REVISÃO' ,'FÓRMULA' ,'INSERIR' ,'PÁGINA' ,'INICIAL' ,'ARQUIVO' ,'CÓDIGO' ,'SUPLEMENTO' ,'DISIGN' ,'CONTROLE' ,'EXECUTAR' ,'PROPRIEDADE' ,'PACOTE' ,'EXPANSÃO' ,'DADOS' ,'COMPARTILHAR' ,'PALAVRA' ,'JOGO' ,'GRAVAR' ,'MACRO' ,'VISUAL' ,'ACOMPANHAMENTO' ,'TRIÂNGULO' ,'COMÉRCIO' ,'PESSOA' ,'MARCA' ,'ETIQUETA' ,'DISQUETE' ,'COMPACTO' ,'FUNIL' ,'SETA' ,'QUADRADO' ,'OVAL' ,'BOLICHE' ,'CUBISMO' ,'SURREALISMO' ,'VANGUARDA' ,'LIVRO' ,'PRATELEIRA' ,'FOLHA' ,'PASTA' ,'NÚMERO' ,'FRAÇÃO' ,'DECIMAL' ,'GRANDEZA' ,'MATRIZ' ,'EQUAÇÃO' ,'CÁLCULO' ,'CALCULADORA' ,'TECLA' ,'VISOR' ,'VISÃO' ,'EXIBIÇÃO' ,'CINEMA' ,'SHOPPING' ,'LOJA' ,'MERCADO' ,'SUPERMERCADO' ,'HIPERMERCADO' ,'GASTAR' ,'VÍDEO' ,'IMAGEM' ,'SONORO' ,'SONEGAR' ,'IMPOSTOS' ,'CONCEIRA' ,'PELE' ,'BURACO' ,'POROS' ,'RUGAS' ,'SINAL' ,'MAIS' ,'MENOS' ,'DIVISÃO' ,'MULTIPLICAÇÃO' ,'SERIADO' ,'NOVELA' ,'FILME' ,'SÉRIE' ,'LONGO' ,'METRAGEM' ,'MEDIDA' ,'PROFUNDIDADE' ,'PROFUNDO' ,'FLAUTA' ,'VIOLÃO' ,'GUITARRA' ,'SOPRO' ,'SAXOFONE' ,'BATERIA' ,'BANDEIRA' ,'PANDEIRO' ,'BATATA' ,'REPOLHO' ,'COUVE' ,'RABANETE' ,'FESTA' ,'COMEMORAR' ,'PAPAI' ,'MAMÃE' ,'AMIGO' ,'AVÓ' ,'IRMÃO' ,'TITIA' ,'BOCA' ,'DENTE' ,'PADRINO' ,'REATAR'];
	this.palavrasEscolhidas = [];
	this.palavraFormada = "";
	}

	obtemDificuldade(){
		var opcoes = document.querySelectorAll("[name='dificuldade']")
		for(let i = 0;i<opcoes.length;i++){
			if(opcoes[i].checked == true){
				return [parseInt(opcoes[i].getAttribute("colunasLinhas")),parseInt(opcoes[i].getAttribute("qtdd_palavras"))];
			}
		}
	}

	//O método novaRodada(inicio) inicia uma nova rodada. Seu argumento sinalizada se é uma nova rodada
	//iniciada ao abrir a página (inicio = true) ou iniciada pelo usuário atraves do botão "reiniciar" ou
	//iniciada ao finalizar uma rodada (inicio = false)
	 novaRodada(inicio){
		 const geraRodada = () =>{
			document.querySelector("#plvrFormada").textContent = "";
			this.qtddColunasDeLetras = this.obtemDificuldade()[0];
			this.qtddLinhasDeLetras = this.obtemDificuldade()[0];
			this.qtddPalavrasParaEncontrar = this.obtemDificuldade()[1];
			document.getElementById("painelPalavras").textContent = "";
			document.getElementById("painelJogo").textContent = "";
			this.criaElementos();
			this.distribuiLetras();
			this.escolhePalavras();
			this.distribuiPalavras();
			this.pontuacao = 0;
		 }
		if(inicio == false){
			let resposta = confirm("Rodada completa!" + "\n" + "Deseja iniciar nova rodada?");
			if (resposta == true){
				geraRodada();
			}
		}else{
				geraRodada();
		}
	}

	//O método a seguir, cria os botões/letras do painel do jogo dentro de div's e span's simulando uma
	//tabela. 
	//Os botões/letras terão os atributos "coluna" e "linha" que serão utilizados para localizar o botão
	//dentro do painel que funcionará como uma tabela/matriz.
	//O argumento "utilizada" será verificado para saber se o botão/letra já foi utilizado para exibir
	//alguma das palavras escolhidas. Isso evitará que uma palavra sobreponha a outra. Isso será explicado
	//no método verificaLetraUtilizada()
	 criaElementos(){
        var painelDeLetras = document.createElement("div");
        var contadorDeBotoes = 1;
        for (let lin = 1; lin <= this.qtddLinhasDeLetras; lin++) {
            var linhaDeLetras = document.createElement("div");
            for (let col = 1; col <= this.qtddColunasDeLetras; col++) {
                var colunaDeLetras = document.createElement("span");
                var botao = document.createElement("button");
                botao.setAttribute("id","letra_".concat(contadorDeBotoes));
                botao.setAttribute("linha",lin);
				botao.setAttribute("coluna",col);
				botao.setAttribute("utilizada","NÃO");
				botao.setAttribute("selecionada","NÃO");
                botao.setAttribute("class","letraPadrao");
				botao.setAttribute("onclick","novoJogo.iniciaFinalizaPalavra(this)");
				botao.setAttribute("onmouseenter","novoJogo.formaPalavra(this)");
				colunaDeLetras.appendChild(botao);
                linhaDeLetras.appendChild(colunaDeLetras);  
                contadorDeBotoes++;               
            }
            painelDeLetras.appendChild(linhaDeLetras);
                       
        }
        document.getElementById("painelJogo").appendChild(painelDeLetras);
	}
		
	verificaPontuacao(){
			if(this.pontuacao == this.qtddPalavrasParaEncontrar){
				this.novaRodada(false);
			}
	}

	distribuiLetras(){
		for (let i = 1;i<=(this.qtddColunasDeLetras * this.qtddLinhasDeLetras);i++){
			let numeroAleatorio = Math.floor(Math.random() * this.letras.length)			
			document.getElementById("letra_"+i).textContent = this.letras[numeroAleatorio]
			document.getElementById("letra_"+i).setAttribute("letra", this.letras[numeroAleatorio])
		}
	}
	//formaPalavra(btn) é acionado no evento onmouseenter de cada botão/letra do painel do jogo.
	//Caso a variável iniciaPalavra for = a true, obtem se o atributo "letra" do botão/letra adicionando
	// a variável letrasAtivadas em seguida, obtem o id do botão/letra e adiciona a matriz idsBotoesAtivados.
	//Na clausula else, a variável letrasAtivadas é esvaziada porque se iniciaPalavra for false, quer dizer
	//que a formação de palavra foi finalizada. 
	formaPalavra(btn){
		if(this.iniciaPalavra == true){
			btn.setAttribute("class","letraSelecionada");
			if(btn.getAttribute("SELECIONADA") == "NÃO"){
				btn.setAttribute("selecionada","SIM");
				this.idsBotoesAtivados.push(btn.getAttribute("id"));
			}
			this.letrasAtivadas .push(btn.getAttribute("letra"));
			this.exibePalavraFormada();			
		}else{
			this.letrasAtivadas = [];
		}
		
	}


	voltaletrasAoPadrao(){
		this.idsBotoesAtivados.forEach(idBtn => {
				document.getElementById(idBtn).setAttribute("class","letraPadrao");
				document.getElementById(idBtn).setAttribute("selecionada","NÃO");
		});
		this.idsBotoesAtivados = [];
	}
	//Esse método inicia a variável iniciaPalavra sinalizado que foi iniciada a formação de uma palavra
	//ele é chamado no evento onclick de cada botão/letra quando o usuário inicia e finaliza uma palavra.
	iniciaFinalizaPalavra(btn){		
		if(this.iniciaPalavra == false){
			this.iniciaPalavra = true;
			btn.setAttribute("class","letraSelecionada");
			if(btn.getAttribute("SELECIONADA") == "NÃO"){
				btn.setAttribute("selecionada","SIM");
				this.idsBotoesAtivados.push(btn.getAttribute("id"));
			}
			this.letrasAtivadas.push(btn.getAttribute("letra"));
			this.exibePalavraFormada();			
		}else{
			this.iniciaPalavra = false;
			if(this.verificaPalavraFormada() == false){
				this.voltaletrasAoPadrao();
			};
		}
		this.verificaPontuacao();
	}

	exibePalavraFormada(){
		document.getElementById("plvrFormada").textContent = "";
		this.palavraFormada = replace(this.letrasAtivadas,",","");
		document.getElementById("plvrFormada").textContent = this.palavraFormada;
	}
	//Esse método compara a qtdd de colunas do painel definido atraves da dificuldade escolhida pelo
	//usuário, como tamanho da palavra escolhida para evitar que seja escolhida uma palavra que seja
	//maior que a quantidade de posições/letras na direção escolhida
	escolhePalavras(){
		var aleatorio;
		var contador = 0;
		this.palavrasEscolhidas = [];
		var contador = 0;
		while(contador < this.qtddPalavrasParaEncontrar){
			aleatorio = Math.floor(Math.random() * (this.palavras.length - 1) + 1);
			if(this.palavras[aleatorio].length <= this.qtddColunasDeLetras){
				if(this.palavrasEscolhidas.includes(this.palavras[aleatorio]) == false){
					this.palavrasEscolhidas.push(this.palavras[aleatorio]);
					contador++;
				}
		}
		}
		document.getElementById("painelPalavras").innerHTML = "<label>Encontre as palavras abaixo:</label>";
		for(let i = 0;i < this.palavrasEscolhidas.length;i++){
			contador ++;
			document.getElementById("painelPalavras").innerHTML += "<label id='palavra" + contador + "' encontrada='NÃO' name='" + this.palavrasEscolhidas[i] + "'> " + this.palavrasEscolhidas[i] + "</label><br>";
		}
	}
	
	verificaPalavraFormada(){
			var palavrasDoPainel = document.querySelector("#painelPalavras").childNodes;
			var encontrada = false;
			for(let i = 0;i<palavrasDoPainel.length;i++){
				if (replace(palavrasDoPainel[i].textContent," ","") == this.palavraFormada){
					document.getElementById(palavrasDoPainel[i].getAttribute("id")).setAttribute("class","piscarTexto");
					encontrada = true;
					this.pontuacao ++;
					this.idsBotoesAtivados = [];
					break;
				}
			}
		return encontrada;		
	}


	verificaSeCabePalavra(palavra,direction,column,line){
	var tamanhoPalavra = palavra.length;
	var retorno = false;
	if(direction == "horizontalDireita"){
		if(tamanhoPalavra <= this.qtddColunasDeLetras - column + 1){
			retorno = true;
		}

	}else if(direction == "horizontalEsquerda"){
		if(tamanhoPalavra <=  column){
			retorno = true;
		}

	}else if(direction == "verticalAbaixo"){
		if(tamanhoPalavra <=  (this.qtddLinhasDeLetras - line)){
			retorno = true;
		}

	}else if(direction == "verticalAcima"){
		if(tamanhoPalavra <=  line -1){
			retorno = true;
		}
	}
	return retorno;
	}


	verificaLetraUtilizada(direction,palavra,posicaoInicial){
		posicaoInicial = posicaoInicial.split("_");
		posicaoInicial = parseInt(posicaoInicial[1]);
		var letraJaUtilizada = false;
		const verifica = (i,elemento) =>{
			if(document.getElementById(elemento).getAttribute("utilizada") == "SIM" && document.getElementById(elemento).getAttribute("letra") != palavra[i]){
				letraJaUtilizada = true;
		   }
		}
		switch(direction){				
			case "horizontalDireita":	
			for(let i = 0;i<palavra.length;i++){
				let elemento = "letra_".concat(posicaoInicial++);
				verifica(i,elemento);
			}
		break;
			
			case "horizontalEsquerda":
				for(let i = 0;i<palavra.length;i++){
					let elemento = "letra_".concat(posicaoInicial--);
					verifica(i,elemento);
				}		
		break;
			
			case "verticalAbaixo":
				for(let i = 0;i<palavra.length;i++){
					let elemento;
					elemento  = "letra_".concat(posicaoInicial+= this.qtddLinhasDeLetras);
					verifica(i,elemento);
				}
		break;
			
			case "verticalAcima":
				for(let i = 0;i<palavra.length;i++){
					let elemento = "letra_".concat(posicaoInicial-= this.qtddLinhasDeLetras);
					verifica(i,elemento);
				}			
		break;
		}
		return letraJaUtilizada;
	}

	inserePalavra(direction,palavra,posicaoInicial){
		posicaoInicial = posicaoInicial.split("_");
		posicaoInicial = parseInt(posicaoInicial[1]);
		const insere = (i,elemento) =>{
			document.getElementById(elemento).textContent = palavra[i];
			document.getElementById(elemento).setAttribute("letra",palavra[i]);
			document.getElementById(elemento).setAttribute("utilizada","SIM");
			document.getElementById(elemento).setAttribute("class","letraPadrao");
		}
		switch(direction){				
			case "horizontalDireita":	
			for(let i = 0;i<palavra.length;i++){
				let elemento = "letra_".concat(posicaoInicial++);
				insere(i,elemento);
			};
		break;
			
			case "horizontalEsquerda":
				for(let i = 0;i<palavra.length;i++){
					let elemento = "letra_".concat(posicaoInicial--);
					insere(i,elemento);
				};			
		break;
			
			case "verticalAbaixo":
				for(let i = 0;i<palavra.length;i++){
					let elemento;
					elemento  = "letra_".concat(posicaoInicial+= this.qtddLinhasDeLetras);
					insere(i,elemento);
				};
		break;
			
			case "verticalAcima":
				for(let i = 0;i<palavra.length;i++){
					let elemento = "letra_".concat(posicaoInicial-= this.qtddLinhasDeLetras);
					insere(i,elemento);
				};			
		break;

		}
	}

	distribuiPalavras(){
		var letrasDoPainel = document.querySelectorAll("button[id*='letra_'");
		var posicaoAleatoria, direction;
		var inserida = false;
		const distribui = (i) => {
			posicaoAleatoria = Math.floor(Math.random() * letrasDoPainel.length);
			if(this.verificaSeCabePalavra(this.palavrasEscolhidas[i],direction,letrasDoPainel[posicaoAleatoria].getAttribute("coluna"),letrasDoPainel[posicaoAleatoria].getAttribute("linha")) == true){
				if(this.verificaLetraUtilizada(direction,this.palavrasEscolhidas[i],letrasDoPainel[posicaoAleatoria].getAttribute("id")) == false){
					this.inserePalavra(direction,this.palavrasEscolhidas[i],letrasDoPainel[posicaoAleatoria].getAttribute("id"));
					inserida = true;
				}	
			}
		}
		for(let i = 0; i < this.palavrasEscolhidas.length;i++){
			inserida = false;
			while (inserida == false){								
				var direcaoAleatoria = Math.floor(Math.random() * this.direcoes.length);				
				direction = this.direcoes[direcaoAleatoria];
				distribui(i);
			}
		}	

	}
}

//Fim classe

var novoJogo;
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

