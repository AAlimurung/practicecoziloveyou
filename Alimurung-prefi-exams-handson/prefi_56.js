function reverseStr(){
    const str = document.getElementById("revstring").value;
    const esrever = str.split('').reverse().join('');
    document.getElementById("result5").textContent = "Reversed: "+esrever;
}

function checkPaalin(){
    const input = document.getElementById("palindrome").value;
    const lowerc = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverse = lowerc.split('').reverse().join('');

    if(lowerc === reverse){
        document.getElementById("result6").textContent = "Palindrome!";
    }else{
        document.getElementById("result6").textContent = "Not a palindrome";
    }
}