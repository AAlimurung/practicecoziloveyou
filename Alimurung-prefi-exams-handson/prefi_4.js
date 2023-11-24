function equalnt(){
    const n1 = parseInt(document.getElementById("num1").value);
    const n2 = parseInt(document.getElementById("num2").value);
    const n3 = parseInt(document.getElementById("num3").value);
    const res4 = document.getElementById("result4");

    if(n1 === n2 && n1 === n3){
        res4.textContent = "30";
    }else if(n1 === n2 || n1 === n3 || n2 === n3){
        res4.textContent = "40";
    } else{
        res4.textContent = "20";
    }
}