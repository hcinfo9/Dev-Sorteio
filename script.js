
const button= document.querySelector("button");
const modalPai = document.querySelector("#modal-pai") 

button.addEventListener("click", function() {
  const min= Math.ceil(document.querySelector("#number").value)
  const max = Math.floor(document.querySelector("#number1").value)
  let alert=document.querySelector("#alert-d")


  if (min<max){
    const random = Math.floor(Math.random()*(max - min + 1) + min);
    alert.style.visibility="hidden"
    alert.style.display="none"

    let label = document.querySelector(".modal-content")
    label.style.display='block'
    label.innerHTML=`<br>Numero sorteado: ${random}`
  }
  
if (min ==="" || max ==="") {
     document.querySelector(".modal-content").style.display="none"
     alert.style.display='block'
     alert.innerHTML="Erro: Campos Obrigatorios não preenchidos, Tente Novamente"
     alert.style.visibility="visible"
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


