function openConfBox(){
    var text;
    if(confirm("Press a button to see results!")){
        text="You pressed OK";
    }else{
        text="You pressed cancel";
    }
    document.getElementById("demo").innerHTML = text;
}