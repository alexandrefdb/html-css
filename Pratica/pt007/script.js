//Javascript 

let nameUser = document.getElementById('name')
let password = document.getElementById('pass')
let emailAcont = document.getElementById('email-accont')
let idadeuser = document.getElementById('age')

function Verification(nome,senha,email,idade){
    nameUser = nome
    password = senha
    emailAcont = email
    idadeuser = idade

    const info = {
        Nome: nome,
        Idade: idade,
        Email: email,
        Senha: senha
    }
        //Dados legiveis
        if(info === undefined){
            String(nome,idade,email,senha)
        }

    console.log(info)
}
