// Data
var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad',
'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies'];

var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'];

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'];

var letsCookBtn = document.querySelector('.btn-1');
var cookPotImg = document.querySelector('.cookpot-img');
var radio = document.querySelector('.radio')
var pHidden = document.querySelector('.content-2 p')
var h2Hidden = document.querySelector('.content-2 h2')

letsCookBtn.addEventListener('click', hidesPot); 


var randomSide = Math.floor(Math.random() * sides.length);
var randomMains = Math.floor(Math.random() * mains.length)
var randomDessert = Math.floor(Math.random() * mains.length)

console.log(sides[randomSide]);
console.log(mains[randomMains])
console.log(desserts[randomDessert])

function hidesPot() {
  cookPotImg.classList.add('hidden');
  let radio = document.forms[0];
  pHidden.classList.remove('hidden')
  h2Hidden.classList.remove('hidden')
  // h2Hidden.innerText = `${sides[randomSide]}`;
  for(var i = 0; i < radio.length; i++) {
    if(radio[0].checked) {
      console.log(radio[0].value)
      h2Hidden.innerText = `${sides[randomSide]}`;
    } else if (radio[1].checked) {
      console.log(radio[1].value)
      h2Hidden.innerText = `${mains[randomMains]}`;
    } else if (radio[2].checked) {
      console.log(radio[2].value)
      h2Hidden.innerText = `${desserts[randomDessert]}`;
    } else {
      h2Hidden.innerText = 'Nothing Here. This is the entire meal'
      console.log('Nothing Here. This is the entire meal')
    }
  }
}
















