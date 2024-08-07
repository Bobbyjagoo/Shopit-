

document.addEventListener('DOMContentLoaded', function(){
    
    var tgmodes =  document.querySelectorAll('.five')
    tgmodes.forEach(element => {
        element.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            let theme = 'light-mode'
     
             if (document.body.classList.contains('dark-mode')){
                theme = 'dark-mode'
             }
         })
    })
function setDarkMode(){
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
}

function removeDarkMode(){
    document.body.classList.remove('dark-mode')
    localStorage.setItem('darkMode', 'false');
}

window.addEventListener('load', ()=>{
    const darkMode = localStorage.getItem('darkMode');
    if(darkMode === 'true'){
        setDarkMode();
    }else{
        removeDarkMode();
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', ()=>{
    const darkMode = localStorage.getItem('darkMode');
    if(darkMode === 'true'){
        removeDarkMode();
    }else{
        setDarkMode();
    }
});

    // document.querySelector('.five').addEventListener('click', function() {
    //     document.body.classList.toggle('dark-mode');
    //     let theme = 'light-mode'
 
    //      if (document.body.classList.contains('dark-mode')){
    //         theme = 'dark-mode'
    //      }
    //  })
})

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 1000);

});

document.addEventListener('DOMContentLoaded', function(){   
    var btn = document.getElementById('image');
    var nav = document.getElementById('mobile-nav-link');
    let width = window.innerWidth

    
    btn.addEventListener('click', function(){
        
        if (nav.style.display === 'none' || nav.style.display === ''){
            nav.style.display = 'block';
            btn.style.display = 'block';
        }else{
            nav.style.display = 'none';
        }

    });

    
    nav.addEventListener('click', function(event){
        if(event.target.tagName === 'IMG')
            {
                if(width < 540  ){
                    nav.style.display = (
                        nav.style.display === 'none'
                    ) ? 'block' : 'none'
                } 
                else{
                    nav.style.display === block
                }
        }

    });
    // window.addEventListener('resize', function(){
    //     if(width >= 540){
    //         nav.style.display === 'block'
    //     } else {
    //         nav.style.display === 'none'
    //     }
    // }) 

    //  updateDisplay()
});







document.addEventListener('DOMContentLoaded',() => {
    const images = document.querySelectorAll('.hero-section5 img');
    let currentIndex = 0;

    const showImage = index => {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    setInterval(() => {
        currentIndex = (currentIndex === images.length - 1)
        ? 0: currentIndex + 1; 
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex)
});


