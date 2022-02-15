document.getElementById('detail-submit-btn').addEventListener('click', function(){
          const buyerDetails = document.getElementById('buyer-details-input')
          
          const buyerInfo = document.getElementById('buyer-info')
          buyerInfo.innerText = buyerDetails.value;
          buyerDetails.value = '';
    
})
// section tow start .................
document.getElementById('add-details-btn').addEventListener('click', function(){
          const tableInfo = document.getElementById('info-table')
          const inputName =document.getElementById('item-name-input')
          const inputPrice = document.getElementById('item-price-input')
          const inputQuantity = document.getElementById('item-quantity-input')
          


          const tutalPrice = parseInt(inputPrice.value) * parseInt(inputQuantity.value)
           const tr = document.createElement('tr')
           const th = document.createElement('th');
           const td = document.createElement('td');
           const td1 = document.createElement('td')
           const td2 = document.createElement('td')

           th.innerText = inputName.value
           td.innerText = inputPrice.value
           td1.innerText = inputQuantity.value
           td2.innerText = tutalPrice
          // creat tag ................
          td2.classList.add('item-tutal')

           tr.appendChild(th)
           tr.appendChild(td)
           tr.appendChild(td1)
           tr.appendChild(td2)

           tableInfo.appendChild(tr)
           inputName.value = ''
           inputPrice.value = ''
           inputQuantity.value = ''
           tutalCalculation()
         
          
})

function tutalCalculation(){
          const subtutal =  subCalculation();
          const subtutalDispaly = document.getElementById('sub-total')
          subtutalDispaly.innerText = subtutal;
          
          // tax ------
          // const tax = document.getElementById('tax')
          // const tutalTax =  subtutal * 0.2
          // tax.innerText = tutalTax

          // // grande tutal ----------
          // const grande = document.getElementById('grand-total')
          // const grandeTutal = subtutalDispaly + tax.innerText
          const tax =  subtutal * 0.2

          document.getElementById('tax').innerText = tax
          document.getElementById('grand-total').innerText = subtutal + tax 
          document.getElementById('grand-total-2').innerText = subtutal + tax
          
        
          

         
}

function subCalculation(){
          let subtutal = 0;
          const cost = document.getElementsByClassName('item-tutal');
          for(let i = 0; i < cost.length ; i++){
                    const element = cost[i];
                    let price = parseInt(element.innerText)
                    subtutal = subtutal + price

          }

          return subtutal;

}