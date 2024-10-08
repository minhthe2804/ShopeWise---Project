// Xu li khi user da dang nhap va hien ten
const userName = document.querySelector(".user");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const modal = document.querySelector(".modal");
const btnUser = document.querySelector(".header__user--row.users");
const headerUser = document.querySelector(".header__user");
const cartList = JSON.parse(localStorage.getItem("listCart"));
const wishList = JSON.parse(localStorage.getItem("listWish"));
const notifyWish = document.querySelector(".wishlist__notify--number");
const notifyNumber = document.querySelector(".wishlist__notify--number");
const cartNotify = document.querySelector(".notify__number");
const cashCart = document.querySelector(".cash__cart");
let infoUser = JSON.parse(localStorage.getItem("infoUser")) || [];

function handerLogout() {
    if (currentUser) {
        userName.textContent = currentUser.username;
        notifyWish.style.marginLeft = "0";
        const btnlogOut = document.createElement("div");
        btnlogOut.classList.add("logout");
        btnlogOut.innerHTML = `  <i class="fa-solid fa-right-from-bracket icon__logout"></i>
                                 <p class="logout__title">Out</p>`;
        headerUser.appendChild(btnlogOut);
        btnUser.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "/user.html";
        });
        btnlogOut.addEventListener("click", (event) => {
            confirmLogOut(modal);
            event.preventDefault();
        });
    }
}

function agree() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("listCart");
    localStorage.removeItem("listWish");
    localStorage.removeItem("listPreparing");
    localStorage.removeItem("listDeliver");
    localStorage.removeItem("listDelivered");
    localStorage.removeItem("listBought");
    localStorage.removeItem("infoUser");
    localStorage.removeItem("compareOne");
    localStorage.removeItem("compareTwo");
    localStorage.removeItem("compareThree");
    window.location.href = "./index.html";
}

function confirmLogOut(modal) {
    modal.innerHTML = `<div class="modal__blog">
                <div class="modal__content">
                    <p class="modal__title">
                        Bạn có chắc chắn muốn đăng xuất không
                    </p>
                    <div class="modal__row">
                        <button
                            class="btn__modal btn__modal--left"
                            type="button"
                        >
                            Có
                        </button>
                        <button
                            class="btn__modal btn__modal--right"
                            type="button"
                        >
                            Không
                        </button>
                    </div>
                </div>
            </div>`;
    const btnAgree = document.querySelector(".btn__modal--left");
    const btnClose = document.querySelector(".btn__modal--right");
    const modalBlog = document.querySelector(".modal__blog");
    btnAgree.addEventListener("click", () => {
        agree();
    });
    btnClose.addEventListener("click", () => {
        modalBlog.remove();
    });
}

function notifyCart(cartList) {
    if (cartList) {
        cartNotify.innerText = cartList.length;
    } else {
        cartNotify.innerText = "0";
    }
}

function notify(wishList) {
    if (wishList) {
        notifyNumber.innerText = wishList.length;
    } else {
        notifyNumber.innerText = "0";
    }
}

function genderCash() {
    const cartList = JSON.parse(localStorage.getItem("listCart"));
    if (cartList) {
        const htmls = cartList.map((cash) => {
            return `<div class="cash__product cash__content">
                        <div class="cash__img">
                            <img
                                src="${cash.img}"
                                alt=""
                                class="img__cash"
                            />
                        </div>
                        <div class="cash__info">
                            <p class="cash__name">Variable Product 001</p>
                            <p class="cash__price">${cash.quantity} x $${cash.total}.00</p>
                        </div>       
                    </div>
                    <div class="cash__line"></div>
                    `;
        });
        const cashPrice = cartList.reduce((price, current) => {
            return price + Number(current.total);
        }, 0);
        cashCart.style.paddingBottom = "20px";
        cashCart.innerHTML =
            htmls.join("") +
            `<div class="cash__subtotal--row cash__content">
                        <p class="cash__subtotal--name">Subtotal:</p>
                        <p class="cash__subtotal--price">$${cashPrice}.00</p>
                    </div>
                    <div class="cash__interact">
                        <div class="btn__baner__hover btn__cash--hover">
                            <a href="/cart.html" class="btn__banner btn__cash--viewcart"
                                ><p>View Cart</p></a
                            >
                        </div>
                        <div class="btn__baner__hover">
                            <a href="" class="btn__banner btn__cash--checkout"
                                ><p>Checkout</p></a
                            >
                        </div>
                    </div>`;
    } else {
    }
}

