// Image slider
let index = 0;
    autoSlides();

    function autoSlides(){
        let i;
        let slides = document.getElementsByClassName("imgs");
        let dots = document.getElementsByClassName("dot");

        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        index++;

        if(index > slides.length){
            index = 1
        }
        for(i=0; i<dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[index-1].style.display = "block";
            dots[index-1].className += " active";
            setTimeout(autoSlides, 3000);
    }

// login
document
    .getElementById("log-in-form")
    .addEventListener("submit", function(event){
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("pass").value;

        if(username === "Anan" && password === "12345"){
            alert("Signed in. Redirecting...");

            window.location.href = "user-profile.html";
        } else {
            document.getElementById("err-msg").textContent = "Invalid username or password. Please try again.";
        }
    });
