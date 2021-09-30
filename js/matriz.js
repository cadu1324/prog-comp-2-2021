let sisnotas = () => {
    //declaração de uma matriz
    let mat = []
    mat[0]=[]
    mat[1]=[]
    mat[2]=[]
    mat[3]=[]
    // entrada de dados
    for(let i=0;i<4;i++){
        alert(`Informe as 4 notas do aluno ${i+1}`)
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }

    for(let i=0;i<4;i++){
        let soma=0
        for(let j=0;j<4;j++){
            soma=soma+mat[i][j]
        }
        console.log(`A média do aluno ${i+1} é ${soma/4}`)
    }
}