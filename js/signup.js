// xu li signup
const inputName = document.querySelector(".login__name");
const inputEmail = document.querySelector(".login__email");
const inputPassword = document.querySelector(".login__password");
const inputConfirm = document.querySelector(".login__confirmpassword");
const btnSignup = document.querySelector(".btn__login");
const error = document.querySelectorAll(".login__error");
const checkRemember = document.querySelector(".login__remember");
const api = "http://localhost:3000/user";

function isValidName() {
    if (inputName.value.trim() === "") {
        error[0].style.visibility = "visible";
        return false;
    } else if (inputName.value.trim().length < 6) {
        error[0].style.visibility = "visible";
        error[0].innerText = "Tên của bạn phải dài ít nhất 6 kí tự";
        return false;
    }
    error[0].style.visibility = "";
    return true;
}

function isValidEmail() {
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.value.trim() === "") {
        error[1].style.visibility = "visible";
        return false;
    } else if (!validEmail.test(inputEmail.value.trim())) {
        error[1].style.visibility = "visible";
        error[1].innerText = "Đây không phải là một email hợp lệ";
        return false;
    }
    error[1].style.visibility = "";
    return true;
}

function isValidPassword() {
    if (inputPassword.value.trim() === "") {
        error[2].style.visibility = "visible";
        return false;
    } else if (inputPassword.value.trim().length < 6) {
        error[2].style.visibility = "visible";
        error[2].innerText = "Mật khẩu của bạn phải dài ít nhất 6 kí tự";
        return false;
    }
    error[2].style.visibility = "";
    return true;
}

function isValidConfirm() {
    if (inputConfirm.value.trim() === "") {
        error[3].style.visibility = "visible";
        return false;
    } else if (inputConfirm.value.trim() !== inputPassword.value.trim()) {
        error[3].style.visibility = "visible";
        error[3].innerText = "Mật khẩu xác nhận chưa đúng";
        return false;
    }
    error[3].style.visibility = "";
    return true;
}

function isCheckRemember() {
    if (!checkRemember.checked) {
        alert("Bạn cần phải đồng ý với chính sách của chúng tôi");
        return false;
    }
    return true;
}

function create(data, api) {
    var option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(api, option).then(function (response) {
        return response.json();
    });
}

function validation(event) {
    event.preventDefault();
    if (
        isValidName() &&
        isValidEmail() &&
        isValidPassword() &&
        isValidConfirm() &&
        isCheckRemember()
    ) {
        const name = inputName.value.trim();
        const email = inputEmail.value.trim();
        const password = inputPassword.value.trim();
        var formData = {
            username: name,
            email: email,
            password: password,
        };
        create(formData, api);
        window.location.href = "/succes.html";
    }
}

btnSignup.addEventListener("click", validation);
