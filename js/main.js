//Function that initial AOS
AOS.init({
    duration: 1000
});
//End Function AOS



// Functions that controll open and close the Sidebar
let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('#btn__close');
let openBtn = document.querySelector('#btn__open');

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle("open");
    sidebar.classList.toggle('animate__fadeInLeft');
});
openBtn.addEventListener('click', () => {
    sidebar.classList.toggle("open");
    sidebar.classList.toggle('animate__fadeInLeft');
});
// End Functions Sidebar


// Function that controll the modal menu
var btn = document.querySelector('#servicios__modal');
var modal = document.querySelector("#myModal");
var span = document.getElementsByClassName("close__modal")[0];



btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.add('activo');
    document.querySelector('.wrench').classList.add('activo');
    document.querySelector('.servicio').classList.add('activo');
    removeActive();
    modal.style.display = "block";
});

span.onclick = function(){
    modal.style.display = "none";
    btn.classList.remove('activo');
    document.querySelector('.wrench').classList.remove('activo');
    document.querySelector('.servicio').classList.remove('activo');

    setActivelink();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        btn.classList.remove('activo')
        document.querySelector('.wrench').classList.remove('activo');
        document.querySelector('.servicio').classList.remove('activo');

        setActivelink();
    }
}
// End function Modal menu

//Function that show image and logo of service
document.querySelectorAll('.mega__link').forEach(link => link.addEventListener('mouseover', (e) => {
    let icono = document.querySelector('#icono');
    let imagen = document.querySelector('#imagen');

    switch(e.target.innerText){
        case "Riggin":
            icono.src = "assets/img/Riggin-tiny.png";
            imagen.src = "assets/img/img-riggin.png";
        break;
        case "Automatización":
            icono.src = "assets/img/automatizacion-tiny.png";
            imagen.src = "assets/img/img-automatizacion.png";
        break;
        case "Industrial 4.0":
            icono.src = "assets/img/industrial-tiny.png";
            imagen.src = "assets/img/img-industria.png";
        break;
        case "Maquinados":
            icono.src = "assets/img/maquinados-tiny.png";
            imagen.src = "assets/img/img-maquinados.png";
            imagen.classList.add("width__25");
        break;
        case "Seguridad Industrial":
            icono.src = "assets/img/seguridad-tiny.png";
            imagen.src = "assets/img/img-seguridad.png";
        break;
        case "Manteniminto General":
            icono.src = "assets/img/mantenimiento-tiny.png";
            imagen.src = "assets/img/brazos-roboticos-g1.jpg";
        break;
        case "Mantenimiento Industrial":
            icono.src = "assets/img/mantenimientoInd-tiny.png";
            imagen.src = "assets/img/brazos-roboticos-g1.jpg";
        break;
    }
    icono.classList.remove('d-none');
    icono.classList.add('animate__zoomIn');
    imagen.classList.remove('d-none');
    imagen.classList.add('animate__zoomIn');
}));

document.querySelectorAll('.mega__link').forEach(link => link.addEventListener('mouseout', (e) => {
    let icono = document.querySelector('#icono');
    let imagen = document.querySelector('#imagen');
    
    icono.src = "";
    imagen.src = "";
    icono.classList.add("d-none");
    imagen.classList.add("d-none");
    imagen.classList.remove("width__25");
}));
// End function logos and image


// Function for dropdown
$(document).ready(function(){
    $('#btn__servicios__dropdown').click(function(){
        $(this).next('.sub__menu__responsive').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});
// End function

function setActivelink(){
    var urlActual = window.location.pathname;
    switch(urlActual){
        case "/index.html":
            document.querySelector('#link__home').classList.add('activo');
            document.querySelector('.fa-house').classList.add('activo');
            document.querySelector('.inicio').classList.add('activo');
        break;
        case "/nosotros.html":
            document.querySelector('#link__nosotros').classList.add('activo');
            document.querySelector('.fa-users').classList.add('activo');
            document.querySelector('.nosotros').classList.add('activo');
        break;
        case "/proyectos.html":
            document.querySelector('#link__proyectos').classList.add('activo');
            document.querySelector('.folder').classList.add('activo');
            document.querySelector('.proyecto').classList.add('activo');
        break;
        case "/mundoVMC.html":
            document.querySelector('#link__mundovmc').classList.add('activo');
            document.querySelector('.earth').classList.add('activo');
            document.querySelector('.vmc').classList.add('activo');
        break;
        case "/contacto.html":
            document.querySelector('#link__contacto').classList.add('activo');
            document.querySelector('.book').classList.add('activo');
            document.querySelector('.contacto').classList.add('activo');
        break;
        case "/catalogos.html":
            document.querySelector('#link__catalogos').classList.add('activo');
            document.querySelector('.open__book').classList.add('activo');
            document.querySelector('.catalogo').classList.add('activo');
        break;
        case "/riggin.html":
            document.querySelector('.wrench').classList.add('activo');
            document.querySelector('.servicio').classList.add('activo');
            document.querySelector('#servicios__modal').classList.add('activo');
        break;
        case "/automatizacion.html":
            document.querySelector('.wrench').classList.add('activo');
            document.querySelector('.servicio').classList.add('activo');
            document.querySelector('#servicios__modal').classList.add('activo');
        break;
    }
}
function removeActive(){
    document.querySelector('#link__home').classList.remove('activo');
    document.querySelector('.fa-house').classList.remove('activo');
    document.querySelector('.inicio').classList.remove('activo');
    document.querySelector('#link__nosotros').classList.remove('activo');
    document.querySelector('.fa-users').classList.remove('activo');
    document.querySelector('.nosotros').classList.remove('activo');
    document.querySelector('#link__proyectos').classList.remove('activo');
    document.querySelector('.folder').classList.remove('activo');
    document.querySelector('.proyecto').classList.remove('activo');
    document.querySelector('#link__mundovmc').classList.remove('activo');
    document.querySelector('.earth').classList.remove('activo');
    document.querySelector('.vmc').classList.remove('activo');
    document.querySelector('#link__contacto').classList.remove('activo');
    document.querySelector('.book').classList.remove('activo');
    document.querySelector('.contacto').classList.remove('activo');
    document.querySelector('#link__catalogos').classList.remove('activo');
    document.querySelector('.open__book').classList.remove('activo');
    document.querySelector('.catalogo').classList.remove('activo');
}
document.addEventListener('DOMContentLoaded', () =>{
    setActivelink();
});
