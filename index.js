import Vue from "vue";

var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",
    inStock: true,
    inventory: 100,

    details: ["80% cotton", "20% polyster", "Gender-neutral"]
  },

  variants: [
    {
      variantId: 2234,
      variantColor: "green",
      varianImage: "./assets/vmSocks-green.jpg"    
    },
    {
      variantId: 2235,
      variantColor: "blue",
      varianImage: "./assets/vmSocks-blue.jpg"
    }
  ],

  data: {
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
