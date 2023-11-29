let username = "";
const form = document.getElementById("form");
const joinchatbtn = document.getElementById("join-chat")
const usernameinput = document.getElementById("user");



joinchatbtn.addEventListener("click" , (event)=>{
    event.defaultPrevented();
    event.stopPropagation();


    username = usernameinput.value;
    console.log(username);

    if(username){
        form.style.display="none"
    }
})