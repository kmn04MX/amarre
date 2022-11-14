
//espera un elemento del DOM
function moverPosicionRandom(elm){
    elm.style.position = 'absolute'; //se le cambia el tipo de posición
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px'; //se le resta el tamaño del elemento al tamaño de la pantalla con la finalidad de que el elemento no e salga
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0]; // getElementsByClassName genera un arreglo, pero en ese arreglo solo se tiene un elemento, es por eso que que pone [0]


//escucha algo, hace algo, en este caso es cuando el moude se mueve, es lo que va escuchar
// e.target sirve para mandar un elemento actual
btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabía que dirías que sí. Casemonos ya y tengamos hijos. Te amo!!! ❤❤'); //para sacar los emojis solo basta con presionar windows + . (punto)

    divModoSexo.style.display = 'block';
    const cancion = new Audio('./img/img_modo_hot.mp3');
    cancion.play();
});