function contador(){
    let nota1 = Number(window.document.getElementById('nota1'));
    let nota2 = Number(window.document.getElementById('nota2'));
    let div = window.document.getElementById('div-res');
    let media = Number(nota1+nota2/2);
    
    if (media >= 60){
        div.innerHTML = `Aprovado !`
    }else{
        div.innerHTML = `Reprovado`
    }
}