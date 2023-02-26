const navbar = document.getElementById("navbarSite");

window.onscroll=function(){
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-tansparent", "navbar-dark");
        navbar.classList.add("bg-light", "navbar-light");
    } else {
        navbar.classList.add("bg-tansparent", "navbar-dark");
        navbar.classList.remove("bg-light", "navbar-light");
    }
}

