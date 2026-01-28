document.addEventListener("DOMContentLoaded", function(){

let b1 = document.querySelector(".b1");
let mydiv = document.querySelector(".mydiv");

b1.addEventListener("click", function(){
    mydiv.style.backgroundColor = "blue";
});


let mydiv2 = document.querySelectorAll(".mydiv2");

mydiv2.forEach(function(item){
    item.addEventListener("click", function(){

        if (item.style.backgroundColor === "pink"){
            item.style.backgroundColor = "yellow";
            console.log("yellow - yes")
        }
        else{
            item.style.backgroundColor = "pink"; 
            console.log("pink - no")
        }
    });
});


function sliceFruit(fruit) {
  console.log('Разрезаю ' + fruit + '!')
}

let fruits = ['🍎', '🍊', '🍋', '🍓', '🥝']

fruits.forEach(sliceFruit)


const food = ['🍔', '🍟', '🍦']

food.forEach((item) => {
  console.log('Мам, купи ' + item + '!')
})







let btns = document.querySelectorAll("button");
let sc = document.querySelectorAll(".sf , .ss , .sth");

function show(section){
    sc.forEach(function(item){
        if (item.classList.contains(section)){
            item.classList.remove("none");
              console.log("проверка 1 - удаление блока ")
        }
        else{
            item.classList.add("none"); 
             console.log("проверка 2 - удаление блока ")
        }
    });
}


btns.forEach(function(itembtn){
    itembtn.addEventListener("click", function(){
        if(itembtn.classList.contains("sb1")){
            show("ss");
            console.log("1 секция")
        }
        else if(itembtn.classList.contains("sb2")){
             show("sth");
        }
        else if (itembtn.classList.contains("sb3")){
             show("sf");
        }
    })
});


show("sf");

});