// Array to store shopping list items
const shoppingListArray = [];

// Select DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const shoppingList = document.getElementById('shoppingList');
const clearButton = document.getElementById('clearButton');

// Function to render the shopping list
function renderList() {
  // Clear the existing list
  shoppingList.innerHTML = '';

  // Loop through the array and create list items
  shoppingListArray.forEach((item, index) => {
    const listItem = document.createElement('li');

    // Set the text content
    listItem.textContent = item.name;

    // Apply purchased class if the item is marked as purchased
    if (item.purchased) {
      listItem.classList.add('purchased');
    }

    // Add click event to toggle purchased state
    listItem.addEventListener('click', () => {
      shoppingListArray[index].purchased = !shoppingListArray[index].purchased;
      renderList(); // Re-render the list
    });

    shoppingList.appendChild(listItem);
  });
}

// Add a new item to the shopping list
addButton.addEventListener('click', () => {
  const itemText = itemInput.value.trim();

  if (itemText === '') {
    alert('Please enter an item!');
    return;
  }

  // Add the new item to the array
  shoppingListArray.push({ name: itemText, purchased: false });

  // Clear the input field
  itemInput.value = '';

  renderList(); // Re-render the list
});

// Clear the shopping list
clearButton.addEventListener('click', () => {
  shoppingListArray.length = 0; // Clear the array
  renderList(); // Re-render the list
});
