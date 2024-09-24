

document.getElementById('donate-for-noakhali')
.addEventListener('click' , function(event){
    event.preventDefault()
    const inputMoney =getInputFieldValueById('input-amount-noakhali');
    console.log('get input value',inputMoney);
    const balance = getTextFieldById('donates-balance-noakhali');
    const newDonateBalance = balance + inputMoney ;
     document.getElementById('donates-balance-noakhali').innerText = newDonateBalance ;
    const accountBalance = getTextFieldById('main-balance');
    const availableBalance = accountBalance - newDonateBalance ;
    document.getElementById('main-balance').innerText = availableBalance;
    

    // if(inputMoney === Number){
      
    // }
    // else{
    //     alert('wrong input')
    // }

});

document.getElementById('donate-for-feni')
.addEventListener('click' , function(event){
    event.preventDefault()
    const inputMoney =getInputFieldValueById('input-amount-feni');
    console.log('get input value',inputMoney);
    const balance = getTextFieldById('donates-balance-feni');
    const newDonateBalance = balance + inputMoney ;
     document.getElementById('donates-balance-feni').innerText = newDonateBalance ;
    const accountBalance = getTextFieldById('main-balance');
    const availableBalance = accountBalance - newDonateBalance ;
    document.getElementById('main-balance').innerText = availableBalance;
    

    // if(inputMoney === Number){
      
    // }
    // else{
    //     alert('wrong input')
    // }

});


document.getElementById('donate-for-student')
.addEventListener('click' , function(event){
    event.preventDefault()
    const inputMoney =getInputFieldValueById('input-amount-student');
    console.log('get input value',inputMoney);
    const balance = getTextFieldById('donates-balance-student');
    const newDonateBalance = balance + inputMoney ;
     document.getElementById('donates-balance-student').innerText = newDonateBalance ;
    const accountBalance = getTextFieldById('main-balance');
    const availableBalance = accountBalance - newDonateBalance ;
    document.getElementById('main-balance').innerText = availableBalance;
    

    // if(inputMoney === Number){
    //   console.log('enter amount',inputMoney);
    // }
    // else{
    //     alert('wrong input')
    // }

});

document.getElementById('show-btn-donation')
.addEventListener('click',function(){
    showSectionById('donation');
})

document.getElementById('show-btn-blog')
.addEventListener('click',function(){
    showSectionById('blog-section');
})


document.getElementById('show-btn-history')
.addEventListener('click',function(){
    showSectionById('history-section');
})






