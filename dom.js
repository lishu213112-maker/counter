





{
let count=0;
let counttext=document.getElementById("count");
let increament=document.getElementById("increasebtn");
let decreament=document.getElementById("decreasebtn");
increament.addEventListener("click",function(){
    count++;
    counttext.textContent=count;
});
decreament.addEventListener("click",function(){
    count--;
    counttext.textContent=count;
});
}
