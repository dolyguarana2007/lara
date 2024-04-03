const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
}    
    }
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2029-10-10-T00:00:00");
const tempoObjetivo1 = new Date("2025-01-12-T00:00:00");
const tempoObjetivo1 = new Date("2029-10-10-T00:00:00");
const tempoObjetivo1 = new Date("2029-10-10-T00:00:00");
let tempoAtual= new Date();

contadores[0].textContent = yempoObjetivo1-tempoAtual;
