// CARD FUNCTION *************


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  
  var   brand= getElementById("brand")
  var   price = getElementById("price")
  var   url = getElementById("url")


  // Save message
  saveMessage(Username, email, country, phone, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(Username, email, country, phone, password) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Username: Username,
    email: email,
    country: country,
    phone: phone,
    password: password
  });
}


  //END OF CODE//


var data = [
    {
        
        brand: "fried chunky king",
        price: 7000,
        url: '/indexcardpic/wogdond.jpg'
    },
    {
        brand: "Food King",
        price: 400,
        url: '/indexcardpic/burger.jpg'
    },
    {
        brand: "Dost burger",
        price: 250,
        url: '/indexcardpic/b1.jpg'
    },
    {
        brand: "SHAN PIZZA & PASTA",
        price: 1500,
        url: '/indexcardpic/piza.jpg'
    },
    {
        brand: "Al Madina Fast Food",
        price: 500,
        url: '/indexcardpic/somosa.jpg'
    },
    {
        brand: "The Chef's Cabinet",
        price: 2500,
        url: '/indexcardpic/k1.jpg'
    },
    {
        brand: "Kolachi Food Centre",
        price: 2000,
        url: '/indexcardpic/khi.jpg'
    },
    {
        brand: "New Karachi Ice Cream",
        price: 5000,
        url: '/indexcardpic/cake1.jpg'
    },
 
 
 
 
 
 
 
 
];



var products = document.getElementById("products");
for (var i = 0; i < data.length; i++) {
    products.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${data[i].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].brand}</h5>
    <p class="card-text">${data[i].price}</p>
    <a href="#" onclick="addToCart(${i})" class="btn btn-primary">Oder Now</a>
  </div>
</div>
    `
}

let addToCart = (i) => {
    console.log(data[i])
}
