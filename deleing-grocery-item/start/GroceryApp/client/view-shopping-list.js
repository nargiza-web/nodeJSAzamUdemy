
const GROCERY_ITEMS_BY_SHOPPING_LIST_ID = 'http://localhost:3000/api/shopping-lists'

const shoppingListTitleHeading = document.querySelector('#shoppingListTitleHeading')
const groceryItemsUL = document.querySelector('#groceryItemsUL')

document.addEventListener('DOMContentLoaded', (e) => {
  const urlParams = new URLSearchParams(window.location.search)
  const shoppingListId = urlParams.get('id')
  populateShoppingListsBy(shoppingListId)
})

function populateShoppingListsBy(shoppingListId) {

  fetch(GROCERY_ITEMS_BY_SHOPPING_LIST_ID + `/${shoppingListId}`)
  .then(response => response.json())
  .then(shoppingList => {

    shoppingListTitleHeading.innerHTML = shoppingList.name 

    const groceryItemsLI = shoppingList.groceryItems.map((groceryItem) => {
      return `<li class="list-group-item">${groceryItem.name}</li>`
    })

    if(groceryItemsLI.length == 0) {
      groceryItemsUL.innerHTML = `<div class="alert alert-primary" role="alert">
        No grocery items found!
      </div>`
    } else {
        groceryItemsUL.innerHTML = groceryItemsLI.join('')
    }



  })

}
