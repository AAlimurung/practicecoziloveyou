function times(){
    const a1 = parseFloat(document.getElementById("first-num").value);
    const a2 = parseFloat(document.getElementById("second-num").value);
    const res = document.getElementById("result")
    res.textContent = "The result is: "+a1*a2; 
}

function divide(){
    const a1 = parseFloat(document.getElementById("first-num").value);
    const a2 = parseFloat(document.getElementById("second-num").value); 
    const res = document.getElementById("result");
    if(a2 !== 0){
        res.textContent = "The result is: "+a1/a2;
    }else{
        res.textContent = "we can't divide by zero";
    }
}