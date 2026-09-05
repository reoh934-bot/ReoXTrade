```javascript
// ============================
// ЗАГРУЗКА
// ============================

window.addEventListener("load", () => {
  setTimeout(() => {
    document
      .getElementById("loader")
      .classList.add("hidden");
  }, 1500);
});


// ============================
// COOKIE
// ============================

const cookieBox =
  document.getElementById("cookie-box");

const cookieAccepted =
  localStorage.getItem("reox_cookie");

if (cookieAccepted === "true") {
  cookieBox.classList.add("hidden");
}

document
  .getElementById("cookie-accept")
  .addEventListener("click", () => {

    localStorage.setItem(
      "reox_cookie",
      "true"
    );

    cookieBox.classList.add("hidden");
  });

document
  .getElementById("cookie-settings")
  .addEventListener("click", () => {

    alert(
      "Использование cookie необходимо для работы некоторых функций сайта. Подробные настройки можно добавить позже."
    );
  });


// ============================
// ПОИСК
// ============================

const search =
  document.getElementById("search");

const products =
  document.querySelectorAll(".product");

const noResults =
  document.getElementById("no-results");

search.addEventListener("input", () => {

  const query =
    search.value
      .toLowerCase()
      .trim();

  let found = 0;

  products.forEach(product => {

    const name =
      product
        .dataset
        .name
        .toLowerCase();

    if (name.includes(query)) {
      product.style.display = "";
      found++;
    } else {
      product.style.display = "none";
    }

  });

  noResults.style.display =
    found === 0
      ? "block"
      : "none";
});


// ============================
// КАТЕГОРИИ
// ============================

const categories =
  document.querySelectorAll(".category");

categories.forEach(button => {

  button.addEventListener("click", () => {

    categories.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const category =
      button.dataset.category;

    let found = 0;

    products.forEach(product => {

      const matches =
        category === "all" ||
        product.dataset.category === category;

      if (matches) {
        product.style.display = "";
        found++;
      } else {
        product.style.display = "none";
      }

    });

    noResults.style.display =
      found === 0
        ? "block"
        : "none";

  });

});


// ============================
// КОРЗИНА
// ============================

let cartCount = 0;

function addToCart(productName) {

  cartCount++;

  document
    .getElementById("cart-count")
    .textContent = cartCount;

  alert(
    `${productName} добавлен в корзину!`
  );
}


// ============================
// ПРОФИЛЬ
// ============================

function openProfile() {

  document
    .getElementById("profile-modal")
    .classList.add("show");
}

function closeProfile() {

  document
    .getElementById("profile-modal")
    .classList.remove("show");
}


// Закрытие модального окна
document
  .getElementById("profile-modal")
  .addEventListener("click", event => {

    if (
      event.target.id === "profile-modal"
    ) {
      closeProfile();
    }

  });
```
 
