document.querySelector('.fa-bars').addEventListener('click', menuKey)
document.querySelector('.fa-xmark').addEventListener('click', cancelKey)
document.querySelector('#nav-home').addEventListener('click', cancelKey)
document.querySelector('#nav-project').addEventListener('click', cancelKey)
document.querySelector('#nav-contact').addEventListener('click', cancelKey)

const nav = document.querySelector('nav')
const menu = document.querySelector('.fa-bars')
const cancel = document.querySelector('.fa-xmark')


function menuKey(){
    nav.style.left = 0
    menu.style.opacity = 0
    cancel.style.opacity = 1
    cancel.style.right = '18px'
}

function cancelKey(){
    nav.style.left = '-100%'
    cancel.style.right = 0
    cancel.style.opacity = 0
    menu.style.opacity = 1
}

