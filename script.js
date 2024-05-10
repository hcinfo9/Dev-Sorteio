
const button= document.querySelector("button");
const modalPai = document.querySelector("#modal-pai") 

button.addEventListener("click", function() {
  const min= Math.ceil(document.querySelector("#number").value)
  const max = Math.floor(document.querySelector("#number1").value)
  let alert=document.querySelector("#alert-d")


  if (min<max){
    const random = Math.floor(Math.random()*(max - min + 1) + min);
    alert.style.visibility="hidden"
<<<<<<< HEAD
    alert.style.display='block'
=======
>>>>>>> 52a4fd924725483e0fd076e732e116b9a34fe6b1
    let label = document.querySelector(".modal-content")
    label.style.display='block'
    label.innerHTML=`<br>Numero sorteado: ${random}`
  }
  else{
    document.querySelector(".modal-content").style.display="none"
    alert.style.display='block'
    alert.style.visibility="visible"
  }
})

modalPai.addEventListener("click", function(){
  document.querySelector("#number").value=""
  document.querySelector("#number1").value=""

  
})



<<<<<<< HEAD
=======

>>>>>>> 52a4fd924725483e0fd076e732e116b9a34fe6b1
