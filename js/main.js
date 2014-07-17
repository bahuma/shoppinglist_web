window.addEventListener('polymer-ready', function(e) {
  var ajax = document.querySelector('core-ajax');
  
  ajax.addEventListener('core-response', function(e) {
   console.log(this.response); 
   document.querySelector('template').model = {
     response: this.response
   }
  });
});

function toggleDialog(querySelector) {
  var dialog = document.querySelector(querySelector);
  
  dialog.toggle();
}