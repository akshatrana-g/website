console.log('working')


let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
}
else{
    setTheme(theme)
}


var themeDots = document.getElementsByClassName('theme-dot')

for(var i = 0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option clicked ', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'css/default.css'
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