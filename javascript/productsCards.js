//----- PRODUCTS CARDS -----
const cards = document.querySelector(".cards");
const productTitle = document.getElementById("productTitle");

axios({
  method: "GET",
  url: "https://corebiz-test.herokuapp.com/api/v1/products",
}).then((response) => {
  const data = response.data;

  for (let i = 0; i < data.length; i++) {
    function convertPrice(param) {
      let calcPrice = param / 100;
      let price = calcPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return price;
    }

    if (data[i].installments[0]) {
      let card = `<div class="swiper-slide card offer">
      <img src="${data[i].imageUrl}" alt="" class="imgCard">
      <p class="productTitle" id="productTitle">${data[i].productName}</p>
      <img src="assets/Rating${data[i].stars}.svg" alt="" class="rating">
      <p class="fullPrice" id="fullPrice">de ${convertPrice(
        data[i].listPrice
      )}</p>
      <p class="price">por ${convertPrice(data[i].price)}</p>
      <p class="credit">ou em ${
        data[i].installments[0].quantity
      }x de ${convertPrice(data[i].installments[0].value)}</p>
      <p  class="off">OFF</p>
      <button id="btnBuy" onclick="addToCart()">Comprar</button>
      </div>`;
      cards.innerHTML = cards.innerHTML + card;
    } else {
      console.log(data[i].installments[0]);
      let card = `<div class="swiper-slide card offer">
      <img src="${data[i].imageUrl}" alt="" class="imgCard">
      <p class="productTitle" id="productTitle">${data[i].productName}</p>
      <img src="assets/Rating${data[i].stars}.svg" alt="" class="rating">
      <p class="fullPrice" id="fullPrice">de ${convertPrice(
        data[i].listPrice
      )}</p>
      <p class="price">por ${convertPrice(data[i].price)}</p>      
      <p  class="off">OFF</p>
      <button id="btnBuy" onclick="addToCart()" >Comprar</button>
      </div>`;
      cards.innerHTML = cards.innerHTML + card;
    }

    if (data[i].listPrice == null) {
      const fullPrice = document.querySelectorAll(".fullPrice");
      const off = document.querySelectorAll(".off");
      fullPrice[i].style.opacity = 0;

      off[i].style.display = "none";
    }

    if (data[i].installments[0] == null) {
      var oferta = document.querySelectorAll(".card");
      oferta[i].classList.add("spacing");
    }
  }
});
