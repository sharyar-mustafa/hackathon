// CARD FUNCTION *************


var data = [
    {
        
        brand: "fried chunky king",
        price: 7000,
        url: '/public/indexcardpic/wogdond.jpg'
    },
    {
        brand: "Food King",
        price: 400,
        url: '/public/indexcardpic/burger.jpg'
    },
    {
        brand: "Dost burger",
        price: 250,
        url: '/public/indexcardpic/b1.jpg'
    },
    {
        brand: "SHAN PIZZA & PASTA",
        price: 1500,
        url: '/public/indexcardpic/piza.jpg'
    },
    {
        brand: "Al Madina Fast Food",
        price: 500,
        url: '/public/indexcardpic/somosa.jpg'
    },
    {
        brand: "The Chef's Cabinet",
        price: 2500,
        url: '/public/indexcardpic/k1.jpg'
    },
    {
        brand: "Kolachi Food Centre",
        price: 2000,
        url: '/public/indexcardpic/khi.jpg'
    },
    {
        brand: "New Karachi Ice Cream",
        price: 5000,
        url: '/public/indexcardpic/cake1.jpg'
    },
 
 
 
 
 
 
 
 
];



var products = document.getElementById("products");
for (var i = 0; i < data.length; i++) {
    products.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${data[i].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].brand}</h5>
    
    <a href="../public/oder-page/oder.html" onclick="addToCart(${i})" class="btn btn-primary">Visit Restaurant</a>
  </div>
</div>
    `
}

let addToCart = (i) => {
    console.log(data[i])
}
