document.getElementById('donation-btn').addEventListener('click',function(){
    const donation = getInputFieldValueById('donation-amount');
    const amount = parseFloat(donation);

    if(isNaN(amount))
    {
        alert('Wrong input.Try Again.');
        return ;
    }
   
    const current = getInputTextValueById('available-balance');
    const currentAmount = parseFloat(current);

    const balance = amount + currentAmount;
    document.getElementById('available-balance').innerText = balance;
 
    const main = getInputTextValueById('main-balance');
    const mainBalance = parseFloat(main);
    if(amount > mainBalance)
        {
            alert('Wrong input.Try Again.');
            return ;
    
        }
    const currentBalance = mainBalance - donation;
    document.getElementById('main-balance').innerText = currentBalance;
 
   
 })
 
 
 document.getElementById('donation-btn2').addEventListener('click',function(){
     const donation2 = getInputFieldValueById('donation-amount2');
     const amount2 = parseFloat(donation2);
    
     const current2 = getInputTextValueById('available-balance2');
     const currentAmount2 = parseFloat(current2);
     const balance2 = amount2 + currentAmount2;
     document.getElementById('available-balance2').innerText = balance2;
  
     const main = getInputTextValueById('main-balance');
     const mainBalance = parseFloat(main);
     const currenBalance2 = mainBalance - donation2;
     document.getElementById('main-balance').innerText = currenBalance2;
  
    
  })
 
 
 document.getElementById('donation-btn3').addEventListener('click',function(){
     const donation3 = getInputFieldValueById('donation-amount3');
     const amount3 = parseFloat(donation3);
    
     const current3 = getInputTextValueById('available-balance3');
     const currentAmount3 = parseFloat(current3);
     const balance3 = amount3 + currentAmount3;
     document.getElementById('available-balance3').innerText = balance3;
  
     const main = getInputTextValueById('main-balance');
     const mainBalance = parseFloat(main);
     const currenBalance3 = mainBalance - donation3;
     document.getElementById('main-balance').innerText = currenBalance3;
  
    
  })
 
 
  document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-card').classList.add('hidden');

   const historyDiv = document.createElement('div');
   historyDiv.className = "border rounded-xl p-6 mt-5";
    historyDiv.innerHTML = `
        
            <p class="font-bold mb-3">96500 Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p class="text-gray-500">${new Date().toLocaleDateString()}</p>
    `;
    document.getElementById('history').appendChild(historyDiv);
 
 });
 