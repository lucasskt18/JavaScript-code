var itens = []; // global vector to store order items

function swapItem () {
    // create reference to select elements
    var inPizza = document.getElementById("inPizza");
    var inDrink = document.getElementById("inDrink");

    // if it is marked
    if (rbPizza.checked) {
        inBebida.className = 'hidden'; // hidden drinks select
        inPizza.className = 'displays' // displays select pizzas
        } else {
        inPizza.className = 'hidden' // hide the pizzas
        inDrink.className = 'displays' // show off the drinks

      }
  }
    // creates reference to radiobutton's and associates function to change event
    var rbPizza = document.getElementById("rbBebida"); 
    rbPizza.addEventListener("change", swapItem);

    var rbDrink = document.getElementById("rDrink");
    rbDrink = addEventListener("change", swapItem);