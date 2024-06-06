let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z'];
  
let picArr = [
    "🐟",
    "🐳",
    "🐋",
    "🦈",
    "🍇",
    "🍓",
    "🫐",
    "🍒",
    "🍑",
    "🍫",
    "🍬",
    "🍭",
  ];
  

let promptuser = "Choose an item"
let userAnswer = true;
let randomNum = Math.floor(Math.random() * 26 + 1)

// alpha.forEach(element => {
//     let item = 1;
//     item++;
//     console.log("Item " + item + " " + element)
    
// });


console.log("Random Num " + randomNum);
let randomAlpha = Math.floor(Math.random() * alpha.length)

//let alphaLocaiton = alpha.findIndex(element => element == randomNum);
// console.log("Random Alpha '1' " + randomAlpha);
// console.log("Random Alpha '2' " + randomAlpha);


// function getElementIndex(value, array) {
//    let index = 0;
//    alpha.forEach((item, i) => {
//      if (item === value) {
//         index = i;
//    }
//  });
//  return index;
// }


const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

console.log("Get Random Pic " + getRandom(picArr));
console.log("Get Random Alpha " + getRandom(alpha));
// randomAlpha = getElementIndex(randomNum, alpha)
// console.log("Random Alpha '2' " + randomAlpha);