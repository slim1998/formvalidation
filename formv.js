const regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexPassword=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
document.getElementById("lname").addEventListener("click" , function(){
    console.log(document.getElementById("case1").value ==="") ;
    console.log(document.getElementById("case1").value)
    if(document.getElementById("case1").value ==="") 
      alert("Please enter the firstname")
})
document.getElementById("lname").addEventListener("click" , function(){
    console.log(document.getElementById("case2").value ==="") ;
    console.log(document.getElementById("case2").value)
    if(document.getElementById("case2").value ==="") 
      alert("Please enter the lastname")
})
document.getElementById("lname").addEventListener("click" , function(){
    console.log(document.getElementById("case3").value ==="") ;
    console.log(document.getElementById("case3").value)
    if(document.getElementById("case3").value ==="") 
      alert("Please enter the Adress")
})
document.getElementById("lname").addEventListener("click" , function(){
    console.log(document.getElementById("case4").value ==="") ;
    console.log(document.getElementById("case4").value)
    if(document.getElementById("case4").value ==="") 
      alert("Please enter E-mail Adress:")
    if (!regexEmail.test(case4.value))
    alert("E-mail not valid")

})
document.getElementById("lname").addEventListener("click" , function(){
    console.log(document.getElementById("case5").value ==="") ;
    console.log(document.getElementById("case5").value)
    if(document.getElementById("case5").value ==="") 
      alert("Please enter the Password:")
      if (!regexPassword.test(case5.value))
      alert("Password Not Valid")
})
document.getElementById("lname").addEventListener("click" , function(){
    console.log(document.getElementById("case6").value ==="") ;
    console.log(document.getElementById("case6").value)
    if(document.getElementById("case6").value ==="") 
      alert("Please enter the comments")
})

