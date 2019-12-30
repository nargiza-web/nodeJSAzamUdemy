const GROCERY_ITEMS_BY_SHOPPING_LIST_ID = 'http://localhost:3000/api/shopping-lists'
const DELETE_GROCERY_ITEM_BY_ID = 'http://localhost:3000/api/grocery-items'

const shoppingListTitleHeading = document.querySelector('#shoppingListTitleHeading')
const groceryItemsUL = document.querySelector('#groceryItemsUL')
let shoppingListId = ''

document.addEventListener('DOMContentLoaded', (e) => {
  const urlParams = new URLSearchParams(window.location.search)
  shoppingListId = urlParams.get('id')
  populateShoppingListsBy(shoppingListId)
})

function deleteGroceryItem(id) {
     fetch(DELETE_GROCERY_ITEM_BY_ID + `/${id}`, {
       method:'DELETE'
     }).then(response => response.json())
     .then(json => {
     if(json.success){
     window.location = `view-shopping-list.html?id=${shoppingListId}`
     }
   })
  }

function populateShoppingListsBy(shoppingListId) {
  fetch(GROCERY_ITEMS_BY_SHOPPING_LIST_ID + `/${shoppingListId}`)
  .then(response => response.json())
  .then(shoppingList => {
    
    shoppingListTitleHeading.innerHTML = shoppingList.name
    
    const groceryItemsLI = shoppingList.groceryItems.map((groceryItem) => {
      return `<li class="list-group-item d-flex justify-content-between align-items-center">${groceryItem.name}
      <button onclick = "deleteGroceryItem('${groceryItem._id}')" class="btn btn-danger">Delete</button>
      </li>`
    })
    
    if(groceryItemsLI.length == 0){
      groceryItemsUL.innerHTML = `<div class="alert alert-primary" role="alert">No grocery items found!
      </div>`
    } else {
      groceryItemsUL.innerHTML = groceryItemsLI.join('')
    }
  })
}
