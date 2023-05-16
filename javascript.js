let heart = document.querySelector("#in-hard");
let btnAdd = document.querySelector(".plus");
let btnMinus = document.querySelector(".minus");


let add =()=>{
    let price = document.querySelector(".value");
    sum = Number(price.innerHTML);
    sum +=10;
    price.innerHTML=Number(sum)
}

btnAdd.addEventListener("click",add);


let remove =()=>{
    let price = document.querySelector(".value");
    sum = Number(price.innerHTML);
    sum -=10;
    if (sum <= -0) {
        return;
    }
    price.innerHTML=Number(sum);
}

btnMinus.addEventListener("click",remove)

let evenRed =()=>{
    
    if (heart.style.color="black") {
        heart.style.color="red";
        return;
    }
   
}

heart.addEventListener("click",evenRed)

let evenBlack=()=>{
    heart.style.color="black";
}


heart.addEventListener("dblclick",evenBlack)




