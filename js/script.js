console.log('lol') //проверка подключился ли файл
const content = document.getElementById('touch__email-link')

function mail() {

    content.innerHTML = window.innerWidth < 600 ? 'info@cloud<br>budget.com' : 'info@cloudbudget.com'
}
window.onresize = mail
window.onload = mail


const form = document.querySelector('#form')
const msg = document.querySelector('#msg')
const firstNameInput = document.querySelector('#firstNameInput')
const lastNameInput = document.querySelector('#lastNameInput')
const phoneInput = document.querySelector('#phoneInput')
const selectInput = document.querySelector('#selectInput')

form.addEventListener('submit', submit)


function submit(e){
    e.preventDefault()
    console.log('submited')
    if(firstNameInput.value === '' || lastNameInput.value === '' || phoneInput.value === '' || selectInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML='<h4>Please, enter all fields</h4>'
        setTimeout(()=>msg.remove(), 7000)
    }


}