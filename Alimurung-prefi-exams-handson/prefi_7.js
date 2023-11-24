function angelType(){
    const angle = parseFloat(document.getElementById("angel").value);
    const res7 = document.getElementById("result7");

    if(angle>0 && angle<90){
        res7.textContent = "Acute Angle";
    }else if(angle===90){
        res7.textContent = "Right Angle";
    }else if(angle>90 && angle<180){
        res7.textContent = "Obtuse Angle";
    }else if(angle==180){
        res7.textContent = "Straight Angle";
    }
}