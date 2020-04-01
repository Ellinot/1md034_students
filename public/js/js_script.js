/*answers.push("hej");
answers.push("doj");

var name = document.getElementById("firstname").value;
answers.push(name);

console.log(answers[1]);
console.log(answers[2]);
console.log((answers).length);

document.getElementById("order-button").addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log("Button clicked!");
}

function validInput() {
var answers = [];
var name = document.getElementById("firstname").value;
var email = document.getElementById("email").value.indexOf("@");
var street = document.getElementById("street").value;
var house = document.getElementById("house").value;
submitOK = "true";

if (name.length > 10) {
  alert("The name may have no more than 10 characters");
  submitOK = "false";
}

if (email == -1) {
  alert("Not a valid e-mail!");
  submitOK = "false";
}

if (isNaN(street) || street < 1) {
  alert("The street number must be a number greater than 0");
  submitOK = "false";
}

if (isNaN(house) || house < 1) {
  alert("The house number must be a number greater than 0");
  submitOK = "false";
}

if (submitOK == "false") {
  return false;
}
answers.push(name);
answers.push(email);
answers.push(street);
answers.push(house);
console.log(answers[1]);
console.log((answers).length);
}
console.log(validInput);

var answerArray=[document.getElementById('firstname').value, document.getElementById('email').value, document.getElementById('street').value, document.querySelector("input[name=gender]:checked").value]
*/
//document.querySelector("input[name=gender]:checked").value

//console.log(answerArray);

/*function menuItem(name, img, ingredients, gluten, lactose, kcal){
this.name = name; // The this keyword refers to the object itself
this.img = img;
this.ingredients = ingredients;
this.gluten= gluten;
this.lactose = lactose;
this.kcal = kcal;

this.information = function() {

    return this.ingredients + this.kcal;
};
}



let burger1 = new menuItem('Original burger', './img/burgler1.png', 'Cheddar cheese \nRoman lettuce, onion \n,Sourdough bread', false, true, 'kcal: 2200');

let burger2 = new menuItem('Vegan burger', './img/burgler2.png', 'Vegan cheddar \nLettuce, red cabbage \n,Rhye bread', false, false, 'kCal: 790');

let burger3 = new menuItem('Mushroom burger', './img/burgler3.png', 'Cheddar cheese, Portabello, grilled tomatoe \n,Wheat bread', true, true, 'kCal: 1015');

let burger4 = new menuItem('Cheese burger', './img/burgler4.png', 'Mozarella, Pickled onion, cucumber \n,Wheat bread', true, false, 'kCal: 1700');

let burger5 = new menuItem('Spicy burger', './img/burgler6.png', 'jalapeños, chili, garlic, tortilla \n,Sourdough bread', false, true, 'kCal: 2400');

let burger6 = new menuItem('Green burger', './img/burgler5.png', 'Cheddar cheese, vegetables, \n, Wheat bread', false, false, 'kCal: 1200'); *

var menu = [burger1, burger2, burger3, burger4, burger5, burger6];
*/



/*
var id = document.getElementById("menu");

for (var burger of menu){
let burgerInfo = document.createElement("div");
let box = document.createElement("div");

let header = document.createElement("h4");
header.innerHTML = burger.name;
header.style.marginBottom = "0.5em";

let img = document.createElement("IMG");
img.src = burger.img;
img.height = "260";

let list = document.createElement("ul");
let listingredients = document.createElement("li");
let listkcal = document.createElement("li");
let containsGluten = document.createElement("li");
let containsLactose = document.createElement("li");
let containsLactGlut = document.createElement("li");
let glutenText = document.createTextNode("Contains gluten");
let lactoseText = document.createTextNode("Contains lactose");
let lactGlutText = document.createTextNode("Contains gluten & lactose");
listingredients.innerHTML = burger.ingredients;
listkcal.innerHTML = burger.kcal;


box.appendChild(header).style.textAlign = "center";
box.appendChild(img);
box.appendChild(list);
list.appendChild(listingredients);
list.appendChild(listkcal);

if(burger.gluten && burger.lactose){
containsLactGlut.appendChild(lactGlutText);
list.appendChild(containsLactGlut).style.fontStyle = "italic";
}
if(burger.gluten && !burger.lactose){
containsGluten.appendChild(glutenText);
list.appendChild(containsGluten).style.fontStyle = "italic";
}
if (burger.lactose && !burger.gluten) {
containsLactose.appendChild(lactoseText);
list.appendChild(containsLactose).style.fontStyle = "italic";
}

document.getElementById("grid").appendChild(box);

} */
