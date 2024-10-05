// xu li nguoi dung dang nhap
const api = "http://localhost:3000/user";
const inputEmail = document.querySelector(".login__email");
const btnSignup = document.querySelector(".btn__login");
const inputPassword = document.querySelector(".login__password");
const checkRemember = document.querySelector(".login__remember");

function login(api, email, password) {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let foundUser = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].email === email && data[i].password === password) {
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify(data[i])
                    );
                    window.location.href = "./index.html";
                    foundUser = true;
                    break;
                }
            }
            if (!foundUser) {
                alert("Email hoặc mật khẩu không hợp lệ");
                return;
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
            alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau");
        });
}
btnSignup.addEventListener("click", function (event) {
    event.preventDefault();
    login(api, inputEmail.value, inputPassword.value);
});
