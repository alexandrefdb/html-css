let media = 100

if(media > 100){
    console.log('Não é possivel atribuir esse valor a Média.')
}else{
    switch (media) {
        case media >= 90:
            console.log('Parabéns, sua nota foi A')
            break;
        case media >= 80 || media <= 89:
            console.log('Parabéns, sua nota foi B')
            break;
        case  media >= 70 || media <= 79:
            console.log('Sua nota foi C, foi uma boa nota')
            break;
        case media >= 60 || media <= 69:
            console.log('Sua nota ficou na média, ela foi D!')
            break;
        default:
            console.log('Sua nota foi F. Reprovado!')
            break;
    }
        
}
