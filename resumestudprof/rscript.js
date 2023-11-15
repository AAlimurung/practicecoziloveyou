//Programmer: Ana Alimurung - 111523
function buttonToHide(id){
    
    const graf1 = document.getElementById(id);

    if(graf1.style.display === "none"){
        graf1.style.display = "block";
    }
    else{
        graf1.style.display = "none";
    }
}

function toggleDM(){ 
    var bgcolor = document.body.style.backgroundColor;

    if(bgcolor === "#ffebcd"){
        document.body.style.backgroundColor = "#ffebcd"
        document.body.style.color = "black"
    }else{
        document.body.style.backgroundColor = "black"
        document.body.style.color = "#ffebcd"
       
        alert(document.body.style.backgroundColor);
    }
}

function toggleCS() {
   
    if (document.body.style.color === "black") {
        document.body.style.color = "blue";
    } else {
        document.body.style.color = "black";
    }
}