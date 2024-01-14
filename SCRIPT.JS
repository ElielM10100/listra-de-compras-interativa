function addItem() {
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

    if (itemInput.value.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            ${itemInput.value}
            <button onclick="removeItem(this)">Remover</button>
        `;
        shoppingList.appendChild(newItem);
        itemInput.value = '';
    }
}

function removeItem(button) {
    const item = button.parentNode;
    item.parentNode.removeChild(item);
}
