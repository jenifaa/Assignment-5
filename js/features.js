
const historyCards = {
    card1 : [],
    card2 : [],
    card3 : []
  };
  function makeHistory(cardId, moneyAmount)
  {
    const date = new Date().toLocaleString();
    historyCards[cardId].push({moneyAmount, date});
  }
  function updateHistory(){
    const card1History = document.getElementById('card1-history');
    const card2History = document.getElementById('card2-history');
    const card3History = document.getElementById('card3-history');



    card1History.innerHTML = '';
    card2History.innerHTML = '';
    card3History.innerHTML = '';

    historyCards.card1.forEach((historyCard) => {
        const div = document.createElement('div');
        div.classList.add('border' , 'p-5' , 'rounded-xl', 'mb-3');
        div.innerHTML = `
        <p class="font-bold mb-3">${historyCard.moneyAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
        <p>Date : ${historyCard.date}</p>

        `;
        card1History.appendChild(div);
        
    })
    historyCards.card2.forEach((historyCard) => {
        const div = document.createElement('div');
        div.classList.add('border' , 'p-5' , 'rounded-xl', 'mb-3');
        div.innerHTML = `
        <p class="font-bold">${historyCard.moneyAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
        <p>Date : ${historyCard.date}</p>

        `;
        card2History.appendChild(div);
        
    })
    historyCards.card3.forEach((historyCard) => {
        const div = document.createElement('div');
        div.classList.add('border' , 'p-5' , 'rounded-xl', 'mb-3');
        div.innerHTML = `
        <p class="font-bold">${historyCard.moneyAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p>Date : ${historyCard.date}</p>

        `;
        card3History.appendChild(div);
        
    })
  }
  document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donation-card').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('show-donation').classList.remove('bg-button-colore');
    document.getElementById('history-btn').classList.add('bg-button-colore');

    updateHistory(); 
});

document.getElementById('show-donation').addEventListener('click', function () {
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donation-card').classList.remove('hidden');
    document.getElementById('show-donation').classList.add('bg-button-colore');
    document.getElementById('history-btn').classList.remove('bg-button-colore');

});