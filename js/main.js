function toggleDialog(querySelector) {
  var dialog = document.querySelector(querySelector);
  
  dialog.toggle();
}

function addShop() {
  console.log(document.querySelector('#shopname').value);
}

window.addEventListener('polymer-ready', function(e) {
  
  var shoppingListApi = document.querySelector('shoppinglist-api');
  
  shoppingListApi.loadShops(function(e) {
    document.querySelector('template#listitem').model = {
      response: e
    }
  })
  
 
  
});