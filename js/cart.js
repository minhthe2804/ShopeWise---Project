// Xu li hien don hang da mua
const purchasedDeliver = document.querySelector(".purchased__body--deliver");
const purchasedDelivered = document.querySelector(
    ".purchased__body--delivered"
);
const purchasedBought = document.querySelector(".purchased__body--bought");
const purchasedboDy = document.querySelector(".purchased__body");
const purchasedBody = document.querySelector(".purchased__body");
const purchadedHeader = document.querySelectorAll(".purchased__header");
const listDeliver = [];
const listDelivered = [];
const listBought = [];

let deliverList = JSON.parse(localStorage.getItem("listDeliver")) || [];
let deliveredList = JSON.parse(localStorage.getItem("listDelivered")) || [];
let boughtList = JSON.parse(localStorage.getItem("listBought")) || [];
let preparingList = JSON.parse(localStorage.getItem("listPreparing")) || [];

// Xu li cac muc cua don hang da mua
const purchasedItem = document.querySelectorAll(".purchased__item");
const purchasedDisplay = document.querySelectorAll(".purchased__body--display");

function purActive(item, index) {
    document
        .querySelector(".purchased__item.active")
        .classList.remove("active");
    document
        .querySelector(".purchased__body--display.display")
        .classList.remove("display");
    item.classList.add("active");
    purchasedDisplay[index].classList.add("display");
}

purchasedItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        purActive(item, index);
    });
});

// Function để di chuyển item từ chuẩn bị sang giao hàng và từ giao hàng sang đã giao
function done(index, data) {
    event.preventDefault();
    // Kiểm tra nếu mục đang ở danh sách chuẩn bị
    if (data.closest(".preparing")) {
        const item = preparingList.splice(index, 1)[0];
        let string = "Đơn hàng của bạn đã được đóng gói !";
        deliverList.push(item);
        localStorage.setItem("listPreparing", JSON.stringify(preparingList));
        localStorage.setItem("listDeliver", JSON.stringify(deliverList));
        addCartSucces(string);
    } else if (data.closest(".deliver")) {
        const item = deliverList.splice(index, 1)[0];
        let string = "Đơn hàng của bạn đã được vận chuyển thành công !";
        deliveredList.push(item);
        localStorage.setItem("listDeliver", JSON.stringify(deliverList));
        localStorage.setItem("listDelivered", JSON.stringify(deliveredList));
        addCartSucces(string);
    } else if (data.closest(".delivered")) {
        const item = deliveredList.splice(index, 1)[0];
        let string = "Đơn hàng đã được lưu trữ vào sản phẩm bạn đã mua !";
        boughtList.push(item);
        localStorage.setItem("listDelivered", JSON.stringify(deliveredList));
        localStorage.setItem("listBought", JSON.stringify(boughtList));
        addCartSucces(string);
    } else if (data.closest(".bought")) {
        const item = boughtList.splice(index, 1)[0];
        let string = "Bạn đã thêm sản phẩm vào giỏ hàng !";
        cartList.push(item);
        localStorage.setItem("listBought", JSON.stringify(boughtList));
        localStorage.setItem("listCart", JSON.stringify(cartList));
        addCartSucces(string);
    }
    // Re-render các danh sách
    genderPurchased();
    genderDeliver();
    genderDelivered();
    genderBought();
    genderCart();
}

