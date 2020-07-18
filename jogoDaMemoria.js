class jogoDaMemoria{
    constructor(){
        this.dificuldades = {
        facil:{linhas:3,colunas:2,tempo:30000},
        medio:{linhas:3,colunas:4,tempo:120000},
        dificil:{linhas:4,colunas:6,tempo:180000},
        }       
        this.imagens = {
        animais:["borboleta","canguru","coelho","esquilo","galo","gato","girafa","leao","lobo","pantera","pombo","urso"],
        paisagens:["amanhecer","arvore","cais","castelo","dunas","estrada","floresta","noite","outono","pedras","praia","trem"],
        frutas:["banana","carambola","cereja","laranja","limao","maca","manga","maracuja","morango","pera","pessego","uva"]
        }
        this.imagensEscolhidas = [];
        this.primeiraImagemClicada ="";
        this.segundaImagemClicada ="";
        this.erros;
        this.acertos;
        this.tempo;
        this.intervalo;
        }
    
        //Na página do jogo tem input radios com 3 dificuldades: facil, medio e dificil.
        //A função abaixo retorna o atributo "dificuldade" do radio que estiver elecionado
        obtemDificuldade(){
            var opcoes = document.querySelectorAll("[name='dificuldade']");
            for(let i = 0; i < opcoes.length;i++){
                if(opcoes[i].checked == true){
                    return opcoes[i].getAttribute("id");
                }
            }
        }

        //Função parecida com a acima, só que pra obter o tipo de imagem que será carregada: animais,
        //paisagens ou frutas
        obtemTema(){
            var opcoes = document.querySelectorAll("[name='tema']");
            for(let i = 0; i < opcoes.length;i++){
                if(opcoes[i].checked == true){
                    return opcoes[i].getAttribute("id");
                }
            }
        }

        novaRodada(inicio){
            document.getElementById("contagemRegressiva").setAttribute("class","tempoNormal");
            document.getElementById("erros").textContent = 0;
            document.getElementById("acertos").textContent = 0;   
            const rodada = () =>{
                this.erros = 0;
                this.acertos = 0; 
                this.tempo = eval("this.dificuldades." + this.obtemDificuldade() + ".tempo");
                this.iniciaContagemRegressiva();
                this.criaElementosImg();
                this.escolheImagens(this.obtemTema(), eval("this.dificuldades." + this.obtemDificuldade() + ".linhas"), eval("this.dificuldades." + this.obtemDificuldade() + ".colunas"));
                this.distribuiImagens(this.obtemTema());
            }
            if(inicio == false){
                var mensagem = (this.erros < this.acertos) ? "Parabéns. Deseja iniciar novo jogo?" : "Que pena. Tempo esgotado. Deseja iniciar novo jogo?";
                var resposta = confirm(mensagem);
                let resp = (resposta == true) ? rodada() : this.desabilitaClickImgs();
            }else{
                rodada();
            }
        }

        //A função abaixo cria elementos img de acordo com a dificuldade escolhida pelo usuário:
        //Se facil, vai obter do objeto dificuldades, subObjeto "facil" e por sua vez as chaves 
        //linhas e colunas que vão determinar a quantidade de linhas e colunas em que as imagens
        //serão dispostas na página
            criaElementosImg(){
            var dificuldade = this.obtemDificuldade();
            var qtddLinhas = eval("this.dificuldades." + dificuldade + ".linhas");
            var qtddColunas = eval("this.dificuldades." + dificuldade + ".colunas");
            var tema = this.obtemTema(); 
            var contadorDeImagens = 1;
            document.querySelector("#painelJogo").innerHTML = "";     
                for(let i = 0;i < qtddLinhas;i++){
                    var linha = document.createElement("div");
                    for(let i = 0;i < qtddColunas;i++){
                    var imagem = document.createElement("img");
                    imagem.setAttribute("src","imagens/padrao.jpg");
                    imagem.setAttribute("class",dificuldade);
                    imagem.setAttribute("tipo","painelJogo");
                    imagem.setAttribute("id","imagem_" + contadorDeImagens);
                    imagem.setAttribute("onclick","novoJogo.exibeImagem(this),novoJogo.verificaImagens()");
                    linha.appendChild(imagem);
                    contadorDeImagens++;
                    }
                    document.querySelector("#painelJogo").appendChild(linha);                    
                }
            }

            //Essa função escolhe imagens aleatoriamente de acordo com a dificuldade e tema escolhido
            //pelo usuário. É importante obter a quantidade de linhas e colunas de cada dificuldade, pois
            //é através delas que obteremos a quantidade de imagens que deverão ser escolhidas.
            //A fórmula para obter a quantidade de imagens é (linha * colunas / 2).
            escolheImagens(tema,qtddLinhas, qtddColunas){
                var indiceAleatorio;
                var qtddImagens = qtddLinhas * qtddColunas / 2;
                this.imagensEscolhidas = [];
                for(let i = 0; i < qtddImagens;i++){
                    indiceAleatorio = Math.floor(Math.random() * eval("this.imagens." + tema + ".length"));
                    if(this.imagensEscolhidas.includes(eval("this.imagens." + tema + "[" +  i + "]")) == false){
                        this.imagensEscolhidas.push(eval("this.imagens." + tema + "[" +  i + "]"));
                    }
                }
            }
            //distribuiImagens(tema) adiciona o atributo "srcSegundario" a cada imagem gerada e adicionada
            //a página do jogo através do método criaElementosImg(). Esse novo atributo guarda o caminha da
            // imagem que vai aparecer para o usuário quando clicar no element img.
            //Essa função obtem os "id's" de todos os img's da página (mais necessariamente da div 
            //"painelJogo") e os embaralha. Em seguida para garantir que as imagens estejam dispostas
            // de forma aletória no jogo já que as imagens escolhidas, são 
            //1 iguais para cada 2 img's, assim, se não for embaralhados o "id's", as imagens serão 
            //distribuídas sequencialmente.
            distribuiImagens(tema){
                var elementosImg = document.querySelectorAll("[tipo='painelJogo'");
                var elementosEmbaralhados = [];
                var indiceAleatorio;
                var verificador = 0;
                while(verificador < elementosImg.length){
                    indiceAleatorio = Math.floor(Math.random() * elementosImg.length);
                    if(elementosEmbaralhados.includes(elementosImg[indiceAleatorio].getAttribute("id")) == false){
                        elementosEmbaralhados.push(elementosImg[indiceAleatorio].getAttribute("id"));
                        verificador++;
                    }                    
                }
                var k = 0;
                for(let i = 0; i < this.imagensEscolhidas.length;i++){
                    while(k < elementosEmbaralhados.length){
                        document.querySelector("#"+elementosEmbaralhados[k]).setAttribute("srcSecundario","imagens/" + tema + "/" + this.imagensEscolhidas[i] + ".jpg");
                        document.querySelector("#"+elementosEmbaralhados[k+1]).setAttribute("srcSecundario","imagens/" + tema  + "/" +  this.imagensEscolhidas[i] + ".jpg");
                        k+=2;
                        break;
                }
            }
        }

            exibeImagem(btn){
              btn.setAttribute("src",btn.getAttribute("srcSecundario"));
              if(this.primeiraImagemClicada == ""){
                this.primeiraImagemClicada = btn.getAttribute("id");
              }else{
                this.segundaImagemClicada = btn.getAttribute("id");
              }  
            }
        
        //A função básica desse método é verificar se as imagens clicadas pelo usuário são iguais ou não.
        //O método abaixo usa a função setTimeout() para evitar que ao clicar na segunda img, tendo essa
        //a imagem diferente da primeira, ambas voltem a imagem padrão logo em seguida, se assim fosse,
        //o usuário não teria tempo de ver que escolheu imagens diferentes.
        verificaImagens(){            
            if(this.primeiraImagemClicada != "" && this.segundaImagemClicada != ""){
                this.desabilitaClickImgs();
                setTimeout(() =>{
                        if(document.getElementById(this.primeiraImagemClicada).getAttribute("src") != document.getElementById(this.segundaImagemClicada).getAttribute("src")){
                            document.getElementById(this.primeiraImagemClicada).setAttribute("src","imagens/padrao.jpg");
                            document.getElementById(this.segundaImagemClicada).setAttribute("src","imagens/padrao.jpg");
                            this.erros ++;
                        }else{
                            document.getElementById(this.primeiraImagemClicada).onclick = "";
                            document.getElementById(this.segundaImagemClicada).onclick = ""; 
                            this.acertos ++;
                        }
                    this.primeiraImagemClicada = "";
                    this.segundaImagemClicada = "";
                    document.getElementById("erros").textContent = this.erros;
                    document.getElementById("acertos").textContent = this.acertos;
                    this.habitaClickImgs();
                    this.verificaJogo();
                },1500);
            }        
        }
        //Método que limpar argumento onclick de todas as img's. 
        //Isso é necessário pra evitar o usuário clique em uma 3º imagem durante a verificação das imagens
        //realizada pelo método verificaImagens(). Se o usuário conseguir isso, vai gerar comportamento
        //inadequado para o fluxo normal do jogo.
        desabilitaClickImgs(){
        var imgs = document.querySelectorAll("[tipo='painelJogo'");
        for(let i = 0; i < imgs.length;i++){
            document.getElementById(imgs[i].getAttribute("id")).setAttribute("onclick","");
        }
        }

        habitaClickImgs(){
        var imgs = document.querySelectorAll("[tipo='painelJogo'");
        for(let i = 0; i < imgs.length;i++){
            document.getElementById(imgs[i].getAttribute("id")).setAttribute("onclick","novoJogo.exibeImagem(this),novoJogo.verificaImagens()");
        }
        }
     
    iniciaContagemRegressiva(){
        var tempoInicial = this.tempo;
        this.intervalo = setInterval(() => {
            this.tempo -= 1000;
            if(this.tempo == tempoInicial / 2){
                document.getElementById("contagemRegressiva").setAttribute("class","tempoAcabando piscarTexto");
            }else if(this.tempo == 0){
                clearInterval(this.intervalo);
                this.novaRodada(false);
            }else if(this.erros < this.acertos){
                clearInterval(this.intervalo);  
            }
            document.getElementById("contagemRegressiva").textContent = msToTime(this.tempo);          
        }, 1000);
        
    } 

    verificaJogo(){
        if(this.acertos == this.imagensEscolhidas.length){
            this.novaRodada(false);
        }
    }
}

var novoJogo;


   
