Algoritmo "aula2exer3"
// Disciplina   : [Linguagem e L?gica de Programa??o]
// Professor   : Antonio Carlos Nicolodi 
// Descri??o   : Aqui voc? descreve o que o programa faz! (fun??o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 18/10/2022
Var
nome: caracter
idade: inteiro

discplina: caracter
nota_um: inteiro
nota_dois: inteiro
nota_tres: inteiro
nota_quatro: inteiro
media: real
Inicio

escreva("Qual seu nome ? ")
leia(nome)

escreva ("Qual sua idade ? ")
leia(idade)

escreva ("Escolha uma disciplina Matem?tica,Portugu?s etcc. ? ")
leia(discplina)

escreva("primeira nota ? ")
leia(nota_um)

escreva("segunda nota ? ")
leia(nota_dois)

escreva("terceira nota ? ")
leia(nota_tres)

escreva("quarta nota ? ")
leia(nota_quatro)

media <- (nota_um + nota_dois + nota_tres + nota_quatro) / 4

se media >= 7 entao
escreva ("Aprovado !")

fimse
Fimalgoritmo