let media = 79

if(media > 100){
    console.log('Não é possivel atribuir esse valor a Média.')
}else{
    if(media > 89){
    console.log(`Parabéns, sua nota foi A`)
    }else if(media >= 80 || media <= 89){
        console.log(`Parabéns, sua nota foi B`)
    }else{
        if(media >= 70 || media <= 79){
            console.log(`Parabéns, sua nota foi C`)
        }
    }
}
