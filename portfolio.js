const body = document.querySelector('body')
const light = document.querySelector('.bi-brightness-low-fill')
const dark = document.querySelector('.bi-moon-stars-fill')

// toggling between the light and dark mode

dark.addEventListener('click', () =>{
    if (document.body.getAttribute('data-theme') === 'light'){
    document.body.setAttribute('data-theme', 'dark')
     localStorage.setItem('data-theme', 'dark')
        }
    else{
        document.body.setAttribute('data-theme', 'dark')
    }
    })

light.addEventListener('click', () =>{
if (document.body.getAttribute('data-theme') === 'dark'){
document.body.setAttribute('data-theme', 'light')
 localStorage.setItem('data-theme', 'light')
}
else{
document.body.setAttribute('data-theme', 'light')
}
})

let theme = localStorage.getItem('data-theme')
    console.log(theme)
if(theme){
    document.body.setAttribute('data-theme', theme)
}


// hamburger menu
const open =  document.querySelector('.open')
const close =  document.querySelector('.close')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')
const changeHeight = document.querySelectorAll('.ch')
console.log(changeHeight)



open.addEventListener('click', () =>{
close.style.display = 'block'
open.style.display = 'none'
menu.style.display = 'block'
}) 

close.addEventListener('click', () => {
    open.style.display = 'block'
    close.style.display = 'none'
    menu.style.display = 'none'
})

// About me
 const tab = document.querySelectorAll('#tab')
 const tabcontent = document.querySelectorAll('.tabcontent')


 tab.forEach((item)=>{
    if(item.classList.contains('skill'))item.classList.add('tab')
    tabcontent[0].style.display = 'block'

item.addEventListener('click', (e)=>{
    remove()
    tabcon()
    if(e.target === tab[1]){
       tabcontent[1].style.display = 'block'
    }
    else if(e.target === tab[2]){
    tabcontent[2].style.display = 'block'
    }
    else{
     tabcontent[0].style.display = 'block'
    }
    item.classList.add('tab');
})
 })

 function remove(){
    tab.forEach((item)=>{
item.classList.remove('tab') 

    })
 }

 function tabcon(){
    tabcontent.forEach((tabcon)=>{
        tabcon.style.display = 'none'
    })
 }


// formspree recaptche
grecaptcha.ready(function () {
    grecaptcha.execute('{your-site-key}', {action: 'submit'}).then(function (token) {
        console.info("got token: " + token);
        document.getElementById('g-recaptcha-response').value = token;
    });
});