const print = document.querySelector(".display_screen");
const but = document.querySelector("button");
const spCh = ["%", "*", "/", "-", "+", "="];
let space = "";

const calc = (btnValue)=>{
    display.focus();
    if(btnValue === "=" && space !== ""){
        space = eval(space.replace("%", "/100"));
    } else if (btnValue === "C"){
        space = "";
    } else if (btnValue === "DEL"){
        space = space.toString().slice(0, -1);
    } else{
        if(space === "" && spCh.includes(btnValue)) return;
        space += btnValue;
    }
    print.value = space;
};

but.forEach((button) => {
    but.addEventListener("click", (e) => calc(e.target.dataset.value));
});