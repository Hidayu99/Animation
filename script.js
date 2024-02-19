document.addEventListener("DOMContentLoaded", function() {
    var shopsCarousel = document.querySelector('.shops-carousel');
    var shops = document.querySelectorAll('.shop');
    var rotation = 0;

    setInterval(function() {
        rotation += 45;
        shopsCarousel.style.transform = 'rotate(' + rotation + 'deg)';
    }, 3000);

    shops.forEach(function(shop) {
        shop.addEventListener('click', function() {
            alert('You clicked on ' + shop.textContent);
        });
    });
});
