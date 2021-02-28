const modal = document.querySelector('#modal');
let basket = {
    count: 0,
    price: 0,
    products: []
};
const products = [
    {
        name: 'product1',
        number: 1,
        price: 200,
        img: ["1.jpg", "1-1.jpg"]
    },
    {
        name: 'product2',
        number: 2,
        price: 200,
        img: ["2.jpg", "2-2.jpg"]
    },
    {
        name: 'product3',
        number: 3,
        price: 200,
        img: ["3.jpg"]
    },
    {
        name: 'product4',
        number: 4,
        price: 200,
        img: ["4.jpg"]
    }

]

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        modal.style.display = 'none'
    }
})
const divBasket = document.getElementById("basket");
const divCatalog = document.getElementById("catalog");
const divImg = document.querySelector('#modal .img');
const btnImg1 = document.querySelector('#modal .btn1');
const btnImg2 = document.querySelector('#modal .btn2');
const divaddress = document.getElementById("address");
const divcomment = document.getElementById("comment");
const divnext = document.getElementById("next");
const divZakaz = document.getElementById("zakaz");
let step = 1;
btnImg2.onclick = function () {
    const activeImg = document.querySelector('#modal img.active');
    const next = activeImg.nextElementSibling;
    activeImg.className = '';
    if (!next) {
        const firstImg = document.querySelector('#modal img');
        firstImg.className = 'active';
    } else {
        next.className = 'active';
    }
}
calc();
products.forEach(function (pr) {
    const divProduct = document.createElement("div");
    const aProduct = document.createElement("a");
    divProduct.className = "prod";
    aProduct.innerText = pr.name + ' ' + pr.price + ' руб. ';
    aProduct.addEventListener("click", function (e) {
        e.stopPropagation();
        modal.style.display = 'block';
        divImg.innerHTML = '';
        pr.img.forEach(function (i, count) {
            const imgProduct = document.createElement("img");
            if (count == 0) {
                imgProduct.className = "active"
            };
            imgProduct.src = i;
            divImg.appendChild(imgProduct);
        })

    })
    const btnProduct = document.createElement("button");
    btnProduct.innerText = "+";
    btnProduct.onclick = function () {
        addToBasket(pr);
        step = 1;
        renderStep();
    };
    divProduct.appendChild(aProduct);
    divProduct.appendChild(btnProduct);
    divCatalog.appendChild(divProduct);

})

function addToBasket(pr) {
    basket.products.push(pr);
    calc();
}

function delFromBasket(pr) {

    basket.products = basket.products.filter(function (p) {
        return p.number != pr.number;
    });
    calc();
}

function calc() {
    basket.price = 0;
    basket.products.forEach(function (elem) {
        basket.price += elem.price;
    });
    basket.count = basket.products.length;
    renderBasket();
}

function renderBasket() {
    divBasket.innerHTML = '';
    if (basket.products.length == 0) {
        divBasket.innerText = "Корзина пуста";
        divnext.style.display = "none";
    } else {
        basket.products.forEach(function (pr) {
            const divProduct = document.createElement("div");
            divProduct.innerText = pr.name + ' ' + pr.price + ' руб. ';
            const btnProduct = document.createElement("button");
            btnProduct.innerText = "-";
            btnProduct.onclick = function () {
                delFromBasket(pr);
            };
            divProduct.appendChild(btnProduct);
            divBasket.appendChild(divProduct);

        });
        divSum = document.createElement("div");
        divSum.innerText = basket.count + " товаров, на сумму " + basket.price + " руб."
        divBasket.appendChild(divSum);
        divnext.style.display = "block";

    }
}

function renderStep() {
    divaddress.style.display = "none";
    divBasket.style.display = "none";
    divcomment.style.display = "none";
    divnext.style.display = "none";
    divZakaz.style.display = "none";
    if (step == 1) {
        divBasket.style.display = "block";
        divnext.style.display = "block";
    }
    if (step == 2) {
        divaddress.style.display = "block";
        divnext.style.display = "block";
    }
    if (step == 3) {
        divcomment.style.display = "block";
        divnext.style.display = "block";
    }
    if (step == 4) {
        divZakaz.style.display = "block";
    }

}
divnext.onclick = function () {

    step++;
    if (step > 4) step = 4;
    renderStep();
    if (step == 4) basket.products = [];
    calc();
}
