
document.getElementById('donation-btn').addEventListener('click',function(){
    const donation = getInputFieldValueById('donation-amount');
    const amount = parseFloat(donation);

    if(isNaN(amount))
    {
        alert('Wrong input.Try Again.');
        return ;
    }
   

    const main = getInputTextValueById('main-balance');
    const mainBalance = parseFloat(main);
    if(amount > mainBalance || amount < 0)
        {
            alert('Wrong input.Try Again.');
            return ;
    
        }
        const current = getInputTextValueById('available-balance');
        const currentAmount = parseFloat(current);
    
        const balance = amount + currentAmount;
        document.getElementById('available-balance').innerText = balance;

     
    const currentBalance = mainBalance - donation;
    document.getElementById('main-balance').innerText = currentBalance;

    const modal = document.getElementById('my_modal_1');

    if (currentAmount < balance) {
        modal.showModal();
    }
    const closeModalButton = document.getElementById('close-modal-btn');
    closeModalButton.addEventListener('click', function () {
        modal.close();
    });

    makeHistory('card1', amount);
    updateHistory();
        

    })

 
 
 document.getElementById('donation-btn2').addEventListener('click',function(){
     const donation2 = getInputFieldValueById('donation-amount2');
     const amount2 = parseFloat(donation2);
     if(isNaN(amount2))
        {
            alert('Wrong input.Try Again.');
            return ;
        }
    
     
  
     const main = getInputTextValueById('main-balance');
     const mainBalance = parseFloat(main);
     if(amount2 > mainBalance || amount2 < 0)
        {
            alert('Wrong input.Try Again.');
            document.getElementById('mod-box2').classList.add('hidden');
            return ;
    
        }
        const current2 = getInputTextValueById('available-balance2');
     const currentAmount2 = parseFloat(current2);
     const balance2 = amount2 + currentAmount2;
     document.getElementById('available-balance2').innerText = balance2;
     const currenBalance2 = mainBalance - donation2;
     document.getElementById('main-balance').innerText = currenBalance2;


     const modal2 = document.getElementById('my_modal_5');

     if (currentAmount2 < balance2) {
         modal2.showModal();
     }
     const closeModalButton2 = document.getElementById('close-modal-btn2');
     closeModalButton2.addEventListener('click', function () {
         modal2.close();
     });

     makeHistory('card2', amount2);
     updateHistory();
  
    
  })
 
 
 document.getElementById('donation-btn3').addEventListener('click',function(){
     const donation3 = getInputFieldValueById('donation-amount3');
     const amount3 = parseFloat(donation3);
     if(isNaN(amount3))
        {
            alert('Wrong input.Try Again.');
            return ;
        }
    
     const current3 = getInputTextValueById('available-balance3');
     const currentAmount3 = parseFloat(current3);
     if (isNaN(currentAmount3)) {
        alert('Available balance is invalid');
        return;
    }
     const main = getInputTextValueById('main-balance');
     const mainBalance = parseFloat(main);
     if(amount3 > mainBalance || amount3 < 0)
        {
            alert('Wrong input.Try Again.');
            document.getElementById('mod-box3').classList.add('hidden');
            return ;
    
        }

        const balance3 = amount3 + currentAmount3;
     document.getElementById('available-balance3').innerText = balance3;
  
     const currentBalance3 = mainBalance - amount3;
     document.getElementById('main-balance').innerText = currentBalance3;


     const modal3 = document.getElementById('my_modal_6');

     if (currentAmount3 < balance3) {
         modal3.showModal();
     }
     const closeModalButton3 = document.getElementById('close-modal-btn3');
     closeModalButton3.addEventListener('click', function () {
         modal3.close();
     });

     makeHistory('card3', amount3);
     updateHistory();
  
    
  })
   

 

 
 

 
  

  