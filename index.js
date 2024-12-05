// Desafio: Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens:

// se XP for menor do que 1000 = Ferro 
// se XP for entre 1001 e 2000 = Bronze
// se XP for entre 2001 e 6000 = Prata
// se XP for entre 6001 e 7000 = Ouro
// se XP for entre 7001 e 8000 = Platina 
// se XP for entre 8001 e 9000 = Ascendente
// se XP for entre 9001 e 10000 = Imortal
// se XP for maior ou igual a 10001 = Radiante

// Saída: Exibir a mensagem: "O herói de nome *** está no nível de ***"

let nomeDoHeroi = "Zica"
let xpDoHeroi = 15000
let nivelDoHeroi 

if (xpDoHeroi <= 1000){
    nivelDoHeroi = "Ferro"
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
    nivelDoHeroi = "Bronze"
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 6000){
    nivelDoHeroi = "Prata"
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000){
    nivelDoHeroi = "Ouro"
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    nivelDoHeroi = "Platina"
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    nivelDoHeroi = "Ascendente"
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    nivelDoHeroi = "Imortal"
} else if (xpDoHeroi >= 10001){
    nivelDoHeroi = "Radiante"
}
    
console.log ("O herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)