function toggleDialog(querySelector) {
  var dialog = document.querySelector(querySelector);
  
  dialog.toggle();
}

function addShop() {
  console.log(document.querySelector('#shopname').value);
  var shoppingListApi = document.querySelector('shoppinglist-api');
  
  shoppingListApi.addShop(document.querySelector('#shopname').value, function(data){
    console.log(data);
  });
}

window.addEventListener('polymer-ready', function(e) {
  
  var shoppingListApi = document.querySelector('shoppinglist-api');
  
  shoppingListApi.loadShops(function(data) {
    document.querySelector('template#listitem').model = {
      items: data
    }
  })
});