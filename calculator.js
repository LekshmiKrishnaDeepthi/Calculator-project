function buttonclick(val){
    console.log(val)
    document.getElementById("screen").value= document.getElementById("screen").value+val;
}
console.log('Its working!')

function clearDisplay(){
    document.getElementById("screen").value= ""
}

function equalclick(){
    var text= document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}