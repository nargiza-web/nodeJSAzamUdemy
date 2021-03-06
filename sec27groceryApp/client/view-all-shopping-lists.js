const shoppingListUL = document.querySelector('#shoppingListUL')

const VIEW_ALL_SHOPPING_LIST_URL = 'http://localhost:3000/api/shopping-lists'

document.addEventListener('DOMContentLoaded', (event) => {
  populateShoppingLists()
})

function deleteShoppingList(id) {
   fetch(VIEW_ALL_SHOPPING_LIST_URL + `/${id}`, {
     method:'DELETE'
   }).then(response => response.json())
   .then(json => {
  if(json.success){
  window.location = `view-all-shopping-lists.html?id=${id}`
  }
})
}



function populateShoppingLists() {
  fetch(VIEW_ALL_SHOPPING_LIST_URL)
  .then(response => response.json())
  .then(shoppingLists => {
    
  const shoppingListItems = shoppingLists.map((shoppingList) => {
    return `<li class="list-group-item d-flex justify-content-between align-items-center"><a href="view-shopping-list.html?id=${shoppingList._id}">${shoppingList.name}
    </a>
    <button onclick = "deleteShoppingList('${shoppingList._id}')" class="btn btn-danger">Delete</button>
    <span class="badge badge-primary badge-pill">
    ${shoppingList.groceryItems.length}
    </span>
    </li>`
  })
    
  shoppingListUL.innerHTML = shoppingListItems.join('')
  
  })
  
}