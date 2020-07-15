class jogoDaForca{

    constructor(){
        this.palavrasMaisDicas = [{palavra:"SUPLÍCIO",dica:"PROIBIDO NO BRASIL."},{palavra:"BARRIGA DE ALUGUEL",dica:"PROIBIDO NO BRASIL."},{palavra:"CARA DE PAU",dica:"CANALHA"},{palavra:"AMOR",dica:"SENTIMENTO"},{palavra:"PANELA",dica:"UTENSÍLIO"},{palavra:"BORBOLETA",dica:"INSETO"},{palavra:"PORTARIA",dica:"TIPO DE RECEPÇÃO"},{palavra:"RODOVIÁRIA",dica:"ÔNIBUS"},{palavra:"CAFÉ DA MANHÃ",dica:"REFEIÇÃO"},{palavra:"CABELEIREIRO",dica:"PROFISSÃO"},{palavra:"PÉRSIA",dica:"PÁIS"},{palavra:"CADERNO",dica:"ESCOLA"},{palavra:"FACULDADE",dica:"ESTUDOS"},{palavra:"DICIONÁRIO",dica:"PALAVRAS"},{palavra:"CAMINHONETE",dica:"VEÍCULO"},{palavra:"SOLSTÍCIO",dica:"ASTRONOMIA"},{palavra:"PÉ-DE-MOLEQUE",dica:"DOCE"},{palavra:"BACALHAU",dica:"PEIXE"},{palavra:"MOTORISTA",dica:"CAMINHÃO"},{palavra:"FUTEBOL",dica:"BOLA"},{palavra:"TALHERES",dica:"COZINHA"},{palavra:"PROFESSOR",dica:"ESCOLA"},{palavra:"ARTISTA",dica:"TELEVISÃO"},{palavra:"CACHORRO",dica:"ANIMAL"},{palavra:"PERNAMBUCO",dica:"BRASIL"},{palavra:"DOCUMENTÁRIO",dica:"FILME"},{palavra:"ALMANQUE",dica:"REVISTA"},{palavra:"LINGUAGEM",dica:"FALAR"}];
        this.palavraEscolhida;
        this.dicaEscolhida;
        this.palavraFormada=[];
        this.erros = 0;
        this.letrasJaEscolhidas = []; 
        this.letrasDoTeclado = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","Ã","Â","Ê","É","Í","Ó","Õ","Ô","Ú"];    
        this.criaTeclado();    
    }
    criaTeclado(){
        let letra = 0;
        var painelDeLetras = document.createElement("div");
        for (let lin = 1; lin <= 4; lin++) {
            var linhaDeLetras = document.createElement("div");
           loopCol: for (let col = 1; col <= 9; col++) {
                var colunaDeLetras = document.createElement("span");
                let botao = document.createElement("button");
                botao.textContent = this.letrasDoTeclado[(letra)];
                botao.setAttribute("id","letra_".concat(this.letrasDoTeclado[(letra)]));
                botao.setAttribute("letra",this.letrasDoTeclado[(letra)]);
                botao.setAttribute("class","letraPadrao");
                botao.setAttribute("onclick","novoJogo.verificaLetra(this.getAttribute('letra'));novoJogo.exibePalavraFormada();this.setAttribute('disabled','true');");
                colunaDeLetras.appendChild(botao);
                linhaDeLetras.appendChild(colunaDeLetras);
                letra ++; 
                switch(letra){
                    case 36:
                        break loopCol;
                    break;
                }               
            }
            painelDeLetras.appendChild(linhaDeLetras);
                       
        }
        document.getElementById("teclado").appendChild(painelDeLetras);
    }


    
    escolhePalavra(){
        var indiceAleatorio = Math.floor(Math.random() * this.palavrasMaisDicas.length);
        this.palavraEscolhida = this.palavrasMaisDicas[indiceAleatorio].palavra.split("");
        this.dicaEscolhida = this.palavrasMaisDicas[indiceAleatorio].dica;    
        console.log(this.palavraEscolhida); 
        for(let i = 0;i<this.palavraEscolhida.length;i++){
            if(this.palavraEscolhida[i] == ' '){
                this.palavraFormada[i] = " ";
            }else{
                this.palavraFormada[i] = "_";  
            }
                
        }
        console.log(this.palavraFormada)  
        document.getElementById("dica").textContent = this.dicaEscolhida;
        this.exibePalavraFormada();
     }

     exibePalavraFormada(){
        document.getElementById("plvrFormada").textContent = "";
        this.palavraFormada.forEach(element => {
            document.getElementById("plvrFormada").innerHTML += "<span style='margin-left:5px;margin-right:5px'>" + element + "</span>";
        });        
    }

    verificaLetra(letra){
        var verificador = false;
        for(let i = 0;i<this.palavraEscolhida.length;i++){
            if(this.palavraEscolhida[i] == letra){
                this.palavraFormada[i] = letra;
                verificador = true;
            }
        }


        if(verificador == false){
            document.getElementById("forca").setAttribute("src","imagens\\forca_".concat(++this.erros).concat(".jpg"));
        }
        this.letrasJaEscolhidas.push(letra);
        document.getElementById("letrasJaEscolhidas").textContent = this.letrasJaEscolhidas;
        this.verificaPalavra();
        this.verificaErros();
        
    }

    verificaErros(){
        if(this.erros == 7){
            var resposta = confirm("Chances esgotadas. A palavra correta era: ".concat(replace(this.palavraEscolhida,",","")).concat("\n").concat("Deseja iniciar novo jogo?"));
            if (resposta == true){
                novaRodada();
            }else{
                document.getElementById("teclado").style.display = 'none';
            }
            erros = 0;
        }
    }

    verificaPalavra(){
        if(this.palavraFormada.toString() == this.palavraEscolhida.toString()){
            var resposta = confirm("Parabéns! Você descobriu a palavra : ".concat(replace(this.palavraEscolhida,",","")).concat("\n").concat("Deseja iniciar novo jogo?"));
            if (resposta == true){
                novaRodada();
            }else{
                document.getElementById("teclado").style.display = 'none';
            }

        }
    }



    ativaDesativaDica(chkbx){
        
        if(chkbx.checked == true){
            document.getElementById("painelDica").style.display = "none";
            document.getElementById("labelDica").textContent = "Ativar Dica";
        }else{
            document.getElementById("painelDica").style.display = "inline";
            document.getElementById("labelDica").textContent = "Desat. Dica";
        }
    }


    }

    var novoJogo;
    function novaRodada(){
        document.getElementById("teclado").style.display = 'block';
        document.getElementById("forca").setAttribute("src","imagens\\forca_0".concat(".jpg"));
        document.getElementById("teclado").textContent = "";
        document.getElementById("letrasJaEscolhidas").textContent = "";
        novoJogo = new jogoDaForca();
        novoJogo.escolhePalavra();
    }