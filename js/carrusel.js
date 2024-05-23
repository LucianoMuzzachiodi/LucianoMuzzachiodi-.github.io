let imagenes = [
    {
        "url": "./imgCarrusel/Portada1.jpg", "nombre": "INMOBILIARIA CASTRO", "descripcion": "Tu Futuro Comienza Aquí: Descubre Espacios Únicos, Viviendas de Ensueño y Oportunidades Inigualables. En Castro, Transformamos Sueños en Realidad, Acompañándote en Cada Paso del Camino para Encontrar el Hogar Perfecto para Ti",
    },
    {
        "url": "./imgCarrusel/Portada2.jpg", "nombre": "VIVE LA AVENTURA", "descripcion": "Conquista la Montaña, Descubre tu Espíritu. Embárcate en una Experiencia Inolvidable Llena de Retos y Belleza Natural. Desde Caminatas Épicas Hasta Escaladas Emocionantes, Explora Paisajes Increíbles y Supera tus Límites. ¡La Montaña Te Espera!",
    },
    {
        "url": "./imgCarrusel/Portada3.jpg", "nombre": "CAMINOS SERRANOS", "descripcion": "Donde Tu Hogar Encuentra la Naturaleza. Vive la Tranquilidad, el Confort y la Belleza de un Entorno Único. Te Acompañamos en Cada Paso para Hacer de Tu Sueño una Realidad, Conectándote con Espacios que Inspiran y Crean Recuerdos Eternos",
    },
    {
        "url": "./imgCarrusel/Portada4.avif", "nombre": "SABORES AUTÉNTICOS", "descripcion": "Descubre la Esencia de Nuestra Tierra. Cada Plato es una Aventura que Te Lleva a los Rincones Más Profundos de Nuestra Cultura, con Ingredientes Frescos y Recetas Tradicionales que Celebran la Riqueza de Nuestras Raíces",
    },
];

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("img");
let puntos = document.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;

posicionCarrusel();


atras.addEventListener("click", function(){
    actual -=1;
    if(actual == -1){
        actual = imagenes.length - 1;
    }
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Imagen carrusel" loading="lazy">`;
    texto.innerHTML = `<h3 class="tituloCarrusel">${imagenes[actual].nombre}</h3> <P>${imagenes[actual].descripcion}</P>`;

    posicionCarrusel();
});


adelante.addEventListener("click", function(){
    actual +=1;
    if(actual == imagenes.length){
        actual = 0;
    }
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="Imagen carrusel" loading="lazy">`;
    texto.innerHTML = `<h3 class="tituloCarrusel">${imagenes[actual].nombre}</h3> <P class="tuSueño">${imagenes[actual].descripcion}</P>`;

    posicionCarrusel();
});

function posicionCarrusel(){
    puntos.innerHTML = "";
    for(var i=0; i<imagenes.length; i++){
       if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>';
        }else {
            puntos.innerHTML += '<p>.<p>';
        }
    }
}
