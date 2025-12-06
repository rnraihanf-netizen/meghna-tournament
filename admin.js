function checkPass() {
    let pass = document.getElementById("pass").value;

    if (pass === "4455") {
        alert("Login Successful!");
        window.location.href = "../index.html";
    } else {
        alert("Incorrect Password!");
    }
}
