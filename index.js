let ryanBookBtn = document.getElementById("ryanBook");
let guidBookBtn = document.getElementById("guidBook");
let ronaldBookBtn = document.getElementById("ronaldBook");
let jkBookBtn = document.getElementById("jkBook");
let ruskinBookBtn = document.getElementById("ruskinBook");
let kinneyBookBtn = document.getElementById("kinneyBook");
let dartboard = document.getElementById("dartboard");
let connect4 = document.getElementById("connect4");
let jenga = document.getElementById("jenga");
let monopoly = document.getElementById("monopoly");
let bookmarks = document.getElementById("bookmarks");
let birthdaycard = document.getElementById("birthdaycard");
let toys = document.getElementById("toys");
let catcher = document.getElementById("catcher");
let cartImg = document.getElementById("cartImg");
let cartQty = document.getElementById("cart-qty");
let totalPrice = 0;
let totalBooks = 0;
let booksList = [
    {
        "itemName":"This was our pact",
        "qty": 0,
        "price": 0
    },
    {
        "itemName":"The famous five",
        "qty": 0,
        "price": 0
    },
    {
        "itemName":"Maltida",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Harry Potter",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"For young readers",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Wimpy kid - DIY",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"DartBoard",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Connect 4",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Jenga",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Monopoly",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Bookmarks",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Birthday Card",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Stuffed Toys",
        qty: 0,
        "price": 0
    },
    {
        "itemName":"Dreamcatcher Drawing",
        qty: 0,
        "price": 0
    }
];


let ryanBookQty = 0
let ryanBookPrice = 0
ryanBookBtn.onclick = function(){
    ryanBookQty += 1;
    ryanBookPrice += 7.49;
    booksList[0].qty = ryanBookQty;
    booksList[0].price = ryanBookPrice;
    totalPrice += 7.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let guidBookQty = 0
let guidBookPrice = 0
guidBookBtn.onclick = function(){
    guidBookQty += 1;
    guidBookPrice += 4.49;
    booksList[1].qty = guidBookQty;
    booksList[1].price = guidBookPrice;
    totalPrice += 4.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let ronaldBookQty = 0
let ronaldBookPrice = 0
ronaldBookBtn.onclick = function(){
    ronaldBookQty += 1;
    ronaldBookPrice += 6.49;
    booksList[2].qty = ronaldBookQty;
    booksList[2].price = ronaldBookPrice;
    totalPrice += 6.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let jkBookQty = 0
let jkBookPrice = 0
jkBookBtn.onclick = function(){
    jkBookQty += 1;
    jkBookPrice += 10;
    booksList[3].qty = jkBookQty;
    booksList[3].price = jkBookPrice;
    totalPrice += 7.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let ruskinBookQty = 0
let ruskinBookPrice = 0
ruskinBookBtn.onclick = function(){
    ruskinBookQty += 1;
    ruskinBookPrice += 7.49;
    booksList[4].qty = ruskinBookQty;
    booksList[4].price = ruskinBookPrice;
    totalPrice += 7.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let kinneyBookQty = 0
let kinneyBookPrice = 0
kinneyBookBtn.onclick = function(){
    kinneyBookQty += 1;
    kinneyBookPrice += 4.49;
    booksList[5].qty = kinneyBookQty;
    booksList[5].price = kinneyBookPrice;
    totalPrice += 7.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let dartboardBookQty = 0
let dartboardBookPrice = 0
dartboard.onclick = function(){
    dartboardBookQty += 1;
    dartboard.Price += 17.49;
    booksList[6].qty = dartboardBookQty;
    booksList[6].price = dartboardBookPrice;
    totalPrice += 17.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let connect4BookQty = 0
let connect4BookPrice = 0
connect4.onclick = function(){
    connect4BookQty += 1;
    connect4BookPrice += 24.49;
    booksList[7].qty = connect4BookQty;
    booksList[7].price = connect4BookPrice;
    totalPrice += 24.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let jengaBookQty = 0
let jengaBookPrice = 0
jenga.onclick = function(){
    jengaBookQty += 1;
    jengaBookPrice += 26.49;
    booksList[8].qty = jengaBookQty;
    booksList[8].price = jengaBookPrice;
    totalPrice += 26.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let monopolyBookQty = 0
let monopolyBookPrice = 0
monopoly.onclick = function(){
    monopolyBookQty += 1;
    monopolyBookPrice += 19.49;
    booksList[9].qty = ryanBookQty;
    booksList[9].price = ryanBookPrice;
    totalPrice += 19.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let bookmarksBookQty = 0
let bookmarksBookPrice = 0
bookmarks.onclick = function(){
    bookmarksBookQty += 1;
    bookmarksBookPrice += 12.49;
    booksList[10].qty = bookmarksBookQty;
    booksList[10].price = bookmarksBookPrice;
    totalPrice += 12.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let birthdaycardBookQty = 0
let birthdaycardBookPrice = 0
birthdaycard.onclick = function(){
    birthdaycardBookQty += 1;
    birthdaycardBookPrice += 19.49;
    booksList[11].qty = birthdaycardBookQty;
    booksList[11].price = birthdaycardBookPrice;
    totalPrice += 19.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let toysBookQty = 0
let toysBookPrice = 0
toys.onclick = function(){
    toysBookQty += 1;
    toysBookPrice += 15.49;
    booksList[12].qty = toysBookQty;
    booksList[12].price = toysBookPrice;
    totalPrice += 15.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

let catcherBookQty = 0
let catcherBookPrice = 0
catcher.onclick = function(){
    catcherBookQty += 1;
    catcherBookPrice += 18.49;
    booksList[13].qty = catcherBookQty;
    booksList[13].price = catcherBookPrice;
    totalPrice += 18.49;
    totalBooks += 1;
    cartQty.textContent = totalBooks;
}

cartImg.onclick = function(){
    for(let eachItem of booksList){
        if(eachItem.qty == 0){
            continue
        }else{
            console.log("Item name: " + eachItem.itemName + " - Quantity: " + eachItem.qty);
        }
    }
    console.log("The total amount is: " + Math.trunc(totalPrice) + " $ and " + Math.round(Number(totalPrice.toString().split('.')[1]),2) + " cents");
    let message = "Order Details: ";
  
    for (let eachItem of booksList) {
      if (eachItem.qty === 0) {
        continue;
      } else {
        message +=
          eachItem.itemName +
          " - Quantity: " +
          eachItem.qty +
          " ";
      }
    }
  
    message +=
      " Total Amount: $" +
      Math.trunc(totalPrice) +
      " and " +
      Math.round(
        Number(totalPrice.toString().split(".")[1]),
        2
      ) +
      " cents";
  
    window.open("https://wa.me/+1234567890/?text=" + message);

}



  