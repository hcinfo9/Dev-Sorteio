
const button= document.querySelector("button");
const modalPai = document.querySelector("#modal-pai") 

button.addEventListener("click", function() {
  const min= Math.ceil(document.querySelector("#number").value)
  const max = Math.floor(document.querySelector("#number1").value)
  let alert=document.querySelector("#alert-d")


  if (min<max){
    const random = Math.floor(Math.random()*(max - min + 1) + min);
    alert.style.visibility="hidden"

    let label = document.querySelector(".modal-content")
    label.style.display='block'
    label.innerHTML=`<br>Numero sorteado: ${random}`
  }
  else if (min ===0 || max ===0){
    document.querySelector(".modal-content").style.display="none"
    alert.style.visibility="visible"
    alert.style.display='block'
    alert.style.visibility="visible"
    alert.innerHTML="<b>Erro: Campos vazios, tente novamente</b>"
  }
  else{
    
    document.querySelector(".modal-content").style.display="none"
    alert.style.display='block'
    alert.style.visibility="visible"
    alert.innerHTML="<b>Erro: o valor minimo é maior que o valor maximo, tente novamente!!</b>"
  }
})

modalPai.addEventListener("click", function(){
  document.querySelector("#number").value=""
  document.querySelector("#number1").value=""

  
})


