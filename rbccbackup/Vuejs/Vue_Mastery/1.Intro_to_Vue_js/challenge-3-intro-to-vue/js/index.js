//Add an onSale property to the data, and use it to conditionally render a span that says “On Sale!”

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
    inStock: true,
    onSale: true
  } 
})