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
var btn = document.querySelectorAll('#servicios__modal');
var modal = document.querySelector("#myModal");
var span = document.getElementsByClassName("close__modal")[0];


btn.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";
}));

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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



$(document).ready(function(){
    $('#btn__servicios__dropdown').click(function(){
        $(this).next('.sub__menu__responsive').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});


