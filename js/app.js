let form = document.getElementsByClassName("btn")[0];
let numper = document.getElementsByClassName("numper")[0];
let cvv22 = document.getElementsByClassName("cvv22")[0];
let date = document.getElementsByClassName("date")[0];
let card={
    numper:e.target.numper.value,
    cvv2:e.target.cvv2.value,
    Expiration:e.target.Expiration.value,
}
form.addEventListener("submit", (e) => {
    numper.innerHTML=`${e.target.numper.value}`
    cvv22.innerHTML=`${e.target.cvv2.value}`
    date.innerHTML= `${e.target.Expiration.value}`
})


