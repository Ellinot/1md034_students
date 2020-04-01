
/*const vm = new Vue({
  el: '#burgers',
  data: {
    burgers: food,
  },
})
*/

const vm = new Vue ({
  el: '#wrapper',
  data: {
    burgers: food,
    name: "",
    email: "",
    street: "",
    house: "",
    payment: "",
    gender:"",
    burgerChoice: [],
    orderHidden: true
  },

  methods: {
  viewOrder: function() {
    this.orderHidden = false;
  },
}

  })
