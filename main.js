// Data
var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad',
'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies'];

var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'];

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'];

var letsCookBtn = document.querySelector('.btn-1');
var cookPotImg = document.querySelector('.cookpot-img');
var radio = document.querySelector('.radio')
// var sideRadioBtn = document.querySelector('#radio-1');
// var mainRadioBtn = document.querySelector('#radio-2')
// var dessertRadioBtn = document.querySelector('#radio-3')
// var entireRadioBtn = document.querySelector('#radio-4')


letsCookBtn.addEventListener('click', hidesPot); 

function hidesPot() {
  cookPotImg.classList.add('hidden');
  // console.log('clicked');
  let radio = document.forms[0];

  for(var i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
      console.log(radio[i].value)
    }
  }

}
