function genderBought() {
    if (boughtList) {
        const htmls = boughtList.map((bought, index) => {
            return ` <div class="wishlist__line cart__line"></div>
                                <div class="purchased__body--product">
                                    <img
                                        src="${bought.img}"
                                        alt=""
                                        class="img__purchased"
                                    />
                                    <p class="purchased__name">
                                    ${bought.name}
                                    </p>
                                    <p class="purchased__receiver">${bought.receiver}</p>
                                    <p class="purchased__phone">${bought.phone}</p>
                                    <p class="purchased__adderss">
                                       ${bought.road}, ${bought.wards}, ${bought.district},${bought.province}
                                    </p>
                                    <p class="purchased__price">$${bought.total}.00</p>
                                    <p class="purchased__status">Bought</p>
                                    <div
                                        class="btn__baner__hover btn__purchased--hover btn__purchased--hover_red"
                                    >
                                        <a
                                            href=""
                                            class="btn__banner btn__purchased btn__purchased--red bought"  onclick = "done(${index},this)"
                                        >
                                            <p>Buy</p>
                                        </a>
                                    </div>
                                </div>`;
        });
        if (boughtList.length > 0) {
            purchadedHeader[3].innerHTML = `<p class="purchased__product">Product</p>
                                <div class="purchased__heading--row">
                                    <p class="purchased__heading">Receiver</p>
                                    <p
                                        class="purchased__heading purchased__heading--phone"
                                    >
                                        Phone
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--address"
                                    >
                                        Address
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--price"
                                    >
                                        Price
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--status"
                                    >
                                        Status
                                    </p>
                                </div>
                                <p class="purcharsed__statusSucsess">Succes</p>`;
        } else if (boughtList.length === 0) {
            purchadedHeader[3].innerHTML = `<p class="no__wishlist no__cartitem">
                                    There are no favorite products
                                </p>`;
        }
        purchasedBought.innerHTML = htmls.join("");
    }
}

function genderDelivered() {
    if (deliveredList) {
        const htmls = deliveredList.map((delivered, index) => {
            return ` <div class="wishlist__line cart__line"></div>
                            <div class="purchased__body--product">
                                <img
                                    src="${delivered.img}"
                                    alt=""
                                    class="img__purchased"
                                />
                                <p class="purchased__name">
                                    ${delivered.name}
                                </p>
                                <p class="purchased__receiver">${delivered.receiver}</p>
                                <p class="purchased__phone">${delivered.phone}</p>
                                <p class="purchased__adderss">
                                    ${delivered.road}, ${delivered.wards}, ${delivered.district},${delivered.province}
                                </p>
                                <p class="purchased__price">$${delivered.total}.00</p>
                                <p class="purchased__status">Delivered</p>
                                <div
                                    class="btn__baner__hover btn__purchased--hover"
                                >
                                    <a
                                        href=""
                                        class="btn__banner btn__purchased delivered" onclick = "done(${index},this)"
                                    >
                                        <p>Done</p>
                                    </a>
                                </div>
                            </div>`;
        });
        if (deliveredList.length > 0) {
            purchadedHeader[2].innerHTML = `<p class="purchased__product">Product</p>
                                <div class="purchased__heading--row">
                                    <p class="purchased__heading">Receiver</p>
                                    <p
                                        class="purchased__heading purchased__heading--phone"
                                    >
                                        Phone
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--address"
                                    >
                                        Address
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--price"
                                    >
                                        Price
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--status"
                                    >
                                        Status
                                    </p>
                                </div>
                                <p class="purcharsed__statusSucsess">Succes</p>`;
        } else if (deliveredList.length === 0) {
            purchadedHeader[2].innerHTML = `<p class="no__wishlist no__cartitem">
                                    There are no favorite products
                                </p>`;
        }
        purchasedDelivered.innerHTML = htmls.join("");
    }
}

