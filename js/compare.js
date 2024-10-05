// xu li xem chi tiet san pham detail
const iconDetail = document.querySelectorAll(".icon__deatail");
const deTail = document.querySelector(".detail");
const deatailBlog = document.querySelector(".detail__blog");
const imgWish = document.querySelectorAll(".img__exclusive");
const nameWish = document.querySelectorAll(".exclusive__name");
const priceWish = document.querySelectorAll(".exclusive__price");
const priceDetailBf = document.querySelectorAll(".exclusive__price--before");
const disCount = document.querySelectorAll(".exclusive__discount");
const detailStar = document.querySelectorAll(".exclusive__star");
const detailnumber = document.querySelectorAll(".exclusive__number");
const detailColorRow = document.querySelectorAll(".exclusive__color--row");

function handleColor(color, index) {
    const colorRow = color.parentNode;
    for (const boder of colorRow.children) {
        if (boder.closest(".box__shadow")) {
            boder.classList.remove("box__shadow");
        }
    }
    color.classList.add("box__shadow");
}

function detail(index) {
    event.preventDefault();
    deTail.style.opacity = "1";
    deTail.style.visibility = "visible";
    const starRow =
        iconDetail[index].parentNode.parentNode.parentNode.children[1]
            .children[2].children[0];
    const colorRow =
        iconDetail[index].parentNode.parentNode.parentNode.children[4]
            .children[0];
    const starList = [];
    const colorList = [];
    for (const star of starRow.children) {
        starList.push(star.outerHTML);
    }
    for (const color of colorRow.children) {
        colorList.push(color.outerHTML);
    }
    const infoDetail = {
        img: imgWish[index].src,
        name: nameWish[index].innerText,
        price: priceWish[index].innerText,
        priceBefore: priceDetailBf[index].innerText,
        discount: disCount[index].innerText,
        star: starList.join(""),
        number: detailnumber[index].innerText,
        color: colorList.join(""),
    };

    deTail.innerHTML = ` <detail class="detail__blog">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-16 detail__delete"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
                <div class="deatail__content">
                    <div class="detail__image">
                        <div class="detail__thumb">
                            <img
                                src="${infoDetail.img}"
                                alt=""
                                class="thumb__detail"
                            />
                        </div>
                        <div class="detail__img--row">
                            <div class="detail__img active">
                                <img
                                    src="${infoDetail.img}"
                                    alt=""
                                    class="img__detail"
                                />
                            </div>
                            <div class="detail__img">
                                <img
                                    src="${infoDetail.img}"
                                    alt=""
                                    class="img__detail"
                                />
                            </div>
                            <div class="detail__img">
                                <img
                                    src="${infoDetail.img}"
                                    alt=""
                                    class="img__detail"
                                />
                            </div>
                            <div class="detail__img">
                                <img
                                    src="${infoDetail.img}"
                                    alt=""
                                    class="img__detail"
                                />
                            </div>
                            <div class="detail__img">
                                <img
                                    src="${infoDetail.img}"
                                    alt=""
                                    class="img__detail"
                                />
                            </div>
                        </div>
                        <div class="btn__detail--slide">
                            <button class="btn__deatail--prev">
                                <i
                                    class="fa-solid fa-arrow-left deatail__img--icon"
                                ></i>
                            </button>
                            <button class="btn__deatail--next">
                                <i
                                    class="fa-solid fa-arrow-right deatail__img--icon"
                                ></i>
                            </button>
                        </div>
                    </div>
                    <div class="detail__info">
                        <p class="deatail__heading">${infoDetail.name}</p>
                        <div class="detail__info--row">
                            <div class="exclusive__row">
                                <p class="exclusive__price detail__price">
                                ${infoDetail.price}
                                </p>
                                <p class="exclusive__price--before">${infoDetail.priceBefore}</p>
                                <div class="exclusive__discount--row">
                                    <p class="exclusive__discount">${infoDetail.discount}</p>
                                    <p class="exclusive__off">Off</p>
                                </div>
                            </div>
                            <div class="exclusive__star--row detail__star--row">
                                ${infoDetail.star}
                                <p class="exclusive__number">${infoDetail.number}</p>
                            </div>
                        </div>
                        <p class="detail__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                        </p>
                        <div class="detail__commit--row">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-16 detail__commit--icon"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                                />
                            </svg>
                            <p class="detail__title">
                                1 Year AL Jazeera Brand Warranty
                            </p>
                        </div>
                        <div class="detail__commit--row">
                            <i
                                class="fa-solid fa-rotate detail__commit--icon"
                            ></i>
                            <p class="detail__title">30 Day Return Policy</p>
                        </div>
                        <div class="detail__commit--row">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-16 detail__commit--icon"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <p class="detail__title">
                                Cash on Delivery available
                            </p>
                        </div>
                        <p class="detail__color">Color</p>
                        <div class="exclusive__color--dot detail__dot">
                           <div class="exclusive__color--row">
                                   ${infoDetail.color}
                           </div>
                     
                        </div>
                        <div class="detail__size--row">
                            <p class="size">Size</p>
                            <ul class="size__list">
                                <li class="size__item active">XS</li>
                                <li class="size__item">S</li>
                                <li class="size__item">M</li>
                                <li class="size__item">L</li>
                                <li class="size__item">XL</li>
                            </ul>
                        </div>
                        <div class="detail__line"></div>
                        <div class="detail__user">
                            <div class="detail__number--row">
                                <div class="detail__subtraction">-</div>
                                <div class="detail__number">1</div>
                                <div class="detail__curvature">+</div>
                            </div>
                            <div class="btn__baner__hover">
                                <a
                                    href=""
                                    class="btn__banner btn__wishlist btn__detail"
                                >
                                    <i
                                        class="fa-solid fa-cart-shopping icon__shopping"
                                    ></i>
                                    <p>Add To Cart</p>
                                </a>
                            </div>
                            <div class="detail__interact">
                                <i
                                    class="fa-solid fa-shuffle detail__compare--icon"
                                ></i>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-18 detail__withlist--icon"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="detail__line"></div>
                        <p class="detail__clastify">
                            SKU: <span>BE45VGRT</span>
                        </p>
                        <p class="detail__clastify">
                            Category:<span> Clothing</span>
                        </p>
                        <p class="detail__clastify">
                            Tags:
                            <span class="cloth">Cloth</span>,
                            <span>printed</span>
                        </p>
                        <div class="detail__social--row">
                            <p class="detail__share">Share:</p>
                            <div class="footer__social detail__social">
                                <i
                                    class="fa-brands fa-facebook-f icon__social detail__social--icon"
                                ></i>
                                <i
                                    class="fa-brands fa-twitter icon__social detail__social--icon"
                                ></i>
                                <i
                                    class="fa-brands fa-google icon__social detail__social--icon"
                                ></i>
                                <i
                                    class="fa-brands fa-youtube icon__social detail__social--icon"
                                ></i>
                                <i
                                    class="fa-brands fa-instagram icon__social detail__social--icon"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </detail>`;
    // xu li an vao color san pham goi lai ham
    const clickColors = document.querySelectorAll(".exclusive__boder");
    const sizes = document.querySelectorAll(".size__item");
    const subtraction = document.querySelector(".detail__subtraction");
    const detailNumber = document.querySelector(".detail__number");
    const curvature = document.querySelector(".detail__curvature");
    const detailPrev = document.querySelector(".btn__deatail--prev");
    const detailNext = document.querySelector(".btn__deatail--next");
    const detailImgRow = document.querySelector(".detail__img--row");
    const detailImg = document.querySelectorAll(".detail__img");
    const thumbDetail = document.querySelector(".thumb__detail");
    const imgDetail = document.querySelectorAll(".img__detail");
    const detailDelete = document.querySelector(".detail__delete");
    const detailBlog = document.querySelector(".detail__blog");
    const btnDetail = document.querySelector(".btn__detail");
    const sizeCart = document.querySelectorAll(".size__item");
    let i = 1;
    //
    function sizeColor(size, index) {
        for (const i of sizes) {
            if (i.closest(".active")) {
                i.classList.remove("active");
            }
        }
        size.classList.add("active");
    }

    function increase() {
        i++;
        detailNumber.innerText = i;
    }

    function reduce() {
        if (i > 1) {
            i--;
            detailNumber.innerText = i;
        }
    }

    function slideDeNext() {
        detailImgRow.scrollLeft += detailImgRow.offsetWidth;
    }

    function slideDePrev() {
        detailImgRow.scrollLeft -= detailImgRow.offsetWidth;
    }

    function detailBoder(img) {
        document
            .querySelector(".detail__img.active")
            .classList.remove("active");
        img.classList.add("active");
    }

    function detailZoom(img, index) {
        thumbDetail.src = imgDetail[index].src;
    }

    function deleteDetail() {
        detailBlog.remove();
        deTail.style.opacity = "0";
        deTail.style.visibility = "hidden";
    }
    cartClick(btnDetail, infoDetail, sizeCart, colorList, detailNumber);
    //
    clickColors.forEach((color, index) => {
        color.addEventListener("click", () => {
            handleColor(color, index);
            cartClick(btnDetail, infoDetail, sizeCart, color, detailNumber);
        });
    });

    sizes.forEach((size, index) => {
        size.addEventListener("click", () => {
            sizeColor(size, index);
        });
    });

    curvature.addEventListener("click", () => {
        increase();
    });

    subtraction.addEventListener("click", () => {
        reduce();
    });

    detailPrev.addEventListener("click", () => {
        slideDePrev();
    });

    detailNext.addEventListener("click", () => {
        slideDeNext();
    });

    detailImg.forEach((img, index) => {
        img.addEventListener("click", () => {
            detailBoder(img);
            detailZoom(img, index);
        });
    });

    detailDelete.addEventListener("click", () => {
        deleteDetail();
    });

    btnDetail.addEventListener("click", (evt) => {
        evt.preventDefault();
    });
}

