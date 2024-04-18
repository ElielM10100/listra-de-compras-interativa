function addItem() {
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

    if (itemInput.value.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <span>${itemInput.value}</span>
            <button onclick="removeItem(this)">Remover</button>
            <button class="concluir-button" onclick="concluirItem(this)">Concluir</button>
        `;
        shoppingList.appendChild(newItem);
        itemInput.value = '';
    }
}

function removeItem(button) {
    const item = button.parentNode;
    item.parentNode.removeChild(item);
}

function concluirItem(button) {
    const item = button.parentNode;
    const itemText = item.querySelector('span');
    itemText.style.textDecoration = 'line-through';
    button.parentNode.removeChild(button);
}