function genderDeliver() {
    if (deliverList) {
        const htmls = deliverList.map((deliver, index) => {
            return ` <div class="wishlist__line cart__line"></div>
                            <div class="purchased__body--product">
                                <img
                                    src="${deliver.img}"
                                    alt=""
                                    class="img__purchased"
                                />
                                <p class="purchased__name">
                                    ${deliver.name}
                                </p>
                                <p class="purchased__receiver">${deliver.receiver}</p>
                                <p class="purchased__phone">${deliver.phone}</p>
                                <p class="purchased__adderss">
                                    ${deliver.road}, ${deliver.wards}, ${deliver.district},${deliver.province}
                                </p>
                                <p class="purchased__price">$${deliver.total}.00</p>
                                <p class="purchased__status">Delivering</p>
                                <div
                                    class="btn__baner__hover btn__purchased--hover"
                                >
                                    <a
                                        href=""
                                        class="btn__banner btn__purchased deliver" onclick = "done(${index},this)"
                                    >
                                        <p>Done</p>
                                    </a>
                                </div>
                            </div>`;
        });
        if (deliverList.length > 0) {
            purchadedHeader[1].innerHTML = `<p class="purchased__product">Product</p>
                                <div class="purchased__heading--row">
                                    <p class="purchased__heading">Receiver</p>
                                    <p
                                        class="purchased__heading purchased__heading--phone"
                                    >
                                        Phone
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--address"
                                    >
                                        Address
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--price"
                                    >
                                        Price
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--status"
                                    >
                                        Status
                                    </p>
                                </div>
                                <p class="purcharsed__statusSucsess">Succes</p>`;
        } else if (deliverList.length === 0) {
            purchadedHeader[1].innerHTML = `<p class="no__wishlist no__cartitem">
                                    There are no favorite products
                                </p>`;
        }
        purchasedDeliver.innerHTML = htmls.join("");
    }
}

function genderPurchased() {
    if (preparingList) {
        const htmls = preparingList.map((preparing, index) => {
            let preparings = "preparing";
            return `  <div class="wishlist__line cart__line"></div>
                            <div class="purchased__body--product">
                                <img
                                    src="${preparing.img}"
                                    alt=""
                                    class="img__purchased"
                                />
                                <p class="purchased__name">
                                    ${preparing.name}
                                </p>
                                <p class="purchased__receiver">${preparing.receiver}</p>
                                <p class="purchased__phone">${preparing.phone}</p>
                                <p class="purchased__adderss">
                                    ${preparing.road}, ${preparing.wards}, ${preparing.district},${preparing.province}
                                </p>
                                <p class="purchased__price">$${preparing.total}.00</p>
                                <p class="purchased__status">Preparing</p>
                                <div
                                    class="btn__baner__hover btn__purchased--hover"
                                >
                                    <a
                                        href=""
                                        class="btn__banner btn__purchased preparing" onclick = "done(${index},this)"
                                    >
                                        <p>Done</p>
                                    </a>
                                </div>
                            </div>`;
        });
        if (preparingList.length > 0) {
            purchadedHeader[0].innerHTML = `<p class="purchased__product">Product</p>
                                <div class="purchased__heading--row">
                                    <p class="purchased__heading">Receiver</p>
                                    <p
                                        class="purchased__heading purchased__heading--phone"
                                    >
                                        Phone
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--address"
                                    >
                                        Address
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--price"
                                    >
                                        Price
                                    </p>
                                    <p
                                        class="purchased__heading purchased__heading--status"
                                    >
                                        Status
                                    </p>
                                </div>
                                <p class="purcharsed__statusSucsess">Succes</p>`;
        } else if (preparingList.length === 0) {
            purchadedHeader[0].innerHTML = `<p class="no__wishlist no__cartitem">
                                    There are no favorite products
                                </p>`;
        }
        purchasedBody.innerHTML = htmls.join("");
    }
}

genderBought();
genderDelivered();
genderDeliver();
genderPurchased();

// hien san pham da them
const cartHeader = document.querySelector(".cart__header");
const cartBody = document.querySelector(".cart__body");
const cartNotify = document.querySelector(".notify__number");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const cartAll = document.querySelector(".cart__all.content");
const addres = document.querySelector(".addres");
const oderToast = document.querySelector(".oder__toast");
const oderBlog = document.querySelector(".oder__toast--blog");
const toastCart = document.querySelector(".toast__cart");
let cartList = JSON.parse(localStorage.getItem("listCart")) || [];

function notifyCart() {
    cartNotify.innerText = cartList.length;
}

function userCart() {
    if (!currentUser) {
        localStorage.removeItem("listCart");
    }
}

function checkOut(blog) {
    blog.remove();
    addres.style.opacity = "0";
    addres.style.visibility = "hidden";
}

