let iconEffect = document.body.querySelectorAll('.iconDev')
let HTML = document.body.querySelector('.devicon-html5-plain')
let CSS3 = document.body.querySelector('.devicon-css3-plain')
let BootStrap = document.body.querySelector('.devicon-bootstrap-plain-wordmark')
let js = document.body.querySelector('.devicon-javascript-plain')
let csharp = document.body.querySelector('.devicon-csharp-plain')
let dotnet = document.body.querySelector('.devicon-dot-net-plain-wordmark')
let PSQL = document.body.querySelector('.devicon-postgresql-plain-wordmark')
let Node = document.body.querySelector('.devicon-nodejs-plain-wordmark')
let Exp = document.body.querySelector('.devicon-express-original-wordmark')
let VS = document.body.querySelector('.devicon-visualstudio-plain')
let Atom = document.body.querySelector('.devicon-atom-original')
let GitHub = document.body.querySelector('.devicon-github-plain-wordmark')
let Git = document.body.querySelector('.devicon-git-plain-wordmark')


HTML.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    HTML.innerHTML = '<span class="iconDesc">HTML5</span>'
})

CSS3.addEventListener("mouseenter", event =>{
    CSS3.innerHTML = '<span class="iconDesc">CSS3</span>'
})

iconEffect.forEach(element => {
    element.addEventListener("mouseleave", event => {
        event.target.style.color = '#666'
        element.innerHTML = ''
    })
}, this)
