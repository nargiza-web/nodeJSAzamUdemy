
const nameTextBox = document.querySelector("#nameTextBox")
const addressTextBox = document.querySelector("#addressTextBox")
const saveShoppingListButton = document.querySelector("#saveShoppingListButton")

const ADD_SHOPPING_LIST_URL = 'http://localhost:3000/api/shopping-lists'

saveShoppingListButton.addEventListener('click',(e) => {
  e.preventDefault()
  saveShoppingList()
})

function saveShoppingList() {

  const name = nameTextBox.value
  const address = addressTextBox.value

  fetch(ADD_SHOPPING_LIST_URL,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      address: address
    })
  }).then(response => response.json())
  .then(json => {
      window.location = 'view-all-shopping-lists.html'
  })

}
