const gerenciaRedesSociais = () => {  
    
    let postsRedesSomaTotal = 0
    let redesSociais = []

    for(let i = 0; i < 3; i++){
        var objetoRede = {
            codigo: Number(prompt(`Insira o código da rede social`)),
            nome: prompt(`Insira o nome da rede social`),
            url: prompt(`Insira o link da rede social`)
        }
        redesSociais.push(objetoRede)
    }
   
    let usuario = []

    for(let i = 0; i < 3; i++){
        
        var objetoUsuario = {
            login: prompt(`Escreva seu login`),
            nome: prompt(`Insira seu nome`),
            codigoRedeSocial: Number(prompt(`Insira seu codigo de rede social`)),
            qtdePosts: Number(prompt(`Insira a quantidade de posts`))
        }
        
        let achou = false
        
        redesSociais[i].posts = 0
        
        for(let j = 0; j < 3; j++){
            if(redesSociais[j].codigo == objetoUsuario.codigoRedeSocial){
                redesSociais[j].posts = 0
                usuario.push(objetoUsuario)
                postsRedesSomaTotal = postsRedesSomaTotal + objetoUsuario.qtdePosts
                redesSociais[j].posts =  redesSociais[j].posts + objetoUsuario.qtdePosts
                achou = true 
                alert('Usuario inserido com sucesso')
            }
        }
        if(!achou){
            alert('Usuario nao inserido, pois rede social não existe')
        }
    }

    //Exercício 1 

    let nomeRedeSocial = prompt('Informe o nome de uma rede social')

    const qtdPostsRede = redesSociais.filter(post => post.nome == nomeRedeSocial)
    
    alert(`Exercício 1 \nO número de posts na rede social ${nomeRedeSocial} é ${qtdPostsRede[0].posts} posts`)

    //Exercício 2

    alert(`Exercício 2 \nO número da soma de posts de todas as redes é ${postsRedesSomaTotal} posts`)

    //Exercício 3

    let loginDeUsuario = prompt('Informe o seu login')

    const qtdPostsLogin = usuario.filter(login => login.login == loginDeUsuario)

    alert(`Exercício 3 \nO número de posts do usuario ${qtdPostsLogin[0].nome} é ${qtdPostsLogin[0].qtdePosts} posts`)

    //Exercício 4

    for(let i = 0; i < usuario.length; i++){ 

        alert(`Exercício 4 \nO número de posts do usuario ${usuario[i].nome} é ${usuario[i].qtdePosts} posts`)

    }
}