document.title = "Password App"

const passwordInput = document.getElementById("pass")
const switcher = document.getElementById("switch")

const togglePassword = () =>{
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        switcher.textContent = "Hide"
    }
    else{
        passwordInput.type = "password"
        switcher.textContent = "Show"
    }
}