setInterval(() => {
    let cartList = JSON.parse(localStorage.getItem("listCart"));
    let wishList = JSON.parse(localStorage.getItem("listWish"));
    notifyCart(cartList);
    notify(wishList);
}, 1000);
handerLogout();

// Xu li thong tin nguoi dung
const inputName = document.querySelector(".userinfo__name");
const inputDate = document.querySelector(".userinfo__date");
const inputPhone = document.querySelector(".userinfo__phone");
const inputEmail = document.querySelector(".userinfo__email");
const btnUserUp = document.querySelector(".btn__userinfo.btn__userinfo--color");
const btnUserFix = document.querySelector(".btn__userinfo--fix");
const toastCart = document.querySelector(".toast__cart");

function isValidName() {
    if (inputName.value.trim() === "") {
        alert("Bạn cần phải nhập tên !");
        return false;
    } else if (inputName.value.trim().length < 6) {
        alert("Tên của bạn phải dài ít nhất 6 kí tự !");
        return false;
    }
    return true;
}

function isValidDate() {
    if (inputDate.value.trim() === "") {
        alert("Bạn cần phải nhập ngày sinh !");
        return false;
    }
    return true;
}

function isValidPhone() {
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (inputPhone.value.trim() === "") {
        alert("Bạn cần phải nhập số điện thoại !");
        return false;
    } else if (!regexPhoneNumber.test(inputPhone.value.trim())) {
        alert("Đây không phải là một số điện thoại hợp lệ !");
        return false;
    }
    return true;
}

function isValidEmail() {
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.value.trim() === "") {
        alert("Bạn cần nhập email !");
        return false;
    } else if (!validEmail.test(inputEmail.value.trim())) {
        alert("Đây không phải là một email hợp lệ !");
        return false;
    }
    return true;
}

function disable() {
    if (
        inputName.value.trim() === "" &&
        inputDate.value.trim() === "" &&
        inputPhone.value.trim() === "" &&
        inputEmail.value.trim() === ""
    ) {
        inputName.style.pointerEvents = "auto";
        inputDate.style.pointerEvents = "auto";
        inputPhone.style.pointerEvents = "auto";
        inputEmail.style.pointerEvents = "auto";
        btnUserUp.style.pointerEvents = "auto";
        btnUserUp.style.opacity = "1";
        btnUserFix.style.pointerEvents = "none";
        btnUserFix.style.opacity = "0.5";
    } else {
        inputName.style.pointerEvents = "none";
        inputDate.style.pointerEvents = "none";
        inputPhone.style.pointerEvents = "none";
        inputEmail.style.pointerEvents = "none";
        btnUserUp.style.pointerEvents = "none";
        btnUserUp.style.opacity = "0.5";
        btnUserFix.style.pointerEvents = "auto";
        btnUserFix.style.opacity = "1";
    }
}

function fixInput() {
    inputName.style.pointerEvents = "auto";
    inputDate.style.pointerEvents = "auto";
    inputPhone.style.pointerEvents = "auto";
    inputEmail.style.pointerEvents = "auto";
    btnUserUp.style.pointerEvents = "auto";
    btnUserUp.style.opacity = "1";
}

