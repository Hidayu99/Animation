const product1 = document.getElementById('product1');

product1.addEventListener('click', function () {
    const productName = this.querySelector('h2');
    productName.textContent = 'New Product Name';
});
