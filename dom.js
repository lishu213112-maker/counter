let count = 0

const countText = document.getElementById("count")

const plusBtn = document.getElementById("plus")

const minusBtn = document.getElementById("minus")


plusBtn.addEventListener("click", function(){

    count++

    countText.textContent = count

})


minusBtn.addEventListener("click", function(){

    count--

    countText.textContent = count

})

