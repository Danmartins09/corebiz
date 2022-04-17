//----- CART COUNTER -----
let cartCounter = document.getElementById("cartCounter");
let cartCounterMobile = document.getElementById("cartCounterMobile");
let count = sessionStorage.getItem("counter") || 0;
cartCounter.innerHTML = count;
cartCounterMobile.innerHTML = count;

function addToCart() {
  count++;
  sessionStorage.setItem("counter", count);
  cartCounter.innerHTML = count;
  cartCounterMobile.innerHTML = count;
}
