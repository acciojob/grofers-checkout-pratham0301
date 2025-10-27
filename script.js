const getSum = () => {
    // 1. Select all elements with class 'prices'
    const priceElements = document.querySelectorAll('.prices');
    let total = 0;
    // 2. Loop through them and sum their text content
    priceElements.forEach(el => {
        total += Number(el.textContent);
    });
    // 3. Create a new row and cell for total if not already present
    const table = document.querySelector('table');
    let totalRow = document.getElementById('totalRow');
    if (totalRow) totalRow.remove(); // Remove previous total row if exists
    totalRow = document.createElement('tr');
    totalRow.id = 'totalRow';
    const totalCell = document.createElement('td');
    totalCell.colSpan = priceElements.length > 0 ? priceElements[0].parentElement.children.length : 1;
    totalCell.textContent = Total Price: ${total};
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};