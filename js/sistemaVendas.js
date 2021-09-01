let vetvendedores = []
let op = Number(prompt(`Escolha a opção:\n1.Cadastrar vendedor\n2.Cadastrar venda\n3.Consultar as vendas do funcionário no mês\n4.Consultar total de vendas de um vendedor\n5.Mostrar o número do vendedor que mais vendeu no mês\n6.Mostrar o número do mês com mais vendas\n7.Finalzar programa`))
let vetvendas = []

while(op!=7){
    switch(op){
        case 1: let objeto = {
                    nome: prompt(`Insira o nome do vendedor`),
                    codigo: Number(prompt(`Inserir o código do vendedor`))
                }
                let achou = false
                for(let i=0;i<vetvendedores.length;i++){
                    if(objeto.codigo==vetvendedores[i].codigo){
                        achou = true
                    }
                }
                if(achou==false){
                    vetvendedores.push(objeto)
                }
                else{
                    alert(`Código ja existente`)
                }
                break
        case 2: let objeto1 = {
                    codigo: Number(prompt(`Informe o código do vendedor`)),
                    mes: Number(prompt(`Informe o mês das vendas`)),
                    valor: Number(prompt(`Informe o valor das vendas`))
                }
                let achou1 = false
                for(let i=0;i<vetvendas.length;i++){
                    if(vetvendas[i].mes==objeto1.mes && vetvendas[i].codigo==objeto1.codigo){
                        achou1=true
                    }
                }
                if(achou1==false){
                    vetvendas.push(objeto1)
                }
                else{
                    alert(`Não pode ser cadastrado`)
                }
                break
        case 3: let achou2 = false
                let procura = Number(prompt(`Insira o código do vendedor`))
                let prcorames = Number(prompt(`Insira o mês que deseja consultar`))
                for(let i=0;i<vetvendas.length;i++){
                    if(procura == vetvendas[i].codigo && prcorames == vetvendas[i].mes){
                        alert(`O vendedor ${vetvendedores[i].nome} fez ${vetvendas[i].valor}-vendas no mês-${vetvendas[i].mes}`)
                        achou2 = true
                    }
                }
                if(achou2 == false){
                    alert(`O vendedor não fez vendas neste mês`)
                }
                break
        case 4: let procura1 = Number(prompt(`Insira o código do vendedor`))
                let soma = 0 
                for(let i =0;i<vetvendas.length;i++){
                    if(vetvendas[i].codigo==procura1){
                        soma=vetvendas[i].valor+soma
                    }
                }
                if(soma>0){
                    alert(`O vendedor com código ${procura1} fez ${soma} vendas.`)
                }
                else{
                    alert(`O vendedor não existe ou não fez nenhuma venda`)
                }
                break
        case 5: let procurames1 = Number(prompt(`Insira o número do mês que deseja consultar`))
                let maior = 0
                let maiorv = 0
                for(let i=0;i<vetvendas.length;i++){
                    if(vetvendas[i].valor>maiorv && vetvendas[i].mes==procurames1){
                        maior=vetvendas[i].codigo
                        maiorv=vetvendas[i].valor
                    }
                }
                if(maior!=0)[
                    alert(`O vendedor com mais vendas no mês ${procurames1} é o com código ${maior}`)
                ]
                else{
                    alert(`Não foi realizado nenhuma venda no mês ${procurames1}`)
                }
                break
        case 6: let maiormes = 0
                let maior1 = 0 
                let aux = 0
                for(let i=0;i<vetvendas.length;i++){
                    maior1=0
                    for(let j=0;j<vetvendas.length;j++){
                        if(vetvendas[i].mes == vetvendas[j].mes){
                            maior1=vetvendas[j].valor+maior1
                        }
                    }
                    if(maior1>aux){
                        aux=maior1
                        maiormes=vetvendas[i].mes
                    }
                }
                if(maiormes!=0){
                    alert(`O mês com mais vendas é o ${maiormes}`)
                }
                else{
                    alert(`Nenhuma venda realizada`)
                }
                break
        default: alert(`Opção Invalida!`)
                break
    }
    op = Number(prompt(`Escolha a opção:\n1.Cadastrar vendedor\n2.Cadastrar venda\n3.Consultar as vendas do funcionário no mês\n4.Consultar total de vendas de um vendedor\n5.Mostrar o número do vendedor que mais vendeu no mês\n6.Mostrar o número do mês com mais vendas\n7.Finalzar programa`))
}