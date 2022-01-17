const registerEmail = "myemail@gmail.com";
const registerPw = "12345678";

function login(x) {
    x.preventDefault();

    let email = x.target[0].value;
    let pw = x.target[1].value;

    if (email && pw) {
        if (email === registerEmail && pw === registerPw) {
            document.querySelector("#success").innerHTML = "Login Successfully!";
            document.querySelector("#container").style.display = "none";
        } else if (email === registerEmail && pw !== registerPw) {
            document.querySelector("#error").innerHTML = "Incorrect Password!";
        } else if (email !== registerEmail && pw === registerPw) {
            document.querySelector("#error").innerHTML = "Incorrect Email!";
        } else {
            document.querySelector("#error").innerHTML = "Incorrect email or password.";
        }
    } else {
        document.querySelector("#error").innerHTML = "Please Fill All the Fields!";
    }

}