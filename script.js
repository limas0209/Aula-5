//substituir texto 

let texto="Estão chegando as provas"
console.log(texto.replace("provas", "avaliações"))

//fixar o valor

let num=223.456754
console.log(num.toFixed(3))

//caixa alert

//alert("Olá amigos")

//caixa de confirmação

//let teste=confirm("Você é um aluno ?")
//console.log("Resultado da caixa")

//caixa de prompt
/*
let texto1=prompt("Digite seu nome")
document.write("O nome dele é: ",texto1)
*/

//Praticando tomada de decisão if

if(20>10){
    document.write("Vinte é maior que dez")
} //se colocar ao contrario o texto não apareceria na tela

// if else
if(20<10){
    document.write("Vinte maior que dez")
}else{
    document.write("<br>Vinte menor que dez<br>")
}

// if else declarando uma variavel
/*
let numero=10

if(numero>20){
    document.write("Valor maior")
}else{
    document.write("<br>Valor menor<br>")
}

//let idade=10
/*
let idade=prompt("Digite sua idade: ")

if(idade<=12){
    document.write("<br>ELE É UMA CRIANÇA<br>")

}else if(idade<=17){
    document.write("<br>ELE É UM ADOLESCENTE<br>")

}else if(idade<=30){
    document.write("<br>ELE É UM JOVEM ADULTO<br>")

}else if(idade<=60){
    document.write("<br>UM ADULTO EXPERIENTE VULGO MADURO<br>")

}else{
    document.write("<br>VOCÊ É UM VELHO BROXA<br>")
}
//Quando tiver mais de dois termos, fazer cadeamento utilizando "else if"
*/


let idade1=prompt("Digite sua idade: ")
if(idade1<=15){
    document.write("<brVocê pode ir na matine<br>")
}else if(idade1<=23){
    document.write("<br>Voce pode curtir uma baladinha com drogas<br>")
}else if(idade1<=30){
    document.write("<br>Festa de terceira idade, sem drogas mas com cerveja<br>")
}else if(idade1<=60){
    document.write("<br>Fica em casa karai<br>")
}else{
    document.write("<br>Voce é um merda e não vai curtir sua velhice<br>")
}





