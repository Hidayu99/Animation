document.addEventListener("DOMContentLoaded", function() {
    var square = document.querySelector(".square");

    function moveSquare() {
        var newX = Math.random() * window.innerWidth;
        var newY = Math.random() * window.innerHeight;

        square.style.transform = "translate(" + newX + "px, " + newY + "px)";
    }

    setInterval(moveSquare, 2000);
});
