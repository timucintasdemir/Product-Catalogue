document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const product = this.parentNode;
      const productName = product.querySelector("h2").innerText;
      const productPrice = product.querySelector(".price").innerText;

      // Sepete ekleme işlemi burada gerçekleştirilebilir, örneğin:
      // addToCart(productName, productPrice);

      alert(`${productName} sepete eklendi.`);
    });
  });
});
