function focusOnShop(shop) {
    // Remove focus from other shops
    const allShops = document.querySelectorAll('.shop');
    allShops.forEach((s) => {
        s.blur();
    });

    // Set focus on the clicked shop
    shop.focus();
}
