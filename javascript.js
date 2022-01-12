
function candidatura() {
    alert("Formulário submetido com sucesso!")
    window.location = "quemsomos.html";
}
/*Login*/
function validar() {
    email = document.querySelector("#email").value;
    pass = document.querySelector("#password").value;

    registo_user = localStorage.email;
    registo_pass = localStorage.pass;


    if (email=="") {
        document.querySelector('#wrong').style.visibility = "visible";;
    }else{
        if (email==admin_u && pass==admin_p) {
            alert("Bem vindo admin!");
            window.location="trans0.html";

        }else if (email==registo_user && pass==registo_pass) {
            alert("Bem vindo user!")
            window.location="trans0.html";
        }else{
            document.querySelector('#wrong').style.visibility = "visible";
        }
    }
}

//Regista
function registred() {
    localStorage.email = document.querySelector("#email").value;
    localStorage.pass = document.querySelector("#pass").value;
    alert("Utilizador Registado");
    window.location="login.html";
    
}

function logoutme() {
    localStorage.removeItem("ativo");
    localStorage.removeItem("ativo_login");
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    localStorage.removeItem("user");
    window.location="index.html"
}
//Admin Login
admin_u = "admin@usf.com";
admin_p = "admin123";



/*Slideshow*/

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}