document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popup-text");

    var shops = document.querySelectorAll(".shop");

    shops.forEach(function(shop) {
        shop.addEventListener("click", function() {
            var shopName = shop.textContent;
            openPopup(shopName);
            focusOnShop(shop);
        });
    });

    function openPopup(shopName) {
        popupText.textContent = "You clicked on the " + shopName + " shop!";
        popup.style.display = "flex";
    }

    function closePopup() {
        popup.style.display = "none";
    }

    function focusOnShop(shop) {
        var offsetTop = shop.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    window.closePopup = closePopup;
});
