let jogo1 = new Object()
jogo1.Nome = "Grand Theft Auto San Andreas"
jogo1.Genero = "Mundo Aberto"
jogo1.Ano = 2004

console.log(jogo1)

let jogo2 = new Object()
jogo2.Nome = "Resident Evil 4"
jogo2.Genero = "Ação, Horror"
jogo2.Ano = 2004

console.log(jogo2)

let jogo3 = new Object()
jogo3.Nome = "Left 4 Dead 2"
jogo3.Genero = "Horror"
jogo3.Ano = 2008

console.log(jogo3)

let jogo4 = {
    Nome: "The Last of us",
    Genero: "Horror",
    Ano: 2013,
}

console.log(jogo4)

let vetores = []

for(let i=0;i<3;i++){
    let objeto = {
        nome: prompt('Informe o nome do produto'),
        qtde: Number(prompt('Informe a quantidade do produto')),
        valor: Number(prompt('Informe o preço do produto'))
    }
    vetores.push(objeto)
}
let soma

for(let i=0;i<3;i++){
    soma = soma+vetores[i].valor
}

console.log(soma/4)