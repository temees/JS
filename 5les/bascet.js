let basket = {
    count: 0,
    price: 0,
    products: []
};
const products = [
    {
        name: 'product1',
        number: 1,
        price: 200
    },
    {
        name: 'product2',
        number: 2,
        price: 200
    },
    {
        name: 'product3',
        number: 3,
        price: 200
    },
    {
        name: 'product4',
        number: 4,
        price: 200
    }

]
const divBasket = document.getElementById("basket");
const divCatalog = document.getElementById("catalog");
calc();
products.forEach(function (pr) {
    const divProduct = document.createElement("div");
    divProduct.innerText = pr.name + ' ' + pr.price + ' руб. ';
    const btnProduct = document.createElement("button");
    btnProduct.innerText = "+";
    btnProduct.onclick = function () {
        addToBasket(pr);
    };
    divProduct.appendChild(btnProduct);
    divCatalog.appendChild(divProduct);
})

function addToBasket(pr) {
    basket.products.push(pr);
    calc();
}
function delFromBasket(pr) {
    
    basket.products = basket.products.filter(function(p){
        return p.number!= pr.number;
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
        divBasket.innerText = "корзина пуста";
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
    }
}
