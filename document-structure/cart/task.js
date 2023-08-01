const cartProducts = document.querySelector('.cart__products');
const productQuantityControl = document.querySelectorAll('.product__quantity-control');
productQuantityControl.forEach((i) => {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        let perent = i.closest('.product__quantity-controls');
        let sibling = perent.querySelector('.product__quantity-value')
        if (i.classList.contains('product__quantity-control_dec')) {
            sibling.textContent <= 1 ? sibling.textContent = 1 : sibling.textContent--;    
        } else if (i.classList.contains('product__quantity-control_inc')) {
            if (sibling.textContent >= 1) {
                sibling.textContent++;
            }
        }
    })
})
function addNewProduct(i) {
    cartProducts.insertAdjacentHTML('afterbegin', '<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count"></div></div>');
    let cartProduct = document.querySelector('.cart__product');
    let perentProduct = i.closest('.product');
    cartProduct.dataset.id = perentProduct.dataset.id;
    let cartProductImage = document.querySelector('.cart__product-image');
    let cartProductImageReplace = perentProduct.querySelector('.product__image').cloneNode(false);
    cartProductImage.replaceWith(cartProductImageReplace);
    let cartProductCount = document.querySelector('.cart__product-count');
    cartProductCount.textContent = perentProduct.querySelector('.product__quantity-value').textContent;
}
const productAdd = document.querySelectorAll('.product__add');
productAdd.forEach((i) => {
    i.addEventListener('click', (e) => {
        e.preventDefault();

        if (cartProducts.children.length === 0) {
            addNewProduct(i);
        } else {
            let id = i.closest('.product').dataset.id;
            let cartProductsElements = Array.from(document.querySelectorAll('.cart__product'));
            let productInProducts = cartProductsElements.find(n => n.dataset.id === id);
            if (productInProducts) {
                let cartProductCount = productInProducts.querySelector('.cart__product-count');
                let perent = i.closest('.product');
                let productQuantityValue = perent.querySelector('.product__quantity-value');
                cartProductCount.textContent = +cartProductCount.textContent + +productQuantityValue.textContent;
            } else {
                addNewProduct(i);
            }
        }
    })            
})
            
        
    