// Xu li them san pham vao gio hang
let listCart = JSON.parse(localStorage.getItem("listCart")) || [];
const toastCart = document.querySelector(".toast__cart");

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

function notifyCart(listCart) {
    if (listCart) {
        console.log("123");
        cartNotify.innerText = listCart.length;
    } else {
        cartNotify.innerText = "0";
    }
}

function cart(infoDetail, sizeCart, colorRow, number, cartList) {
    const listColor = [];
    let string = "Bạn đã thêm sản phẩm vào giỏ hàng !";
    // lay mau san pham
    if (listColor.length > 0) {
        listColor.shift;
    }
    const colorChidren = colorRow.children[0];
    console.log(colorChidren);
    listColor.push(colorChidren.outerHTML);
    // lay size san pham
    let cartSize = "";
    for (const size of sizeCart) {
        if (size.closest(".active")) {
            cartSize += size.innerText;
        }
    }
    // them san pham
    infoDetail.size = cartSize;
    infoDetail.colors = listColor.join("");
    infoDetail.quantity = number.innerText;
    infoDetail.total = (
        Number(infoDetail.quantity) * Number(infoDetail.price.slice(1))
    ).toString();
    console.log(infoDetail);
    listCart.push(infoDetail);
    addCartSucces(string);
    notifyCart();
    localStorage.setItem("listCart", JSON.stringify(listCart));
    genderCash();
}

