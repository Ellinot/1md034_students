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


console.log(burger1.information(), burger2.information(), burger3.information(), burger4.information(), burger5.information(), '\n' + img1);
