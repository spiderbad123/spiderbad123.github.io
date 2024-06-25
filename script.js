function handleSubmit(){
   
    const emailValue = document.getElementById("email").value.toLocaleLowerCase()
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("check mail",emailValue)
    emailValue.match(checkMail)
}