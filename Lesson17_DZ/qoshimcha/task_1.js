const apiURL = "https://dummyjson.com/products";
const productContainer = document.getElementById("productContainer");
const showMoreBtn = document.getElementById("showMoreBtn");
let allProducts = [];
let visibleCount = 6; // Dastlab ko‘rinadigan mahsulotlar soni

async function fetchProducts() {
    let response = await fetch(apiURL);
    let data = await response.json();
    allProducts = data.products;
    renderProducts();
}

function renderProducts() {
    productContainer.innerHTML = "";
    allProducts.forEach((product, index) => {
        let productDiv = document.createElement("div");
        productDiv.className =
            "product " + (index >= visibleCount ? "hidden" : "");
        productDiv.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}" width="150">
                    <h3>${product.title}</h3>
                    <p>⭐ ${product.rating} (${product.stock} ta mavjud)</p>
                    <p><strong>${product.price} $</strong></p>
                `;
        productContainer.appendChild(productDiv);
    });
}

showMoreBtn.addEventListener("click", () => {
    visibleCount = allProducts.length; // Hammasini ko‘rsatish
    renderProducts();
    showMoreBtn.style.display = "none"; // Tugmani yashirish
});
