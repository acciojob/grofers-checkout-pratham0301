const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
      const priceElements = document.querySelectorAll('.prices');
    let total = 0;
    priceElements.forEach(el => {
        // Remove anything that's not a digit, dot, or minus sign
        total += Number(el.textContent.replace(/[^0-9.-]/g, ""));
    });
    // Add total row logic
    const table = document.querySelector('table');
    let totalRow = document.getElementById('totalRow');
    if (totalRow) totalRow.remove(); // Remove previous, if exists
    totalRow = document.createElement('tr');
    totalRow.id = 'totalRow';
    const totalCell = document.createElement('td');
    // Use template literal with backticks!
    totalCell.textContent = Total Price: ${total};
    // Make sure cell spans all columns
    totalCell.colSpan = priceElements.length > 0 ? priceElements[0].parentElement.children.length : 1;
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};


getSumBtn.addEventListener("click", getSum);

