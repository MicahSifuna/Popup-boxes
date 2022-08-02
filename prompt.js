function openPromBox(){
    let text;
    let person = prompt("Please enter your name to proceed:","Harry Potter");
    if(person == null || person == ""){
        text = "User cancelled the prompt.";
    }else{
        text = "Hello "+person+"! How have you been?";
    }
    document.getElementById("demo1").innerHTML = text;
}