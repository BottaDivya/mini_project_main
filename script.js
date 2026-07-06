let cart=[];
let total=0;

function add(name,price){
    cart.push({name,price});
    total+=price;
    update();
}

function update(){
    document.getElementById("count").innerText=cart.length;

    let box=document.getElementById("items");
    box.innerHTML="";

    cart.forEach(item=>{
        box.innerHTML+=`<div>${item.name} - ₹${item.price}</div>`;
    });

    document.getElementById("total").innerText=total;
}

function toggleCart(){
    let box=document.getElementById("cartBox");
    box.style.display=box.style.display==="block"?"none":"block";
}

function openLogin(){
    document.getElementById("loginBox").style.display="block";
}

function closeLogin(){
    document.getElementById("loginBox").style.display="none";
}

function openSignup(){
    document.getElementById("signupBox").style.display="block";
}

function closeSignup(){
    document.getElementById("signupBox").style.display="none";
}
function checkout(){

    if(cart.length === 0){
        alert("🛒 Your cart is empty!");
        return;
    }
    alert("🎉 Order placed successfully!\n\nThank you for ordering with FoodVerse 🍔");
    cart = [];
    total = 0;
    update();
    document.getElementById("cartBox").style.display = "none";
}