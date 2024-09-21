const button = document.querySelector("button");
const useremail = document.querySelector(".email");
const input = document.querySelector("input");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const err_msg = document.querySelector(".err-msg");
const email = document.querySelector(".email");

button.addEventListener("click", function () {
    const useremail = email.value;
    if (!emailRegex.test(useremail)) {
        err_msg.classList.remove("hidden");
        email.classList.add("border");
    } else {
        email.classList.remove("border");
        err_msg.classList.add("hidden");

    }


})