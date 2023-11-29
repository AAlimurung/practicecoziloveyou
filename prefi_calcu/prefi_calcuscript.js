let output = "";
let mem = null;
const printNums = document.querySelector("print");

// set all values to the textbox
function setVal(value){
    output += value;
    document.getElementById("print").value = output;

    // set to zero idk how to sir sankyuu
    // if(value===document.getElementById("print").value){
    //     output = 0;
    // }

    if(value %2 === 0){
        document.getElementById("opbtn").style.backgroundColor = "green";
    } else if(!isNaN(value)){
        document.getElementById("opbtn").style.backgroundColor = "red";
    }else{
        document.getElementById("opbtn").style.backgroundColor = "white";
    }
}

// retrieve memory
function retrieveMemory(){
    const x = parseFloat(output);

    if(!isNaN(x)){
        mem = x;
    }

    if(mem !== null){
        output = mem.toString();
        document.getElementById("print").value = output;
    }
}

// clear memory
function clearMemory(){
    if(mem===null){
        alert("Memory is empty");
    }else{
        mem = null;
    }
}

// clear num
function eraseNum(){
    output = " ";
    document.getElementById("print").value = " ";
    document.getElementById("opbtn").style.backgroundColor = "white";
}

// display
function print(){
    try{
        const res = eval(output);
        document.getElementById("print").value = res;
        output = res.toString();
    }catch(error){
        document.getElementById("print").value = "error";
        output = "";
    }
}