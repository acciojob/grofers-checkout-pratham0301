const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove previous total row if exists
  const oldTotalRow = document.getElementById("totalRow");
  if (oldTotalRow) oldTotalRow.remove();

  // Get all prices (with class "price")
  const priceCells = document.querySelectorAll(".price");
  let total = 0;
  priceCells.forEach(cell => {
    // Get text content and convert to number
    const value = parseInt(cell.textContent, 10);
    total += isNaN(value) ? 0 : value;
  });

  // Create new row and cell for total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow";
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: " + total;
  totalRow.appendChild(totalCell);

  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);