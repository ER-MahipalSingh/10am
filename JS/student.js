const main=document.getElementById("main");
main.addEventListener("submit",(e) => {
    e.preventDefault()
    const err = document.getElementById("error")

    try {
        const name = document.getElementById("name").value
        const mail = document.getElementById("mail").value
        const password = document.getElementById("password").value

        if(!name || !mail.includes("@") || mail==="" ||!password){
            throw "aLL fIELDS ARE required";
        }
         alert("form submitted")
    } catch (error) {
       console.error(error);
       err.innerHTML=error;
       console.log(error)
  }
        console.log(name);
        console.log(mail);
        console.log(password);
  
    
})

