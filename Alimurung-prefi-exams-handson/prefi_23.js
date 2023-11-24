function guessNum(){
    const num = parseInt(document.getElementById("guessn").value);
    const rando = Math.floor(Math.random()*10);
    const res2 = document.getElementById("result2");

    if(num === rando){
        res2.textContent = "GOOD WORK!";
    }else{
        res2.textContent = "NOT MATCHED. Try again.";
    }
}

function largest(){
    const n1 = parseFloat(document.getElementById("num-1").value);
    const n2 = parseFloat(document.getElementById("num-2").value);
    const n3 = parseFloat(document.getElementById("num-3").value);
    const res3 = document.getElementById("result3");

    if(n1 >= n2 && n1 >= n3){
        res3.textContent = "Largest: "+n1;
    }else if(n2 >= n1 && n2 >= n3){
        res3.textContent = "Largest: "+n2;
    }else if(n3 >= n2 && n3 >= n1){
        res3.textContent = "Largest: "+n3;
    }
}