function genderInfor() {
    if (infoUser) {
        infoUser.forEach((info) => {
            inputName.value = info.name;
            inputDate.value = info.date;
            inputPhone.value = info.phone;
            inputEmail.value = info.email;
        });
    }
}
function addCartSucces(string) {
    toastCart.style.display = "block";
    toastCart.innerHTML = ` <div class="toast__blog toast__blog--cart">
                          <div class="toat__succes">
                            <p class="toast__name">${string} </p>
                             <div class="toast__check"></div>
                             <div class="toast__line"></div>
                        </div>
                      </div>`;
    const toastBlogCart = document.querySelector(".toast__blog--cart");
    setTimeout(() => {
        toastBlogCart.remove();
        toastCart.style.display = "";
    }, 1700);
}

function validation() {
    if (isValidName() && isValidDate() && isValidPhone() && isValidEmail()) {
        if (infoUser.length === 0) {
            let string = "Bạn đã cập nhật thông tin thành công";
            userInfo = {
                name: inputName.value.trim(),
                date: inputDate.value.trim(),
                phone: inputPhone.value.trim(),
                email: inputEmail.value.trim(),
            };
            infoUser.push(userInfo);
            localStorage.setItem("infoUser", JSON.stringify(infoUser));
            disable();
            genderInfor();
            addCartSucces(string);
        } else if (infoUser.length === 1) {
            let string = "Bạn đã cập nhật thông tin thành công";
            infoUser[0].name = inputName.value.trim();
            infoUser[0].date = inputDate.value.trim();
            infoUser[0].phone = inputPhone.value.trim();
            infoUser[0].email = inputEmail.value.trim();
            localStorage.setItem("infoUser", JSON.stringify(infoUser));
            disable();
            genderInfor();
            addCartSucces(string);
        }
    }
}
btnUserUp.addEventListener("click", (event) => {
    event.preventDefault();
    validation();
});

btnUserFix.addEventListener("click", (event) => {
    event.preventDefault();
    fixInput();
});

document.addEventListener("DOMContentLoaded", function () {
    genderInfor();
    disable();
});

// Xu li hien overlay
const overlay = document.querySelector(".overlay");

function genderOverlay() {
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    overlay.innerHTML = `<div class="overlay__blog">
                <div class="overlay__content">
                    <div class="overlay__img">
                        <img
                            src="./assets/img/screenshot-1721982200581.png"
                            alt=""
                            class="img__overlay"
                        />
                    </div>
                    <div class="overlay__info">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-21 overlay__delete" 
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                        <div class="overlay__info--body">
                            <p class="overlay__heading">
                                Subscribe And Get 25% Discount!
                            </p>
                            <p class="overlay__desc">
                                Subscribe to the newsletter to receive updates
                                about new products.
                            </p>
                            <input
                                type="text"
                                name="email"
                                id="overlay__email"
                                class="overlay__email"
                                placeholder="Enter Your Email"
                            />
                            <div class="btn__baner__hover btn__overlay__hover">
                                <a
                                    href="" 
                                    class="btn__banner btn__overlay"
                                    ><p>SUBSCRIBE</p></a
                                >
                            </div>
                            <div class="overlay__checkbox--row">
                                <input type="checkbox" name="" id="check" class="overley__check" >
                                <label for="check" class="overlay__label">Don't show this popup again!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    // lay DOM
    const overlayBlog = document.querySelector(".overlay__blog");
    const iconOverlay = document.querySelector(".overlay__delete");
    const overlayLabel = document.querySelector(".overlay__label");
    // css lai
    overlayLabel.style.whiteSpace = "nowrap";
    overlayLabel.style.marginLeft = "-295px";
    overlayLabel.style.fontWeight = "400";

    function overlayDelete() {
        overlayBlog.remove();
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
    }
    iconOverlay.addEventListener("click", () => {
        overlayDelete();
    });
}

// load lai trang
window.addEventListener("load", () => {
    genderCash();
    setTimeout(() => {
        // genderOverlay();
    }, 2000);
});
