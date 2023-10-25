

document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
      arrows: false,
      type: 'loop',
      autoplay: true,
      width: '600px',
      perPage: 1,
      mediaQuery: 'min',
      breakpoints: {
        1024: {
          arrows: true,
        }
      }
    } );
    splide.mount();

    const burgerIcon = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu-container');
    burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('open')
      menu.classList.toggle('open');
    })


} );


