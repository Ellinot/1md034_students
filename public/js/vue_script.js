'use strict';
const socket = io();

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
    orderHidden: true,
    showButton: true,
    loading: false,
    orders: {},
    burgerArr: [],
    orderId: 1,
  },


  methods: {

     viewOrder: function() {
      this.orderHidden = false;
    },


    hide: function() {
      this.orderHidden = true;
      this.showButton = true;
    },

    getDeliveryLocation: function (burgerArr){
      var deliveryLocations=[];
      for(var i = 0; i < burgerArr.length; i++) {
        deliveryLocations[i+1] = burgerArr[i];
      }
      return deliveryLocations;
    },


    addOrder: function(event) {

      if(document.querySelector("input[name=burgerCheck]:checked") == null){
        alert("You must choose a burger to place an order!");
      }

      else{
        var burgers = document.getElementsByName('burgerCheck');
        this.burgerArr = [];
        for(var i = 0; i < burgers.length; i++) {
          if(burgers[i].checked) {
            this.burgerArr[this.burgerArr.length] = burgers[i].value
          }
        }

        this.showButton = false;
        this.loading = true;

         setTimeout(() =>{
           this.orderHidden = false;
           this.loading = false;
       }, 2000);


        socket.emit('addOrder', {
          orderId: this.orderId,
          details: this.orders[0].details,
          customerInfo: [this.name, this.email, this.payment],
          orderItems: this.getDeliveryLocation(this.burgerArr),
          orderInfo: [this.burgerArr[0], this.burgerArr[1], this.burgerArr[2], this.burgerArr[3], this.burgerArr[4]],
        });
        this.orderId += 1;
      }
    },


    displayOrder: function(event) {
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      Vue.set(this.orders, 0, { details: {
        x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y,
      }});
    }

  }
})
