const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual exercício é mais eficaz para trabalhar os músculos quadríceps?",
    alternativas:[
        {
            texto: "A) Agachamento",
            afirmacao: "Afirmação 1a alternativa"
        },
        {
            texto: "B) leg press",
            afirmacao: "Afirmação 2a alternativa"
           
        },
    ]
},

{
    enunciado: "Para um treino equilibrado de pernas, qual é a melhor abordagem?",
    alternativas:[
        {
            texto: "A)Focar apenas em exercícios de força, como levantamento terra",
            afirmacao: "Afirmação 1a alternativa"
           
        },
        {
            texto: "B) Combinar exercícios de força com exercícios de isolamento, como extensões de perna",
            afirmacao: "Afirmação 2a alternativa"
           
        },
    ]
},

{
    enunciado: "Qual é a principal vantagem de incluir o leg press na rotina de treino de pernas?",
    alternativas:[
        {
            texto: "A) Trabalha principalmente os músculos da panturrilha",
            afirmacao: "Afirmação 1a alternativa"          
           
        },
        {
            texto: "B) Permite carregar mais peso e aumentar a força dos quadríceps e glúteos",
            afirmacao: "Afirmação 2a alternativa"
           
        },
    ]
},

{
    enunciado: "Qual é o benefício de realizar exercícios de alongamento antes do treino de pernas?",
    alternativas:[
        {
            texto: "A) Aumenta a flexibilidade e reduz o risco de lesões",
            afirmacao: "Afirmação 1a alternativa"
           
        },
        {
            texto: "B) Aumenta a massa muscular diretamente",
            afirmacao: "Afirmação 2a alternativa"
         
        },
    ]
},

]

let atual = 0;
let perguntaAtual;
function mostraPergunta(){
    caixaAlternativas.textContent="";
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();{


}