function cartClick(
    btnDetail,
    infoDetail,
    sizeCart,
    color,
    detailNumber,
    cartList
) {
    btnDetail.addEventListener("click", (evt) => {
        evt.preventDefault();
        cart(infoDetail, sizeCart, color, detailNumber, cartList);
    });
}

// Xu li khi user da dang nhap va hien ten
const userName = document.querySelector(".user");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const modal = document.querySelector(".modal");
const btnUser = document.querySelector(".header__user--row.users");
const headerUser = document.querySelector(".header__user");
const cartList = JSON.parse(localStorage.getItem("listCart"));
const wishList = JSON.parse(localStorage.getItem("listWish"));
const notifyNumber = document.querySelector(".wishlist__notify--number");
const cartNotify = document.querySelector(".notify__number");

function handerLogout() {
    if (currentUser) {
        userName.textContent = currentUser.username;
        notifyNumber.style.marginLeft = "0";
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
        notifyNumber.innerText = wishList.length;
    } else {
        notifyNumber.innerText = "0";
    }
}

function notifyCart(cartList) {
    if (cartList) {
        cartNotify.innerText = cartList.length;
    } else {
        cartNotify.innerText = "0";
    }
}

setInterval(() => {
    let cartList = JSON.parse(localStorage.getItem("listCart"));
    let wishList = JSON.parse(localStorage.getItem("listWish"));
    notifyCart(cartList);
    notify(wishList);
}, 1000);
handerLogout();

