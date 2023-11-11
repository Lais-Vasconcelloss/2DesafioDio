//variáveis
let NomedoHeroi= "Orion";
let Vitorias= 25;
let Derrotas= 5;
let LeveldoOrion= 900
let SaldoRankeadas = 25 - 5; // SaldoRankeadas seria 20

// Estruturas de decisão

if(Vitorias < 10){
      LeveldoOrion= "Ferro";
}

if(Vitorias >= 11 && Vitorias <= 20) {
        LeveldoOrion= "Bronze";
}

if(Vitorias >= 21 && Vitorias <= 50){
        LeveldoOrion= "Prata";
}

if(Vitorias >= 81 && Vitorias >= 90){
        LeveldoOrion= "Diamante";
}
if(Vitorias >= 101){
   LeveldoOrion=  "Imortal";
}


console.log(`O Herói ${Orion} tem o saldo de ${20}, está no nível ${Bronze}`)