//Add an array of sizes to the data and use v-for to display them in a list. 

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
    inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'    
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['small', 'medium', 'big', 'extra big']
  } 
})