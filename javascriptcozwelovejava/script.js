function greet(){
    alert("ohayo, sekai");
}

function hideImg(){
    var imgTarget = document.getElementById("image2hide");
    if(imgTarget.style.display === "none") 
    {imgTarget.style.display = "block";}
    else{imgTarget.style.display = "none";}
}