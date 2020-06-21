class jogoCacaPalavras{
	constructor(){	
	this.letras = ["A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.iniciaPalavra = false;
	this.idsBotoesAtivados = [];
	this.letrasAtivadas = [];
	this.palavras = ['CACHORRO' ,'OCEANO' ,'PARIS' ,'CAMISA' ,'PERNETA' ,'CONTAGEM' ,'TELEFONE' ,'TELEVISÃO' ,'COMPUTADOR' ,'TECLADO' ,'SALGADO' ,'JANELA' ,'CANTOR' ,'CABELO' ,'ENXADA' ,'ONIBUS' ,'MONITOR' ,'CARROCERIA' ,'CARRETA' ,'TUBULAÇÃO' ,'MESÁRIO' ,'SUJEIRA' ,'RALADOR' ,'TABOLEIRO' ,'BICOITO' ,'ANELAR' ,'MANICURE' ,'CHINELO' ,'CALÇADO' ,'PIPOQUEIRA' ,'BONÉ' ,'MODEM' ,'CANECA' ,'COLHER' ,'XÍCARA' ,'BORBOLETA' ,'VENTILADOR' ,'VENTO' ,'SOPRAR' ,'CORPO' ,'CELULAR' ,'SMARTPHONE' ,'TELEFONIA' ,'OPERADORA' ,'PERCURSO' ,'FLORES' ,'FLORESTA' ,'CARPINTEIRO' ,'MOTORISTA' ,'CHUVA' ,'SOLEIRA' ,'PROGRAMADOR' ,'PROSTUTUTA' ,'COMPARAR' ,'COMPRAR' ,'DEDO' ,'MÃO' ,'PERNAS' ,'BRAÇOS' ,'CABEÇA' ,'OLHOS' ,'ORELHA' ,'NARIZ' ,'BOCA' ,'BOCHECHA' ,'CORAÇÃO' ,'FÍGADO' ,'ESTÔMAGO' ,'GOELA' ,'GARGANTA' ,'QUEIXO' ,'DENTE' ,'LÍNGUA' ,'UNHA' ,'TORNOZELO' ,'CANCANHAR' ,'JOELHO' ,'PELE' ,'OSSO' ,'RIM' ,'BEXIGA' ,'PÊNIS' ,'VAGINA' ,'ESÔFAGO' ,'FARINGE' ,'CÉREBRO' ,'PINTOR' ,'SECRETÁRIA' ,'SORVETE' ,'COBRADOR' ,'ATENDENTE' ,'ASSISTENTE' ,'PROFESSOR' ,'TAXISTA' ,'AGRÔNOMO' ,'PEDAGOGO' ,'GEÓGRAFO' ,'HISTORIADOR' ,'LINGUISTA' ,'LETRISTA' ,'GERENTE' ,'LÍDER' ,'DIRETOR' ,'SERVIDOR' ,'AUXILIAR' ,'SENADOR' ,'PREFEITO' ,'GOVERNADOR' ,'PRESIDENTE' ,'DEPUTADO' ,'SUPLENTE' ,'VICE' ,'ARROZ' ,'FEIJÃO' ,'MACARRÃO' ,'FEIJOADA' ,'SUCO' ,'VERDURA' ,'FRUTA' ,'PÃO' ,'SABONETE' ,'CEBOLA' ,'ALHO' ,'JILÓ' ,'ABÓBORA' ,'MANDIOCA' ,'AIPÍM' ,'MACAXEIRA' ,'GERIMUM' ,'MEXIRICA' ,'BERGAMOTA' ,'LARANJA' ,'LIMÃO' ,'MARACUJÁ' ,'MORANGO' ,'ALFACE' ,'COENTRO' ,'SALSINHA' ,'MANGA' ,'GUARANÁ' ,'REFRIGERANTE' ,'SUSPIRO' ,'BOLO' ,'BOLACHA' ,'EXTRATO' ,'TOMATE' ,'CENTRAL' ,'VASO' ,'GATO' ,'CADELA' ,'SOFÁ' ,'ARMÁRIO' ,'CAMA' ,'COLCHÃO' ,'CADEIRA' ,'BANCO' ,'DINHEIRO' ,'ALMOFADA' ,'SOFISTICADO' ,'CHÃO' ,'CÉU' ,'LUA' ,'SOL' ,'ESCOVA' ,'PORTA' ,'PORTAL' ,'CHAVE' ,'CADEADO' ,'CHUVEIRO' ,'BANHEIRO' ,'QUARTO' ,'SALA' ,'COZINHA' ,'VARANDA' ,'ÁREA' ,'GARAGEM' ,'PORTÃO' ,'PISCINA' ,'LAZER' ,'CHURRASQUEIRA' ,'PRISILHA' ,'LUZ' ,'LÂMPADA' ,'LAMPIÃO' ,'CANDEIA' ,'TESOURA' ,'FACA' ,'PRATO' ,'COPO' ,'TIGELA' ,'VASÍLHA' ,'PANELA' ,'TAMPA' ,'CALDEIRÃO' ,'ESPELHO' ,'LAVATÓRIO' ,'SHAMPOO' ,'HIDRATANTE' ,'CONDICIONADOR' ,'BATOM' ,'LÁPÍS' ,'CANETA' ,'CANELA' ,'CRAVO' ,'ROSA' ,'CAMPO' ,'ÁGUA' ,'FOGO' ,'TERRA' ,'ESPÍRITO' ,'PENTAGRAMA' ,'RELIGIÃO' ,'SATANÁS' ,'LÚCIFER' ,'LILITH' ,'BAPHOMET' ,'CANDOMBLÉ' ,'IGREJA' ,'TERREIRO' ,'EVANGÉLICO' ,'CATÓLICO' ,'CRISTÃO' ,'PROTESTANTE' ,'CERVEJA' ,'JUDEU' ,'MULÇUMANO' ,'BUDISTA' ,'TERRAPLANISTA' ,'ESPÍRITA' ,'KARDECISMO' ,'CATEQUISMO' ,'EXTREMO' ,'SUGAR' ,'BEIJAR' ,'AMAR' ,'SOBREVIVER' ,'QUERER' ,'DESEJAR' ,'FELICIDADE' ,'ALEGRIA' ,'FORTUNA' ,'BELEZA' ,'BONITO' ,'PRAZER' ,'FOGÃO' ,'GELADEIRA' ,'GARRAFA' ,'TAÇA' ,'ESPETO' ,'CHURRASCO' ,'GARÇOM' ,'CAIXA' ,'CONTA' ,'MENU' ,'CARDÁPIO' ,'BANDEIJA' ,'GUARDANAPO' ,'ASSENTO' ,'ENTRADA' ,'CHURRAQUEIRO' ,'ROSCA' ,'LEITE' ,'CAFÉ' ,'QUEIJO' ,'TORTA' ,'MOUSSE' ,'DOCE' ,'LEITO' ,'APARTAMENTO' ,'ENFERMARIA' ,'MÉDICO' ,'DOENTE' ,'PACIENTE' ,'CIRURGIÃO' ,'PEDIATRA' ,'CLÍNICO' ,'CLÍNICA' ,'CANTINA' ,'CATRACA' ,'CRACHÁ' ,'IDENTIFICAÇÃO' ,'IDENTIDADE' ,'GUICHÊ' ,'FICHA' ,'PRONTUÁRIO' ,'CARTÃO' ,'ESPERAR' ,'INJEÇÃO' ,'VACINA' ,'REMÉDIO' ,'MEDICAMENTO' ,'EXAME' ,'ULTRASSOM' ,'FOTOGRAFIA' ,'PHOTOSHOP' ,'EXCEL' ,'PROCESSADOR' ,'ENERGIA' ,'TELA' ,'BOTÃO' ,'CALÇA' ,'SAPATO' ,'TÊNIS' ,'BLUSA' ,'CALCINHA' ,'CUECA' ,'BOTINA' ,'BOTIJÃO' ,'GRANIZO' ,'GRANITO' ,'PEDRA' ,'FILOSOFIA' ,'HISTÓRIA' ,'PORTUGUÊS' ,'CIÊNCIAS' ,'TECNOLOGIA' ,'SISTEMA' ,'DESENVOLVIMENTO' ,'SOCIAL' ,'SOCIOLOGIA' ,'MATEMÁTICA' ,'BIOLOGIA' ,'QUÍMICA' ,'ARTE' ,'RUA' ,'AVENIDA' ,'ALAMEDA' ,'ESTRADA' ,'RODOVIA' ,'TRECHO' ,'PEDAÇO' ,'FATIA' ,'GARFO' ,'RIACHO' ,'PORTEIRO' ,'PORTARIA' ,'HOTEL' ,'HOTELARIA' ,'MOSTEIRO' ,'PADRE' ,'PASTOR' ,'OVELHA' ,'CABRA' ,'CAVALO' ,'ÉGUA' ,'VACA' ,'PEIXE' ,'BALEIA' ,'CAMARÃO' ,'RATOEIRA' ,'LEÃO' ,'ÁRIES' ,'TOURO' ,'VIRGEM' ,'ESCORPÍÃO' ,'AQUÁRIO' ,'SARGITÁRIO' ,'CAPRICÓRNIO' ,'LIBRA' ,'CÂNCER' ,'SACERDOTE' ,'DISCÍPULO' ,'APRENDIZ' ,'BRASIL' ,'ARGENTINA' ,'PARAGUAI' ,'URUGUAI' ,'FRANÇA' ,'AMÉRICA' ,'ÁSIA' ,'EUROPA' ,'AUSTRÁLIA' ,'PAQUISTÃO' ,'ÁFRICA' ,'ITÁLIA' ,'CHINA' ,'JAPÃO' ,'IUGOSLÁVIA' ,'CANADÁ' ,'MÉXICO' ,'MÁXIMO' ,'MÍNIMO' ,'MÉDIO' ,'ANELAR' ,'POLEGAR' ,'INDICADOR' ,'SORVETE' ,'PARALELO' ,'IMPORTAR' ,'EXPORTAR' ,'AJUDA' ,'EXIBIR' ,'REVISÃO' ,'FÓRMULA' ,'INSERIR' ,'PÁGINA' ,'INICIAL' ,'ARQUIVO' ,'CÓDIGO' ,'SUPLEMENTO' ,'DISIGN' ,'CONTROLE' ,'EXECUTAR' ,'PROPRIEDADE' ,'PACOTE' ,'EXPANSÃO' ,'DADOS' ,'COMPARTILHAR' ,'PALAVRA' ,'JOGO' ,'GRAVAR' ,'MACRO' ,'VISUAL' ,'ACOMPANHAMENTO' ,'TRIÂNGULO' ,'COMÉRCIO' ,'PESSOA' ,'MARCA' ,'ETIQUETA' ,'DISQUETE' ,'COMPACTO' ,'FUNIL' ,'SETA' ,'QUADRADO' ,'OVAL' ,'BOLICHE' ,'CUBISMO' ,'SURREALISMO' ,'VANGUARDA' ,'LIVRO' ,'PRATELEIRA' ,'FOLHA' ,'PASTA' ,'NÚMERO' ,'FRAÇÃO' ,'DECIMAL' ,'GRANDEZA' ,'MATRIZ' ,'EQUAÇÃO' ,'CÁLCULO' ,'CALCULADORA' ,'TECLA' ,'VISOR' ,'VISÃO' ,'EXIBIÇÃO' ,'CINEMA' ,'SHOPPING' ,'LOJA' ,'MERCADO' ,'SUPERMERCADO' ,'HIPERMERCADO' ,'GASTAR' ,'VÍDEO' ,'IMAGEM' ,'SONORO' ,'SONEGAR' ,'IMPOSTOS' ,'CONCEIRA' ,'PELE' ,'BURACO' ,'POROS' ,'RUGAS' ,'SINAL' ,'MAIS' ,'MENOS' ,'DIVISÃO' ,'MULTIPLICAÇÃO' ,'SERIADO' ,'NOVELA' ,'FILME' ,'SÉRIE' ,'LONGO' ,'METRAGEM' ,'MEDIDA' ,'PROFUNDIDADE' ,'PROFUNDO' ,'FLAUTA' ,'VIOLÃO' ,'GUITARRA' ,'SOPRO' ,'SAXOFONE' ,'BATERIA' ,'BANDEIRA' ,'PANDEIRO' ,'BATATA' ,'REPOLHO' ,'COUVE' ,'RABANETE' ,'FESTA' ,'COMEMORAR' ,'PAPAI' ,'MAMÃE' ,'AMIGO' ,'AVÓ' ,'IRMÃO' ,'TITIA' ,'BOCA' ,'DENTE' ,'PADRINO' ,'REATAR'];
	this.palavrasEscolhidas = [];
	}

	distribuiLetras(){
		for (let i = 1;i<=400;i++){
			let numeroAleatorio = Math.floor(Math.random() * this.letras.length)			
			document.getElementById("letra"+i).textContent = this.letras[numeroAleatorio]
			document.getElementById("letra"+i).setAttribute("letra", this.letras[numeroAleatorio])
		}
	}

	
	formaPalavra(btn){
		if(this.iniciaPalavra == true){
			btn.setAttribute("style","width:30px;height:30px;background-color:blue");
			this.idsBotoesAtivados.push(btn.getAttribute("id"));
			this.letrasAtivadas .push(btn.getAttribute("letra"));
			this.exibePalavraFormada()
		}else{
			this.letrasAtivadas = [];
		}
		
	}


	iniciaFinalizaPalavra(btn){
		if(this.iniciaPalavra == false){
			this.iniciaPalavra = true;
			btn.setAttribute("style","width:30px;height:30px;background-color:blue");
			this.idsBotoesAtivados.push(btn.getAttribute("id"));
			this.letrasAtivadas.push(btn.getAttribute("letra"));
			this.exibePalavraFormada()
		}else{
			this.iniciaPalavra = false;
		}
	}

	exibePalavraFormada(){
		document.getElementById("palavraFormada").textContent = "";
		document.getElementById("palavraFormada").textContent = replace(this.letrasAtivadas,",","");
	}
	
	escolhePalavras(qtddPalavras){
		var aleatorio;
		this.palavrasEscolhidas = [];
		for(let i = 0;i<qtddPalavras;i++){
			aleatorio = Math.floor(Math.random() * (this.palavras.length - 1) + 1);
			this.palavrasEscolhidas.push(this.palavras[aleatorio]);
		}
		for(let i = 0;i < this.palavrasEscolhidas.length;i++){
			document.getElementById("painelPalavras").innerHTML += "<label name='" + this.palavrasEscolhidas[i] + "'> " + this.palavrasEscolhidas[i] + "</label><br>";
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
                botao.setAttribute("onclick","novoJogo.iniciaFinalizaPalavra(this)");
				botao.setAttribute("onmouseenter","novoJogo.formaPalavra(this)");
                tableColumn.appendChild(botao);
                tableRow.appendChild(tableColumn);  
                contadorDeBotoes++;               
            }
            tabela.appendChild(tableRow);
                       
        }
        document.getElementById("painelJogo").appendChild(tabela);
        }

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
