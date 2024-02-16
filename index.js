let serial = 1;
let totalPriceElement = 0;
const card = document.querySelectorAll('.card');
// console.log(card);
for (let singleCard of card){
    // console.log(singleCard);
    singleCard.addEventListener('click',function(){
        // console.log('clicked');
        const title = singleCard.querySelector('h3').innerText;
        // console.log(title);
        const price = parseInt(singleCard.querySelector('span').innerText.split(" ")[1]);
        // console.log(price);
        const product = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = serial +'. '+ title;
        serial ++;
        product.appendChild(p);
        // total price calculation 
        totalPriceElement += price;
        // console.log(totalPriceElement);
        const totalPrice = document.getElementById('totalPrice');
        totalPrice.innerText = totalPriceElement.toFixed(2);
        // console.log(totalPrice);
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click',function(){
    // console.log('clicked');
    const inputValue = document.getElementById('input-field').value;
    const input =inputValue.split(" ").join(""). toUpperCase();
    if(totalPriceElement >= 200){
        // console.log('you have discount');
        if(input ==="SELL200"){
            // console.log('discount coppon vallid');
            // discount price calculation 
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPriceElement * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);
            console.log(discountAmount);
            // payable amount find and fix
            let p1 = parseFloat(totalPrice)
            let p2 = parseFloat(discountElement);
            let payAmount = document.getElementById('total');
            payAmount.innerText = p1-p2;
            console.log(totalPrice.innerText);
            console.log(discountElement.innerText);
            console.log(payAmount.innerText);
        }
        else{
            alert('invallid cuppon cord');
        }
    }
    else{
        console.log("you don't have any discount");
    }
})