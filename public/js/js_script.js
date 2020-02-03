function menuItem(name, info, allergy){
this.name = name; // The this keyword refers to the object itself
this.allergy = allergy;
this.info = info;
this.information = function() {
    return this.info + ' ' + this.allergy;
};
}

let burger1 = new menuItem('Original burger', 'Cheddar cheese \nRoman lettuce, tomatoe and onion \nSourdough bread', '(gluten free)');

let burger2 = new menuItem('Vegan burger', 'Vegan cheddar \nLettuce, tomatoe and red cabbage \nRhye bread', '(lactose free)');

let burger3 = new menuItem('Mushroom burger', 'Cheddar cheese, Portabello, spinach & grilled tomatoe \nWheat bread', '(contains gluten)');

let burger4 = new menuItem('Cheese burger', 'Mozarella, Pickled onion, cucumber \nWheat bread', '(contains gluten)');

let burger5 = new menuItem('Spicy burger', 'jalapeños, chili, garlic \nSourdough bread', '(lactose free)');


let img1 = document.getElementById('./img/burgler1.png');



var menu = [burger1, burger2, burger3, burger4, burger5];

var id = document.getElementById("menu");

for (var burger of menu){
let listItem = document.createElement("li");

if(burger.gluten == 'true'){
listItem.innerHTML = burger.information() + ' ' + "contains gluten";
}
else if (burger.gluten == 'false'){
listItem.innerHTML = burger.information();
}
else if (burger.lactose == 'true') {
listItem.innerHTML = burger.information() + ' ' + "contains lactose";
}
else {
listItem.innerHTML = burger.information();
}
id.appendChild(listItem);
}


/*
document.getElementById("myID").innerHTML = "Välj en burgare";

var burgerOne = document.createElement('p');
burgerOne.innerHTML = burger1.information();
document.getElementById("myID").appendChild(burgerOne); */