// Xu li cash cart
const cashCart = document.querySelector(".cash__cart");

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

window.addEventListener("load", () => {
    // notify();
    // notifyCart();
    genderCash();
});

// xu li hien san pham so sanh
const compareone = document.querySelectorAll(".compare__one");
const comparetwo = document.querySelectorAll(".compare__two");
const comparethree = document.querySelectorAll(".compare__column--two.three");
let compareOne = JSON.parse(localStorage.getItem("compareOne"));
let compareTwo = JSON.parse(localStorage.getItem("compareTwo"));
let compareThree = JSON.parse(localStorage.getItem("compareThree"));

function deleteCompare(item) {
    if (item.parentNode.closest(".compare__one")) {
        compareOne.splice(0, 1);
        localStorage.setItem("compareOne", JSON.stringify(compareOne));
        genderCompareOne();
    } else if (item.parentNode.closest(".compare__two")) {
        compareTwo.splice(0, 1);
        localStorage.setItem("compareTwo", JSON.stringify(compareTwo));
        genderCompareTwo();
    } else if (item.parentNode.closest(".compare__column--two.three")) {
        compareThree.splice(0, 1);
        localStorage.setItem("compareThree", JSON.stringify(compareThree));
        genderCompareThree();
    }
}

function genderCompareOne() {
    if (compareOne) {
        if (compareOne.length > 0) {
            compareone[0].innerHTML = `<img
                                    src="${compareOne[0].img}"
                                    alt=""
                                    class="img__compare"
                                />`;
            compareone[1].innerHTML = ` <p class="compare__title">
                                       ${compareOne[0].name}
                                    </p>`;
            compareone[2].innerHTML = ` <p class="compare__price">${compareOne[0].price}</p>`;
            compareone[3].innerHTML = ` <div
                                    class="exclusive__star--row compare__star--row"
                                >
                                ${compareOne[0].star}
                                    <p class="exclusive__number">${compareOne[0].number}</p>
                                </div>`;
            compareone[4].innerHTML = `<div class="btn__baner__hover">
                                    <a
                                        href=""
                                        class="btn__banner btn__wishlist btn__compare--add" onclick = "detail(${compareOne[0].index})"
                                    >
                                        <i
                                            class="fa-solid fa-cart-shopping icon__shopping"
                                        ></i>
                                        <p>Add To Cart</p>
                                    </a>
                                </div>`;
            compareone[5].innerHTML = `<p class="compare__descrip">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and
                                </p>`;
            compareone[5].classList.add("align");
            compareone[6].innerHTML = `<div
                                    class="exclusive__color--row compare__color--row"
                                >
                                ${compareOne[0].color}
                                </div>`;
            const boxShadow = document.querySelector(
                ".exclusive__boder.box__shadow"
            );
            boxShadow.classList.remove("box__shadow");
            compareone[7].innerHTML = `<p class="compare__size">XS, S, M, L, XL</p>`;
            compareone[8].innerHTML = ` <p class="compare__avalible">In Stock</p>`;
            compareone[9].innerHTML = `<div class="compare__remove--row" onclick = "deleteCompare(this)">
                                    <p class="compare__remove">Remove</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-20 compare__remove--icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>`;
        } else if (compareOne.length === 0) {
            compareone[0].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[1].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[2].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[3].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[4].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[5].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[5].classList.remove("align");
            compareone[6].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[7].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[8].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            compareone[9].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
        }
    }
}

