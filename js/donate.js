

document.getElementById('donate-for-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const inputMoney = getInputFieldValueById('input-amount-noakhali');
        
        const balance = getTextFieldById('donates-balance-noakhali');
        const newDonateBalance = balance + inputMoney;
        document.getElementById('donates-balance-noakhali').innerText = newDonateBalance;
        const accountBalance = getTextFieldById('main-balance');
        const availableBalance = accountBalance - inputMoney;
        document.getElementById('main-balance').innerText = availableBalance;


        const transactionHistory = document.createElement('p');
        transactionHistory.innerText = `${inputMoney} BDT. Donate for Flood at Noakhali, Bangladesh.
        ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        document.getElementById('Transaction-container').appendChild(transactionHistory);
        
                if (isNaN(inputMoney) || inputMoney > accountBalance) {
                    alert('Invalid Donation Amount')
                    return;
                }
        
                else {
                    console.log(availableBalance);
                }
        
            });

        
        
           
        

document.getElementById('donate-for-feni')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const inputMoney = getInputFieldValueById('input-amount-feni');
        console.log('get input value', inputMoney);
        const balance = getTextFieldById('donates-balance-feni');
        const newDonateBalance = balance + inputMoney;
        document.getElementById('donates-balance-feni').innerText = newDonateBalance;
        const accountBalance = getTextFieldById('main-balance');
        const availableBalance = accountBalance - inputMoney;
        document.getElementById('main-balance').innerText = availableBalance;
        
        const transactionHistory = document.createElement('p');
        transactionHistory.innerText = `${inputMoney} BDT.Donate for Flood Relief in Feni,Bangladesh.
        ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        document.getElementById('Transaction-container').appendChild(transactionHistory);


    //     if (inputMoney === Number || inputMoney > 0) {
    //         console.log(availableBalance)

    //     }
    //     else {
    //         alert('Invalid Donation Amount')
    //     }
     });


document.getElementById('donate-for-student')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const inputMoney = getInputFieldValueById('input-amount-student');
        console.log('get input value', inputMoney);
        const balance = getTextFieldById('donates-balance-student');
        const newDonateBalance = balance + inputMoney;
        document.getElementById('donates-balance-student').innerText = newDonateBalance;
        const accountBalance = getTextFieldById('main-balance');
        const availableBalance = accountBalance - inputMoney;
        document.getElementById('main-balance').innerText = availableBalance;
        
        const transactionHistory = document.createElement('p');
        transactionHistory.innerText = `${inputMoney} BDT.Aid for Injured in the Quota Movement.
        ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        document.getElementById('Transaction-container').appendChild(transactionHistory);


        // if (inputMoney === Number || inputMoney > 0) {
        //     console.log(availableBalance)

        // }
        // else {
        //     alert('Invalid Donation Amount')
        // }

   });

    const showDonate = document.getElementById('show-btn-donation');
    const history = document.getElementById('show-btn-history');
    history.addEventListener('click', function(){
        history.classList.add('bg-[#B4F461]');
       
        showDonate.classList.remove('bg-[#B4F461]')
        document.getElementById('donation').classList.add('hidden');
        document.getElementById('history-section').classList.remove('hidden');
    });

    
    showDonate.addEventListener('click', function(){
        showDonate.classList.add('bg-[#B4F461]');
        history.classList.remove('bg-[#B4F461]')
        document.getElementById('donation').classList.remove('hidden')
        document.getElementById('history-section').classList.add('hidden');
    });
    




        document.getElementById('show-btn-blog')
        .addEventListener('click', function () {
          
            window.location.href = 'blog.html';
        });