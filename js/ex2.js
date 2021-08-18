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