// let produtos = ["Arroz","Feijão","Batata Frita","Legumes","Carne Moida"];

// let contador = 0;
// while (contador < produtos.length){
//     console.log(contador)
//     console.log(produtos[contador])
//     //contador = contador + 1;
//     contador++;
// }


let nome = prompt("nome")
let telefone = prompt("telefone")
let senha = prompt("senha")

let contador = 0;
let filaDeEspera = {nome:[], telefone:[], senha:[]}

filaDeEspera.nome.push("")
filaDeEspera.telefone.push("")
filaDeEspera.senha.push("")

while (contador < filaDeEspera.length){
    console.log(contador)
     console.log(filaDeEspera[contador])
   contador++;
}