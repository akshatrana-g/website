console.log('working')


let theme = localStorage.getItem('theme');
if(theme == null){
    setTheme('light')
}
else{
    setTheme(theme)
}

// var themeDots = document.getElementsByClassName('theme');
var change = document.querySelector("#nav-content nav ul li svg")

change.addEventListener('click', function(){
    if(change.classList.contains("light")){
        change.classList.remove("light");
        change.classList.add("dark");
        setTheme("dark");
    }
    else if(change.classList.contains("dark")){
        change.classList.remove("dark");
        change.classList.add("light");
        setTheme("light");
    }
})

function setTheme(mode){
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'css/style.css'
    }
    if (mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
    }
    localStorage.setItem('theme', mode)
}



const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');




hamburgerMenu.addEventListener('click', ()=>{
    document.body.style.overflow = 'hidden';
    navContent.classList.add('show');
})
closeNavButton.addEventListener('click', ()=>{
    document.body.style.overflow = 'auto'
    navContent.classList.remove('show');
})


navLinks.forEach( link => {
    link.addEventListener('click', ()=>{
        document.body.style.overflow = "auto";
        navContent.classList.remove('show');
    })
})

