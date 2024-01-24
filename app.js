alert("Boas vindas ao jogo do Número Secreto.");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Digite um número entre 1 e 10");
    if (chute == numeroSecreto ) {
        alert(`Parabéns! Você descobriu que ${numeroSecreto} é o número secreto após ${tentativas} tentativas.`);
    } else {
        if (chute < numeroSecreto) {
          alert(`O número secreto é maior que ${chute}.`);  
        } else {
            alert(`O número secreto é menor que ${chute}.`);
        }
      tentativas++;
    }
}

