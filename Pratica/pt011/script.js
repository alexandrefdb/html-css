const buttonOpenModal = document.querySelector('#openModal')
const divVisible = document.querySelector('#Visivel')
let ClickbuttonOpenModal = false
buttonOpenModal.addEventListener('click', invisible)


function invisible(){
    divVisible.classList.toggle('invisible')
    ClickbuttonOpenModal = true 
}

document.addEventListener('keydown', function(event){
    const ESC = event.key === "Escape"

    if(ESC){
        if(ClickbuttonOpenModal === true){
            divVisible.classList.add('invisible')
            ClickbuttonOpenModal = false
            console.log("Foi")
        }else{
           console.log('Num foi') 
        }
    }


})