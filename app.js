alert("Boas vindas ao jogo do Número Secreto.");
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random()*numeroMax + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMax}`);
    if (chute == numeroSecreto ) {
        break;
    } else {
        if (chute < numeroSecreto) {
          alert(`O número secreto é maior que ${chute}.`);  
        } else {
            alert(`O número secreto é menor que ${chute}.`);
        }
      tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você descobriu que ${numeroSecreto} é o número secreto após ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1) {
//   alert(`Parabéns! Você descobriu que ${numeroSecreto} é o número secreto após ${tentativas} tentativas.`);
// }    else{
//   alert(`Parabéns! Você descobriu que ${numeroSecreto} é o número secreto após ${tentativas} tentativa.`);
// }