function addCartSucces(string) {
    toastCart.style.display = "block";
    toastCart.innerHTML = ` <div class="toast__blog toast__blog--cart">
                          <div class="toat__succes">
                            <p class="toast__name">${string}</p>
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

function oderSucces(blog) {
    let string = "Bạn đã đặt hàng thành công !";
    blog.remove();
    addres.style.opacity = "0";
    addres.style.visibility = "hidden";
    addCartSucces(string);
}

function infoPurchased(index, infopPur) {
    // lay thong tin dia chi nguoi dung nhap
    cartList[index].receiver = infopPur.receiver;
    cartList[index].phone = infopPur.phone;
    cartList[index].province = infopPur.province;
    cartList[index].district = infopPur.district;
    cartList[index].wards = infopPur.wards;
    cartList[index].road = infopPur.road;
    // them va cap nhat thong tin vua nhap
    preparingList.push(cartList[index]);
    localStorage.setItem("listPreparing", JSON.stringify(preparingList));
    cartList.splice(index, 1);
    localStorage.setItem("listCart", JSON.stringify(cartList));
    genderCart();
    genderPurchased();
}

function infoAllPurchased(infopPur) {
    // Tạo một danh sách tạm thời để lưu các sản phẩm cần chuyển sang preparingList
    const itemsToPrepare = [];

    // Lấy thông tin địa chỉ người dùng nhập và cập nhật cho từng sản phẩm trong giỏ hàng
    for (let i = 0; i < cartList.length; i++) {
        cartList[i].receiver = infopPur.receiver;
        cartList[i].phone = infopPur.phone;
        cartList[i].province = infopPur.province;
        cartList[i].district = infopPur.district;
        cartList[i].wards = infopPur.wards;
        cartList[i].road = infopPur.road;
        // Thêm sản phẩm vào danh sách tạm thời
        itemsToPrepare.push(cartList[i]);
    }
    localStorage.removeItem("listCart");
    // Chuyển các sản phẩm từ giỏ hàng sang danh sách chuẩn bị
    for (let i = 0; i < itemsToPrepare.length; i++) {
        preparingList.push(itemsToPrepare[i]);
    }

    // Cập nhật localStorage cho preparingList
    localStorage.setItem("listPreparing", JSON.stringify(preparingList));

    // Render lại danh sách giỏ hàng
    genderCart();
    genderPurchased();
    // Tải lại trang để cập nhật giao diện
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}

function buyProduct(index) {
    event.preventDefault();
    addres.style.opacity = "1";
    addres.style.visibility = "visible";
    addres.innerHTML = `<div class="addres__blog">
                <div class="adders__content">
                    <h2 class="addres__heading">
                        Địa chỉ giao hàng và thanh toán
                    </h2>
                    <form action="" class="adders__form">
                        <div class="adders__group">
                            <label for="receiver" class="receiver__name"
                                >Người nhận hàng</label
                            >
                            <input
                                type="text"
                                name="receiver"
                                id="receiver"
                                class="receiver"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="phone" class="phone__name"
                                >Số điện thoại</label
                            >
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                class="phone"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="province" class="province__name"
                                >Tỉnh Thành</label
                            >
                            <input
                                type="text"
                                name="province"
                                id="province"
                                class="province"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="district" class="district__name"
                                >Quận Huyện</label
                            >
                            <input
                                type="text"
                                name="district"
                                id="district"
                                class="district"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="wards" class="wards__name"
                                >Xã Phường</label
                            >
                            <input
                                type="text"
                                name="wards"
                                id="wards"
                                class="wards"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="road" class="road__name"
                                >Số nhà - Đường</label
                            >
                            <input
                                type="text"
                                name="road"
                                id="road"
                                class="road"
                            />
                        </div>
                    </form>
                    <div class="adders__total--row">
                        <p class="adders__total--name">Thanh toán:</p>
                        <p class="adders__total">$${cartList[index].total}.00</p>
                    </div>
                    <div class="btn__adders--row">
                        <div class="btn__baner__hover btn__adders__hover">
                            <a href="" class="btn__banner btn__adders">
                                <p>Đặt hàng</p>
                            </a>
                        </div>
                        <div class="btn__baner__hover btn__adders__hover">
                            <a
                                href=""
                                class="btn__banner btn__adders btn__adders--out" 
                            >
                                <p>Thoát</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
    // Lay Dom
    const btnOder = document.querySelector(".btn__adders");
    const btnOut = document.querySelector(".btn__adders--out");
    const addersBlog = document.querySelector(".addres__blog");
    const receiver = document.querySelector(".receiver");
    const phone = document.querySelector(".phone");
    const province = document.querySelector(".province");
    const district = document.querySelector(".district");
    const wards = document.querySelector(".wards");
    const road = document.querySelector(".road");
    // xu li su kien
    btnOut.addEventListener("click", (evt) => {
        evt.preventDefault();
        checkOut(addersBlog);
    });

    btnOder.addEventListener("click", (evt) => {
        evt.preventDefault();
        oderSucces(addersBlog);
        infoPurchased(
            index,
            (infopPur = {
                receiver: receiver.value,
                phone: phone.value,
                province: province.value,
                district: district.value,
                wards: wards.value,
                road: road.value,
            })
        );
    });
}

