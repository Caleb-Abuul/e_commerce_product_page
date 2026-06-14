const minusBtn = document.getElementById("decrease");
const plusBtn = document.getElementById("increase");
const qty = document.getElementById("quantity");
const cartContainer = document.getElementById("cart");
const cartIcon = document.getElementById("cart-icon");
const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const addCartBtn = document.getElementById("add-to-cart");

let count = 0;
let totalQty = 0;

const updateCount = (newCount) => {
  count = newCount;
  qty.textContent = count;
};

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount(count);
  }
});
plusBtn.addEventListener("click", () => {
  count++;
  updateCount(count);
});

cartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
});

function updateQty() {
  const cartItemList = document.querySelectorAll(".cart-item");
  totalQty = 0;
  cartItemList.forEach((item) => {
    totalQty += parseInt(item.dataset.quantity);
  });

  const cartStatus = document.getElementById("cart-status");
  cartStatus.innerText = totalQty;

  console.log(cartItemList);
}

function removeCartItem(cartItem) {
  cartItem.remove();
  updateQty();

  if (cartItems.children.length == 1) {
    cartItems.classList.add("empty");
    checkoutBtn.classList.add("empty");
  }
}

function addToCart(name, price, imgSrc) {
  let totalPrice = parseFloat(price * count).toFixed(2);
  const item = document.createElement("div");
  let delBtn = cartItems.querySelectorAll(".del-icon");

  item.classList.add("cart-item");
  item.dataset.quantity = count;
  item.innerHTML = `
    <img src="${imgSrc}", alt="Product image" class="product-img" />
    <div class="product-details">
      <h3>${name}</h3>
      <p>$${price} x ${count} <span>$${totalPrice}</span></p>
    </div>
    <img src="./images/icon-delete.svg" alt="delete icon" class="del-icon" />
  `;
  cartItems.classList.remove("empty");
  checkoutBtn.classList.remove("empty");
  cartItems.append(item);

  updateQty();

  delBtn = item.querySelector(".del-icon");

  delBtn.addEventListener("click", (e) => {
    const cartItem = e.target.closest(".cart-item");
    removeCartItem(cartItem);
  });
}

addCartBtn.addEventListener("click", () => {
  if (count == 0) {
    return;
  }

  const productName = document.querySelector(".product").textContent;
  const productPrice = parseFloat(
    document.getElementById("price").textContent.replace("$", ""),
  );
  const productImg = document.getElementById("main-image").getAttribute("src");

  addToCart(productName, productPrice, productImg);

  updateCount(0);
});
