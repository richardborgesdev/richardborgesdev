//Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
    link: 'http://www.google.com'
  } 
})