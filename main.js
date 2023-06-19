var favs=Array.from(document.querySelectorAll(".fa-heart"));
var  deletebtns=Array.from(document.querySelectorAll(".fa.trash.alt"));
var cards=Array.from(document.querySelectorAll(".cards"));
var plusbtns=Array.from(document.querySelectorAll(".fa.plus.circle"));
var minusbtns=Array.from(document.querySelectorAll(".fa.min"));

for (let fav of favs)
(
    fav.addEventListener("click",
    function(){
        if (fav.style.color=="black"){
            fav.style.color="red"
        } else {
            fav.style.color="black"
        }
    }
    )
)
/* delete /
for (let i in deletebtns){
    deleteBtns[i].addEventListener("click",
     function(){
        cards[i].remove()
        total()
     })
}

/plus/
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click",
    function(){
        plusBtn.nextElementSibling.innerHTML++
        total()
    }
    )
}
/ minus /
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click"
    function(){
        minusBtn.previousElementSibling.innerHTML > 0 ?
        minusBtn.previousElementSibling.innerHTML--:
        null,
        total()
    }
    )
}
/ total /
function total(){
    let qte=Array.from(document.querySelectorAll(".qute"));
    let price= Array.from(document.querySelectorAll(".unitt-price"))
    let s=0
    for (let i=0;i<price.length ; i++)
    {
        s=s+price[i].innerHTMLqte[i].innerHTML;
    }
    document.getElementsById("total-price").innerHTML= s
}
