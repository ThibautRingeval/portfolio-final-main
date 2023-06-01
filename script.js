var slide = new Array("Images/foret-peuplier.png", "Images/paysage-montagne.png", "Images/chemin-automne.png", "Images/prairie-alpes.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}