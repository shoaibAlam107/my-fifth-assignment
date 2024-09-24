

document.getElementById('donate-for-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const inputMoney = getInputFieldValueById('input-amount-noakhali');
        console.log('get input value', inputMoney);
        const balance = getTextFieldById('donates-balance-noakhali');
        const newDonateBalance = balance + inputMoney;
        document.getElementById('donates-balance-noakhali').innerText = newDonateBalance;
        const accountBalance = getTextFieldById('main-balance');
        const availableBalance = accountBalance - inputMoney;
        document.getElementById('main-balance').innerText = availableBalance;


        const transactionHistory = document.createElement('p');
        transactionHistory.innerText = `${inputMoney} BDT. Donate for Flood at Noakhali, Bangladesh .
    `
        document.getElementById('Transaction-container').appendChild(transactionHistory);

        // if(isNaN(inputMoney)){
        //     alert('Invalid Donation Amount');
        //     return;
        // }
            
        // if (isNaN(inputMoney) || inputMoney <= 0) {
        //     alert('Invalid Donation Amount. Please enter a positive number.');
        //     return;
        // }




        if (isNaN(inputMoney) || inputMoney < 0 ) {
           
            alert('Invalid Donation Amount')
            return;

        }
        // else if(isNaN(inputMoney)){
        //     alert('Invalid Donation Amount');
        //     return ;
        // }
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


        if (inputMoney === Number || inputMoney > 0) {
            console.log(availableBalance)

        }
        else {
            alert('Invalid Donation Amount')
        }
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


        if (inputMoney === Number || inputMoney > 0) {
            console.log(availableBalance)

        }
        else {
            alert('Invalid Donation Amount')
        }

    });

document.getElementById('show-btn-donation')
    .addEventListener('click', function () {
        showSectionById('donation');
    });
    
    document.getElementById('show-btn-history')
        .addEventListener('click', function () {
            showSectionById('history-section');
        });

        document.getElementById('show-btn-blog')
        .addEventListener('click', function () {
          
            window.location.href = '/blog.html';
        });
 


