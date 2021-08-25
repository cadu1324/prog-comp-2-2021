let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    do{
        opcao = Number(prompt('Informe: \n1- Cadastrar vendedor \n2- Cadastrar venda \n3- Sair'))
        switch(opcao){
            case 1:
                let objeto = {
                    codigo: Number(prompt('Informe código')),
                    nome: prompt('Informe o nome'),
                    rg: Number(prompt('Informe rg'))
                }
                let achou = false 
                for(let i = 0; i < vetVendedores.length; i++){

                    if(vetVendedores[i].codigo == objeto.codigo){
                        achou = true 
                    }
                    if(achou == true){
                        vetVendedores.push(objeto)
                        alert('Vendedor criado com sucesso')
                    }else{
                        alert('Vendedor ja cadastrado ')
                    }
                }
                console.log(vetVendedores)
                break
            case 2:
                let vendas = {
                    codigo: Number(prompt('Informe o código das vendas')),
                    mes: Number(prompt('Insira o mês da venda')),
                    valor: Number(prompt('Insira o valor da venda'))
                }
                let achou = false 
                for(let i = 0; i < vetVendas; i++){
                    if(vetVendas[i].cdigo == vendas.codigo &&vetVendas[i].mes == vendas.mes){
                        achou = true 
                    }
                    if(!achou){
                        vetVendas.push(vendas)
                    }else{
                        alert('Já existe vendas deste vendedor nesse mês')
                    }
                }
                break
            case 3:
                alert('O programa será encerrado')
                break
            default:
                alert('Opção inválida')
        }
    }while(opcao != 3)
}