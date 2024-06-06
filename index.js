let commissionsByWeek = [3000, 2300, 400, 902, 345]; // for testing 

let commission_May15 = [300000, 432000, 123000, 356000, 523000, 987500, 567000, 232000, 239000]; //for testing

let fundsAfterPercent = [];
let totalCommissionPaid = 0;
let numberOfCommissionsPd = 0;

//calcuations 
const calcTotals = (arr, percent) => {

    for (let i = 0; i < arr.length; i++) {
        fundsAfterPercent.push(Math.ceil(arr[i] * percent));
    }
        numberOfCommissionsPd = fundsAfterPercent.reduce((total, amount) => total + amount);

    return `Your total sales this week are: ${arr}.\nYour total commission for each purchase consecutively is: 
    ${fundsAfterPercent}.\nTotal commissions paid by the office are: ${numberOfCommissionsPd}.`;
};

//squared 
const squareNums = (arr, sq) => {
    valueHolder = [];
    for (let i = 0; i < arr.length; i++) {
        valueHolder.push(Math.ceil(arr[i] * sq));
    }
    return valueHolder;
};

console.log(commission_May15)
console.log("Squared numbers")
console.log(squareNums(commission_May15, 2));
console.log("-------------------------------------------")
// let purchasePrice = prompt("Enter the total purchase price");
// let commRate = prompt("What is the total commission rate for this sale?");
// let result = purchasePrice * commRate;
//alert("The total commission for this sale is : " + result + " Your commission is: "  + result / 2);

//fibonacci  - 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987 ....
// recursion 
const fiboSeq = (num) => {
    if (num <= 1) return 1;
    return fiboSeq(num -1) + fiboSeq(num -2);
};

function fiboLoop(num){
    var a = num
    var b = 0
    var temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        console.log("a = " + a + "temp = " + temp + "b = " + b)
        num--;
    }
    return b;
}

console.log("Fibonacci");
// console.log(fiboLoop(10));
console.log(fiboLoop(7));
console.log("**********************************************")

const findValue = (arr) => {
    return arr.forEach()
}

console.log(calcTotals(commission_May15,2.5))
let principal, interest, payments, compute, monthly;

principal = parseFloat(200000)
console.log("principal: ", principal);

interest = parseFloat(2.5) / 100 / 12
//console.log("interest: ", interest);

payments = 20 * 12;
//console.log(" payments: ", payments);

compute = Math.pow( 1 + interest, payments );
//console.log(compute);

monthly = (principal * compute * interest) / (compute - 1);
console.log("Monthly: ", monthly);

console.log(monthly.toLocaleString(undefined, { maximumFractionDigits: 2 }));

console.log((monthly * payments).toLocaleString(undefined, { maximumFractionDigits: 2 }));

console.log( ((monthly * payments) - principal).toLocaleString(undefined, { maximumFractionDigits: 2 })); 

console.log(Math.pow(15,3))

// need to differentiate between when enter is 
// clicked in comm Container vs loan container 

// document.addEventListener('keypress', (event) => {
//     if (event.keyCode === 13 && commResults.DOCUMENT_NODE === 9) {
//         calculateComm();
//     } else if (event.keyCode && loanRepayment.DOCUMENT_POSITION_CONTAINS === 8) {
//         calculateLoan();
//     }
// }, false);



// VALIDATION TESTING 

function pwordLen(pword){
    if (pword.length >= 8) {
        return true;
      }
      return false;
}

const pwordLen2 = (pword) => {
    pword.length >= 8 ?true : false;
}

console.log(pwordLen("thankyou"));
console.log(pwordLen2("thank"));


//'Enter' Keycode - 0x001C
// document.addEventListener('keyup', (event)    => {
//     if (event.code == 'Enter') {
//         calculateComm();
//     }
// }, true);

// loanBtn.addEventListener('click', calculateLoan = () => {
//     let principal, interest, payments, compute, monthly;   
//     principal = parseFloat(loanAmount.value);    
//     interest = parseFloat(apr.value) / 100 / 12;
//     payments = parseFloat(loanRepayment.value) * 12; 
//     compute = Math.pow(1 + interest, payments);    
//     monthly = (principal *compute* interest) / (compute - 1);

//     monthlyPayment.innerHTML = monthly.toLocaleString(undefined, { maximumFractionDigits: 2 });    
//     loanTotal.innerHTML = (monthly * payments).toLocaleString(undefined, { maximumFractionDigits: 2 });  
//     loanInterest.innerHTML = ((monthly * payments) - principal).toLocaleString(undefined, { maximumFractionDigits: 2 });
    
    
// console.log(loanTotal);
// console.log(monthlyPayment);
// console.log(loanInterest);

// }, false);