function genderCompareTwo() {
    if (compareTwo) {
        if (compareTwo.length > 0) {
            comparetwo[0].innerHTML = `<img
                                    src="${compareTwo[0].img}"
                                    alt=""
                                    class="img__compare"
                                />`;
            comparetwo[1].innerHTML = ` <p class="compare__title">
                                       ${compareTwo[0].name}
                                    </p>`;
            comparetwo[2].innerHTML = ` <p class="compare__price">${compareTwo[0].price}</p>`;
            comparetwo[3].innerHTML = ` <div
                                    class="exclusive__star--row compare__star--row"
                                >
                                ${compareTwo[0].star}
                                    <p class="exclusive__number">${compareTwo[0].number}</p>
                                </div>`;
            comparetwo[4].innerHTML = `<div class="btn__baner__hover">
                                    <a
                                        href=""
                                        class="btn__banner btn__wishlist btn__compare--add" onclick = "detail(${compareTwo[0].index})"
                                    >
                                        <i
                                            class="fa-solid fa-cart-shopping icon__shopping"
                                        ></i>
                                        <p>Add To Cart</p>
                                    </a>
                                </div>`;
            comparetwo[5].innerHTML = `<p class="compare__descrip">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and
                                </p>`;
            comparetwo[5].classList.add("align");
            comparetwo[6].innerHTML = `<div
                                    class="exclusive__color--row compare__color--row"
                                >
                                ${compareTwo[0].color}
                                </div>`;
            const boxShadow = document.querySelector(
                ".exclusive__boder.box__shadow"
            );
            boxShadow.classList.remove("box__shadow");
            comparetwo[7].innerHTML = `<p class="compare__size">XS, S, M, L, XL</p>`;
            comparetwo[8].innerHTML = ` <p class="compare__avalible">In Stock</p>`;
            comparetwo[9].innerHTML = `<div class="compare__remove--row" onclick = "deleteCompare(this)">
                                    <p class="compare__remove">Remove</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-20 compare__remove--icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>`;
        } else if (compareTwo.length === 0) {
            comparetwo[0].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[1].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[2].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[3].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[4].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[5].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[5].classList.remove("align");
            comparetwo[6].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[7].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[8].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparetwo[9].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
        }
    }
}

function genderCompareThree() {
    if (compareThree) {
        if (compareThree.length > 0) {
            comparethree[0].innerHTML = `<img
                                    src="${compareThree[0].img}"
                                    alt=""
                                    class="img__compare"
                                />`;
            comparethree[1].innerHTML = ` <p class="compare__title">
                                       ${compareThree[0].name}
                                    </p>`;
            comparethree[2].innerHTML = ` <p class="compare__price">${compareThree[0].price}</p>`;
            comparethree[3].innerHTML = ` <div
                                    class="exclusive__star--row compare__star--row"
                                >
                                ${compareThree[0].star}
                                    <p class="exclusive__number">${compareThree[0].number}</p>
                                </div>`;
            comparethree[4].innerHTML = `<div class="btn__baner__hover">
                                    <a
                                        href=""
                                        class="btn__banner btn__wishlist btn__compare--add"  onclick = "detail(${compareThree[0].index})"
                                    >
                                        <i
                                            class="fa-solid fa-cart-shopping icon__shopping"
                                        ></i>
                                        <p>Add To Cart</p>
                                    </a>
                                </div>`;
            comparethree[5].innerHTML = `<p class="compare__descrip">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and
                                </p>`;
            comparethree[5].classList.add("align");
            comparethree[6].innerHTML = `<div
                                    class="exclusive__color--row compare__color--row"
                                >
                                ${compareThree[0].color}
                                </div>`;
            const boxShadow = document.querySelector(
                ".exclusive__boder.box__shadow"
            );
            boxShadow.classList.remove("box__shadow");
            comparethree[7].innerHTML = `<p class="compare__size">XS, S, M, L, XL</p>`;
            comparethree[8].innerHTML = ` <p class="compare__avalible">In Stock</p>`;
            comparethree[9].innerHTML = `<div class="compare__remove--row" onclick = "deleteCompare(this)">
                                    <p class="compare__remove">Remove</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-20 compare__remove--icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>`;
        } else if (compareThree.length === 0) {
            comparethree[0].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[1].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[2].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[3].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[4].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[5].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[5].classList.remove("align");
            comparethree[6].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[7].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[8].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
            comparethree[9].innerHTML = `<p class="compare__noinfo">No infomation</p>`;
        }
    }
}

genderCompareOne();
genderCompareTwo();
genderCompareThree();

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
    setTimeout(() => {
        genderOverlay();
    }, 2000);
});
