document.addEventListener('DOMContentLoaded', () => {
    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        const priceElements = document.querySelectorAll('.price'); // Change to .price
        let total = 0;
        priceElements.forEach(el => {
            total += Number(el.textContent.replace(/[^0-9.-]/g, ""));
        });

        const table = document.querySelector('table');
        let totalRow = document.getElementById('totalRow');
        if (totalRow) totalRow.remove(); // Remove previous, if exists
        totalRow = document.createElement('tr');
        totalRow.id = 'totalRow';
        const totalCell = document.createElement('td');
        totalCell.textContent = `Total Price: ${total}`; // Use backticks
        totalCell.colSpan = priceElements.length > 0 ? priceElements[0].parentElement.children.length : 1;
        totalRow.appendChild(totalCell);
        table.appendChild(totalRow);
    };

    getSumBtn.addEventListener("click", getSum);
});