
const detailsButton = document.getElementById('detail-submit-btn')
      detailsButton.addEventListener('click', function(){
                const buyerDetails = document.getElementById('buyer-details-input')
                document.getElementById('buyer-info').innerText = buyerDetails.value
                buyerDetails.value = ''
      })

//       clsoe section

const addProductBtn = document.getElementById('add-details-btn')
addProductBtn.addEventListener('click', function(){
       
          const infoTable = document.getElementById('info-table')
          // get input
          const itemName = document.getElementById('item-name-input')
          const itemPrice = document.getElementById('item-price-input')
          const itemQuantity = document.getElementById('item-quantity-input')

          // dainamic value add
          /*  <tr>
          <th >1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
      </tr>   */
      const tutalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value)

          let tr = document.createElement('tr');
          let th = document.createElement('th');
          let td1 = document.createElement('td');
          let td2 = document.createElement('td')
          let td3 = document.createElement('td')
          td3.classList.add = 'item-tutal'
          // value add 
          th.innerText = itemName.value;
          td1.innerText = itemPrice.value;
          td2.innerText = itemQuantity.value
          td3.innerText = tutalPrice;

          // value tansfram 
          tr.appendChild(th);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3); 
          infoTable.appendChild(tr);
          totalCalculation()
        
})
function totalCalculation(){
          const tutal = calculateSubTotal()
          const subTutalDisplay = document.getElementById('sub-total')
          subTutalDisplay.innerText = tutal;
 

          return subTutalDisplay.innerText
          

   
}


function calculateSubTotal(){
          let subtutal = 0
          const cost = document.getElementsByClassName('item-tutal')
          for (let i = 0; i < cost.length; i++) {
                    const element = cost[i];
                 let   price = parseInt(element.innerText)
                    subtutal =  subtutal + price
                    
          }
          return subtutal;
}

