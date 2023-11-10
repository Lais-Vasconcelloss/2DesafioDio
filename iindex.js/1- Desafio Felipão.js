// Variáveis
let nomeHeroi = "Orion";
let xpOrion = 7000;
let nivelHeroi;

// Estrutura de decisão
if (xpOrion < 1000) {
  nivelHeroi = "Ferro";
} else if (xpOrion <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpOrion <= 5000) {
  nivelHeroi = "Prata";
} else if (xpOrion <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpOrion <= 8000) {
  nivelHeroi = "Platina";
} else if (xpOrion <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpOrion <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}
// Exibição da mensagem
console.log(`O Herói de nome ${Orion} está no nível de ${Ouro}`);

