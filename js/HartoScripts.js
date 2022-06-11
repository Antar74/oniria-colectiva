
$(document).ready(function(){
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 350,
    cssEase: 'ease-out',
    autoplay: true,
    autoplaySpeed: 9000,
  });

  $('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  });



const myTags = [
   'agua', 'auto', 'avión', 'azulejos', 'bicicleta', 'botón', 'brazo', 'butaca', 'cabeza', 'caja', 'cajones', 'campana', 'celular', 'chihuahua', 'cuchillo', 'dinosaurios', 'edificio', 'escaleras', 'espejo', 'graffitis', 'hilo','mano', 'media', 'mochila', 'nariz', 'ojos', 'omnibus', 'pasillo', 'patines', 'peces', 'pelo', 'pies', 'piscina', 'puertas', 'ropa', 'tanques', 'tapabocas', 'tele', 'tren', 'tribuna', 'ventanas',
];

var tagCloud = TagCloud('.content', myTags,{

 // radius in px
 radius: 250,

 // animation speed
 // slow, normal, fast
 maxSpeed: 'fast',
 initSpeed: 'fast',

 // 0 = top
 // 90 = left
 // 135 = right-bottom
 direction: 135,

 // interact with cursor move on mouse out
 keep: true

});

//To change the color of text randomly
var colors = ['#ffffff', '#9F9F9F', '#D62424', '#24D695'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

});
