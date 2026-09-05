```javascript
// ============================
// ЗАГРУЗКА
// ============================

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 1500);

});


// ============================
// COOKIE
// ============================

const cookieBox =
    document.getElementById("cookie-box");

const cookieAccept =
    document.getElementById("cookie-accept");

const cookieSettings =
    document.getElementById("cookie-settings");


if (
    cookieBox &&
    localStorage.getItem("reox_cookie") === "true"
) {
    cookieBox.classList.add("hidden");
}


if (cookieAccept) {

    cookieAccept.addEventListener("click", function () {

        localStorage.setItem(
            "reox_cookie",
            "true"
        );

        cookieBox.classList.add("hidden");

    });

}


if (cookieSettings) {

    cookieSettings.addEventListener("click", function () {

        alert(
            "Здесь позже можно разместить подробные настройки Cookie и пользовательское соглашение."
        );

    });

}


// ============================
// ПОИСК
// ============================

const search =
    document.getElementById("search");

const products =
    document.querySelectorAll(".product");

const noResults =
    document.getElementById("no-results");


if (search) {

    search.addEventListener("input", function () {

        const query =
            search.value
                .toLowerCase()
                .trim();

        let found = 0;

        products.forEach(function (product) {

            const name =
                (product.dataset.name || "")
                    .toLowerCase();

            if (name.includes(query)) {

                product.style.display = "";
                found++;

            } else {

                product.style.display = "none";

            }

        });

        if (noResults) {

            noResults.style.display =
                found === 0
                    ? "block"
                    : "none";

        }

    });

}


// ============================
// КАТЕГОРИИ
// ============================

const categories =
    document.querySelectorAll(".category");


categories.forEach(function (button) {

    button.addEventListener("click", function () {

        categories.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.dataset.category;

        let found = 0;

        products.forEach(function (product) {

            const productCategory =
                product.dataset.category;

            if (
                category === "all" ||
                productCategory === category
            ) {

                product.style.display = "";
                found++;

            } else {

                product.style.display = "none";

            }

        });

        if (noResults) {

            noResults.style.display =
                found === 0
                    ? "block"
                    : "none";

        }

    });

});


// ============================
// КОРЗИНА
// ============================

let cartCount = 0;


function addToCart(productName) {

    cartCount++;

    const counter =
        document.getElementById("cart-count");

    if (counter) {
        counter.textContent = cartCount;
    }

    alert(
        productName + " добавлен в корзину!"
    );

}


// ============================
// ПРОФИЛЬ
// ============================

function openProfile() {

    const modal =
        document.getElementById("profile-modal");

    if (modal) {
        modal.classList.add("show");
    }

}


function closeProfile() {

    const modal =
        document.getElementById("profile-modal");

    if (modal) {
        modal.classList.remove("show");
    }

}


// ============================
// ЗАКРЫТИЕ ПРОФИЛЯ
// ============================

const profileModal =
    document.getElementById("profile-modal");


if (profileModal) {

    profileModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target.id ===
                "profile-modal"
            ) {

                closeProfile();

            }

        }
    );

}
```

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
 
