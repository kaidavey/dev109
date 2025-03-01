function addItem() {
    // Stop the page from reloading
    event.preventDefault();

    // Store the text element from form to be added
    var item = document.getElementById('item');

    // Create a new element and store it in a variable.
    var listItem = document.createElement('li');

    // Create a text node and store it in a variable.
    var text = document.createTextNode(item.value);

    // Attach the new text node to the new element.
    listItem.appendChild(text);

    // Find the list where the new element should be added.
    var list = document.getElementsByTagName('ul')[0];

    // Insert the new element into its position.
    list.appendChild(listItem);

    // Clear the text box when finished adding item
    item.value = "";
}