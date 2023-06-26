document.getElementById("generatedPassword").addEventListener("click", clickHover)

function clickHover () {

    const password = document.getElementById("showPassword");

    if (password.classList.contains("showPassword")) {

        password.classList.remove("showPassword")
        password.classList.add("showPasswordBlock")

    } else {

        password.classList.remove("showPasswordBlock")
        password.classList.add("showPassword")

    }
    
    console.log(password)

    
}