const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for(let i=0;i <botoes.length;i++)

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
const tempos = [tempoObjetivo1];

const tempos = [tempoObjetivo1,tempoObjetivo2]

fuction calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos =Match.floor(segundos / 60);
    let horas =Match.floor(horas / 24);

    segundos %= 60;
    minutos %60;
    horas %24;
if(tempoFinal>0){
    return dias + "dias " + horas + minutos + "minutos " + segundos ";
}
function atualizaCrometro(){
    for(let i=0; i<contadores.lenght; i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}
function comecaCronometro(){
    atualizaCronometro()
    setInterval(atualizaCronometro1000);
}
comecaCronometro();


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