function buyAll() {
    event.preventDefault();
    let subtotal = cartList.reduce((price, current) => {
        return price + Number(current.total);
    }, 0);
    addres.style.opacity = "1";
    addres.style.visibility = "visible";
    addres.innerHTML = `<div class="addres__blog">
                <div class="adders__content">
                    <h2 class="addres__heading">
                        Địa chỉ giao hàng và thanh toán
                    </h2>
                    <form action="" class="adders__form">
                        <div class="adders__group">
                            <label for="receiver" class="receiver__name"
                                >Người nhận hàng</label
                            >
                            <input
                                type="text"
                                name="receiver"
                                id="receiver"
                                class="receiver"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="phone" class="phone__name"
                                >Số điện thoại</label
                            >
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                class="phone"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="province" class="province__name"
                                >Tỉnh Thành</label
                            >
                            <input
                                type="text"
                                name="province"
                                id="province"
                                class="province"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="district" class="district__name"
                                >Quận Huyện</label
                            >
                            <input
                                type="text"
                                name="district"
                                id="district"
                                class="district"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="wards" class="wards__name"
                                >Xã Phường</label
                            >
                            <input
                                type="text"
                                name="wards"
                                id="wards"
                                class="wards"
                            />
                        </div>
                        <div class="adders__group">
                            <label for="road" class="road__name"
                                >Số nhà - Đường</label
                            >
                            <input
                                type="text"
                                name="road"
                                id="road"
                                class="road"
                            />
                        </div>
                    </form>
                    <div class="adders__total--row">
                        <p class="adders__total--name">Thanh toán:</p>
                        <p class="adders__total">$${subtotal}.00</p>
                    </div>
                    <div class="btn__adders--row">
                        <div class="btn__baner__hover btn__adders__hover">
                            <a href="" class="btn__banner btn__adders">
                                <p>Đặt hàng</p>
                            </a>
                        </div>
                        <div class="btn__baner__hover btn__adders__hover">
                            <a
                                href=""
                                class="btn__banner btn__adders btn__adders--out" 
                            >
                                <p>Thoát</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
    // Lay Dom
    const btnOder = document.querySelector(".btn__adders");
    const btnOut = document.querySelector(".btn__adders--out");
    const addersBlog = document.querySelector(".addres__blog");
    const receiver = document.querySelector(".receiver");
    const phone = document.querySelector(".phone");
    const province = document.querySelector(".province");
    const district = document.querySelector(".district");
    const wards = document.querySelector(".wards");
    const road = document.querySelector(".road");
    // xu li su kien
    btnOut.addEventListener("click", (evt) => {
        evt.preventDefault();
        checkOut(addersBlog);
    });

    btnOder.addEventListener("click", (evt) => {
        evt.preventDefault();
        oderSucces(addersBlog);
        infoAllPurchased(
            (infopPur = {
                receiver: receiver.value,
                phone: phone.value,
                province: province.value,
                district: district.value,
                wards: wards.value,
                road: road.value,
            })
        );
    });
}

function genderCart() {
    if (cartList) {
        const htmls = cartList.map((cart, index) => {
            return `<div class="wishlist__line cart__line"></div>
                        <div class="wishlist__product cart__product">
                            <img
                                src="${cart.img}"
                                alt=""
                                class="wishlist__product--img cart__product--img"
                            />
                            <p
                                class="wishlist__product--name cart__product--name"
                            >
                            ${cart.name}
                            </p>
                            ${cart.colors}
                            <p class="cart__product--size">${cart.size}</p>
                            <p class="cart__product--quantity">${cart.quantity}</p>
                            <p
                                class="wishlist__product--price cart__product--price"
                            >
                            $${cart.total}.00
                            </p>
                            <div
                                class="wishlist__product--status cart__product--status"
                            >
                                In stock
                            </div>
                            <div class="btn__baner__hover btn__cart--hover">
                                <a href="" class="btn__banner btn__cart" onclick = "buyProduct(${index})">
                                    <p>Buy</p>
                                </a>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-15 cart__delete"
                                onclick = "deleteCart(${index})"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </div>`;
        });
        if (cartList.length > 0) {
            cartHeader.innerHTML = `<p class="wishlist__heading one">Product</p>
                <div class="wishlist__header--row cart__header--row">
                    <p class="wishlist__heading cart__color">Color</p>
                    <p class="wishlist__heading cart__size">Size</p>
                    <p class="wishlist__heading cart__quantity">
                        Quantity
                    </p>
                    <p class="wishlist__heading">Price</p>
                    <p class="wishlist__heading cart__heading">
                        Stock Status
                    </p>
                </div>
                <p class="wishlist__heading cart__three">Remove</p>`;
            cartAll.innerHTML = `<div class="wishlist__line cart__line"></div>
                                   <div class="btn__baner__hover btn__all--hover">
                                      <a href="" class="btn__banner btn__all" onclick = "buyAll()">
                                               <p>Buy All</p>
                                      </a>
                                  </div>`;
        } else if (cartList.length === 0) {
            cartHeader.innerHTML = `<p class="no__wishlist">
                            There are no favorite products
                        </p>`;
            cartAll.innerHTML = ``;
        }
        cartBody.innerHTML = htmls.join("");
        notifyCart();
        // xu li them
        const colors = document.querySelectorAll(".exclusive__color");
        colors.forEach((color) => {
            color.classList.add("cart__product--color");
        });
    }
}

function deleteCart(index) {
    const cartLine = document.querySelectorAll(".cart__line");
    const cartProduct = document.querySelectorAll(".cart__product");
    cartList.splice(index, 1);
    cartLine[index].remove();
    cartProduct[index].remove();
    localStorage.setItem("listCart", JSON.stringify(cartList));
    genderCart();
}

userCart();
genderPurchased();
genderCart();

// Xu li khi user da dang nhap va hien ten
const userName = document.querySelector(".user");
const modal = document.querySelector(".modal");
const btnUser = document.querySelector(".header__user--row.users");
const headerUser = document.querySelector(".header__user");
const notifyWish = document.querySelector(".wishlist__notify--number");

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

function notify(wishList) {
    if (wishList) {
        notifyWish.innerText = wishList.length;
    } else {
        notifyWish.innerText = "0";
    }
}

window.addEventListener("load", () => {
    let wishList = JSON.parse(localStorage.getItem("listWish"));
    notify(wishList);
});

handerLogout();

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
    overlayLabel.style.fontWeight = "400"
    
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
    // setTimeout(() => {
    //     genderOverlay();
    // }, 2000);
});
