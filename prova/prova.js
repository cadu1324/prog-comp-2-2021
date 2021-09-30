let verificacao = false
let vetorViagem = []
let somaPreco = 0
let principal = () => {
    let opcao
    let tipoViagem
    let paisViagem
    do {
        opcao = Number(prompt(`1-Cadastrar viagem \n2-Preço médio das viagens \n3-Todas as viagens de um tipo específico \n4.Menor preço de viagem no pais selecionado \n5-Fechar programa!`))
        switch(opcao){
            case 1:
                let viagem = {
                    codigo: Number(prompt(`Informe o código da viagem`)),
                    pais: prompt(`Informe o pais de destino`),
                    cidade: prompt(`Informe a cidade de destino`),
                    preco: Number(prompt(`Informe o preço da viagem`)),
                    tipo: prompt(`Informe o tipo da viagem`)
                }
                f1(viagem) 
                break
            case 2: 
                f2()
                break
            case 3:
                tipoViagem = prompt(`Informe um tipo de viagem`)
                f3(tipoViagem)
                break
            case 4: 
                paisViagem = prompt(`Informe o país da viagem`)
                f4(paisViagem)
                break
            case 5:
                alert('Programa finalizado!')
                break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5)
}

let f1 = (viagem) => {

    if(verificacao == false){
        vetorViagem.push(viagem)
    }else{
        for (let i1 = 0; i1 < vetorViagem.length; i1++) {
            
            if(vetorViagem[i1].codigo == viagem.codigo){
                    
                alert('Não foi possivel cadastrar a viagem, pois seu código ja foi utilizado!')
                break
            }else{
                vetorViagem.push(viagem)
                somaPreco = vetorViagem[i1] + somaPreco
                alert('Viagem cadastrada com sucesso!')
                break
            }
        }
    }
    verificacao = true
}
let f2 = () => {
    
    console.log(vetorViagem.length)
    if(verificacao == false){
        
        alert('Nenhuma viagem cadastrada')
    }else{
        alert(`A média de preço das viagens é: ${somaPreco/vetorViagem.length}`)
    }
}
let f3 = (tipoViagem) => {

    if(verificacao == false){
        
        alert('Nenhuma viagem cadastrada')
    }else{
        
        for (let index = 0; index < vetorViagem.length; index++) {
            
            if(vetorViagem[index].tipo == tipoViagem){
                alert(`\nCódigo da viagem: ${vetorViagem[index].codigo} \nPaís da viagem: ${vetorViagem[index].pais} \nCidade da viagem: ${vetorViagem[index].cidade} \nPreço da viagem: ${vetorViagem[index].preco} \nTipo da viagem: ${vetorViagem[index].tipo}\n\n`)
            }
        }
    }

}
let f4 = (paisViagem) => {

    if(verificacao == false){
        
        alert('Nenhuma viagem cadastrada')
    }else{
        
        let viagemBarata = vetorViagem.preco[0]

        for (let index = 0; index < vetorViagem.length; index++) {
            
            if(vetorViagem[index].pais == paisViagem){
                
                f5(vetorViagem[index].preco, viagemBarata)
            }
        }

        alert(`A viagem mais barata para o país ${paisViagem} é: ${viagemBarata}`)
    }
}

let f5 = (preco, viagemBarata) => {

    if(preco < viagemBarata){
       viagemBarata = preco
    }
}