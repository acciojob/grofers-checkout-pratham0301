const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Create a new row
  const newRow = document.createElement("tr");

  // Create a cell with id="ans" for Cypress test
  const totalCell = document.createElement("td");
  totalCell.id = "ans";
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = total;

  newRow.appendChild(totalCell);
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);