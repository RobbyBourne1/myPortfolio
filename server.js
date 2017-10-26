let iconEffect = document.body.querySelectorAll('.iconDev')
let HTML = document.body.querySelector('.devicon-html5-plain')
let CSS3 = document.body.querySelector('.devicon-css3-plain')
let BootStrap = document.body.querySelector('.devicon-bootstrap-plain')
let js = document.body.querySelector('.devicon-javascript-plain')
let csharp = document.body.querySelector('.devicon-csharp-plain')
let dotnet = document.body.querySelector('.devicon-dot-net-plain')
let PSQL = document.body.querySelector('.devicon-postgresql-plain')
let Nodejs = document.body.querySelector('.devicon-nodejs-plain')
let Exp = document.body.querySelector('.devicon-express-original')
let VS = document.body.querySelector('.devicon-visualstudio-plain')
let Atom = document.body.querySelector('.devicon-atom-original')
let GitHub = document.body.querySelector('.devicon-github-plain')
let Git = document.body.querySelector('.devicon-git-plain')


HTML.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    HTML.innerHTML = '<span class="iconDesc">HTML5</span>'
})

CSS3.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    CSS3.innerHTML = '<span class="iconDesc">CSS3</span>'
})

BootStrap.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    BootStrap.innerHTML = '<span class="iconDesc">Bootstrap</span>'
})

js.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    js.innerHTML = '<span class="iconDesc">JavaScript</span>'
})

csharp.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    csharp.innerHTML = '<span class="iconDesc">C#</span>'
})

dotnet.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    dotnet.innerHTML = '<span class="iconDesc">ASP.Net</span>'
})

PSQL.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    PSQL.innerHTML = '<span class="iconDesc">PostgreSQL</span>'
})

Nodejs.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    Nodejs.innerHTML = '<span class="iconDesc">Node.js</span>'
})

Exp.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    Exp.innerHTML = '<span class="iconDesc">Express.js</span>'
})

VS.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    VS.innerHTML = '<span class="iconDesc">Visual Studio</span>'
})

Atom.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    Atom.innerHTML = '<span class="iconDesc">Atom</span>'
})

GitHub.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    GitHub.innerHTML = '<span class="iconDesc">GitHub</span>'
})

Git.addEventListener("mouseenter", event =>{
    event.target.style.color = 'whitesmoke'
    Git.innerHTML = '<span class="iconDesc">Git</span>'
})

iconEffect.forEach(element => {
    element.addEventListener("mouseleave", event => {
        event.target.style.color = '#666'
        element.innerHTML = ''
    })
}, this)
