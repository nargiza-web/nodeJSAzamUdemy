
const VIEW_ALL_SHOPPING_LIST_URL = 'http://localhost:3000/api/shopping-lists';
const ADD_GROCERY_ITEM_URL = 'http://localhost:3000/api/grocery-items'

const shoppingListDropDownMenu = document.querySelector('#shoppingListDropDownMenu')
const shoppingListDropDownButton = document.querySelector('#shoppingListDropDownButton')

const nameTextBox = document.querySelector('#nameTextBox')
const priceTextBox = document.querySelector('#priceTextBox')
const quantityTextBox = document.querySelector('#quantityTextBox')

const saveGroceryItemButton = document.querySelector('#saveGroceryItem')
let selectedShoppingListId = ''

saveGroceryItemButton.addEventListener('click',(e) => {
  e.preventDefault()
  saveGroceryItem()
})

function saveGroceryItem() {

  const name = nameTextBox.value
  const price = parseFloat(priceTextBox.value)
  const quantity = parseInt(quantityTextBox.value)

  fetch(ADD_GROCERY_ITEM_URL,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      price: price,
      quantity: quantity,
      shoppingListId: selectedShoppingListId
    })
  }).then(response => response.json())
  .then(json => {
    window.location = 'view-all-shopping-lists.html'
  })


}

document.addEventListener('DOMContentLoaded',(event) => {
  populateShoppingListsInDropDownList()
})

function selectShoppingList(shoppingListId, name) {
  shoppingListDropDownButton.innerHTML = name
  selectedShoppingListId = shoppingListId
}

function populateShoppingListsInDropDownList() {

  fetch(VIEW_ALL_SHOPPING_LIST_URL)
  .then(response => response.json())
  .then(shoppingLists => {

  const shoppingListItems = shoppingLists.map((shoppingList) => {
      return `<li class="dropdown-item"
      onclick="selectShoppingList('${shoppingList._id}','${shoppingList.name}')"
      >${shoppingList.name}</li>`
    })

    shoppingListDropDownMenu.innerHTML = shoppingListItems.join('')

  })

}
