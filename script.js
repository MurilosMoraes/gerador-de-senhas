let sizePassword = document.querySelector('#sizePassword')
let rangeInput = document.querySelector('#rangeInput')
let generatePassword = document.querySelector('#generatePassword')
let password = document.querySelector('#password')
let copy = document.querySelector('#copy')
let tooltip = document.querySelector('#tooltip')

let containerPassword = document.querySelector('#containerPassword')

let charset = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
let novaSenha = ''


//VALOR ATUAL DO RANGE
{
    sizePassword.innerHTML = rangeInput.value

    rangeInput.oninput = function () {
        sizePassword.innerHTML = this.value
    }
}


// SHOW/HIDE TOLLTIP
{
    password.addEventListener('mouseover', function () {
        tooltip.style.visibility = 'visible'
        tooltip.style.opacity = '1'
    })

    password.addEventListener('mouseout', function () {
        tooltip.style.visibility = 'hidden'
        tooltip.style.opacity = '0'

    })
}

// GERAR A SENHA

function generatedPassword() {
    let pass =""
 
    for( let i = 0, n = charset.length; i < rangeInput.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hidden');
    copy.style.display = 'none'
    copy.style.opacity = '0'
    password.innerHTML = pass;
    novaSenha = pass;
}

// COPIAR SENHA
function copyPassword(){
    navigator.clipboard.writeText(novaSenha)
    copy.style.display = 'block'
    copy.style.opacity = '1'
}   

