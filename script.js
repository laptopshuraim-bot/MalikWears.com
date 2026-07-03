// ==========================
// MALIK WEARS JAVASCRIPT
// ==========================

// Welcome Message
console.log("Welcome to Malik Wears");

// ==========================
// HERO BUTTON
// ==========================

const shopBtn = document.querySelector(".btn");

if (shopBtn) {
    shopBtn.addEventListener("click", function () {
        console.log("Shop Now Clicked");
    });
}

// ==========================
// PRODUCT BUTTONS
// ==========================

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        window.location.href = "product.html?id=" + (index + 1);

    });

});



// ==========================
// SIMPLE FADE-IN ANIMATION
// ==========================

const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});
// ================================
// PRODUCT PAGE
// ================================

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

if(productId){

    const product = products.find(p=>p.id==productId);

    document.getElementById("productName").innerText=product.name;

    document.getElementById("productPrice").innerText="Rs. "+product.price;

    document.getElementById("mainImage").src=product.image;

    document.getElementById("productDescription").innerText=product.description;

    const colorContainer=document.getElementById("colorContainer");

    product.colors.forEach((color,index)=>{

        const circle=document.createElement("div");

        circle.className="color-circle";

        circle.style.background=color.code;

        if(index===0){

            circle.classList.add("active");

        }

        circle.onclick=function(){

            document.getElementById("mainImage").src=color.image;

            document.querySelectorAll(".color-circle").forEach(c=>c.classList.remove("active"));

            circle.classList.add("active");

        };

        colorContainer.appendChild(circle);

    });

}
// ==========================
// QUANTITY
// ==========================

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");

if (plus && minus && quantity) {

    plus.onclick = function () {

        quantity.value++;

    };

    minus.onclick = function () {

        if (quantity.value > 1) {

            quantity.value--;

        }

    };

}
// ==========================
// ADD TO CART
// ==========================

const addCart = document.getElementById("addCart");

if(addCart){

    addCart.onclick = function(){

        const product = products.find(p => p.id == productId);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: document.getElementById("mainImage").src,

            quantity: quantity.value

        });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product Added To Cart!");

    }

}
// Navbar Scroll Effect

window.addEventListener("scroll",()=>{

const header=document.getElementById("header");

if(window.scrollY>80){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});
// ==========================
// HERO SLIDER
// ==========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if(slides.length > 0){

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        slides[currentSlide].classList.add("active");

    },5000);

}
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if(menuToggle && navbar){

menuToggle.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}
document.querySelectorAll("#navbar a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

});

});
