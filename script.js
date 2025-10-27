document.addEventListener('DOMContentLoaded', () => {
    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);
    getSumBtn.addEventListener('click', getSum);

});

const getSum = () => {

    const priceElements = document.querySelectorAll('.price');
    
    let total = 0;

   
    priceElements.forEach(priceElement => {
        
        const priceText = priceElement.textContent;
        
        total += +priceText;
    });

    const table = document.querySelector('table');

    if (document.querySelector('#total-row')) {
      
        document.querySelector('#total-value').textContent = total;
        return;
    }

    const newRow = document.createElement('tr');
    newRow.id = 'total-row'; 
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2'); 
    
    totalCell.innerHTML = **Total Price: $<span id="total-value">${total}</span>**;
  
    newRow.appendChild(totalCell);
    
    table.appendChild(newRow);
};