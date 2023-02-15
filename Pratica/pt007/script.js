//Javascript 

let nameUser = document.getElementById('name')
let password = document.getElementById('pass')
let emailAcont = document.getElementById('email-accont')
let idadeuser = document.getElementById('age')

function Verification(nome,senha,email,idade){
    nome = nameUser.value
    senha = password.value
    email = emailAcont.value
    idade = idadeuser.value

    const info = {
        Nome: nome,
        Idade: idade,
        Email: email,
        Senha: senha
    }    

    if(info.value == undefined){
        alert('Ocorreu um erro ! [404]')
        console.log(info)
    }else{
        return Alert()
    }
}
function Alert(){
    window.alert(`Você foi cadastrado com sucesso!`)    
    
}