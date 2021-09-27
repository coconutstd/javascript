function salePrice(discountRate, price) {
    return price - (price * (discountRate * 0.01));
}

console.log(salePrice(10, 539000));
console.log(salePrice(30, 539000));

function discountPrice(discountRate) {
    return function(price) {
        return price - (price * (discountRate * 0.01));
    }
}

console.log(discountPrice(10)(539000));

const summerPrice = discountPrice(10);
const winterPrice = discountPrice(30);

console.log(summerPrice(539000));
console.log(winterPrice(539000));
