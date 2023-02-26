const navbar = document.getElementById("navbarSite");
const scrollTopButton = document.getElementById("scrollTopButton");

window.onscroll=function(){
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-tansparent", "navbar-dark");
        navbar.classList.add("bg-light", "navbar-light");
        
        scrollTopButton.classList.add("show");
    } else {
        navbar.classList.add("bg-tansparent", "navbar-dark");
        navbar.classList.remove("bg-light", "navbar-light");
        
        scrollTopButton.classList.remove("show");
    }
}

