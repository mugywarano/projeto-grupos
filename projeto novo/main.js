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
        },
        {
            texto: "B) leg press",
            
        },
    ]
},

{
    enunciado: "Para um treino equilibrado de pernas, qual é a melhor abordagem?",
    alternativas:[
        {
            texto: "A)Focar apenas em exercícios de força, como levantamento terra",
           
        },
        {
            texto: "B) Combinar exercícios de força com exercícios de isolamento, como extensões de perna",
           
        },
    ]
},

{
    enunciado: "Qual é a principal vantagem de incluir o leg press na rotina de treino de pernas?",
    alternativas:[
        {
            texto: "A) Trabalha principalmente os músculos da panturrilha"
            
            
           
        },
        {
            texto: "B) Permite carregar mais peso e aumentar a força dos quadríceps e glúteos",
           
        },
    ]
},

{
    enunciado: "Qual é o benefício de realizar exercícios de alongamento antes do treino de pernas?",
    alternativas:[
        {
            texto: "A) Aumenta a flexibilidade e reduz o risco de lesões",
            
        },
        {
            texto: "B) Aumenta a massa muscular diretamente",
          
        },
    ]
},

]
