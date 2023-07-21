const selectInputRef = document.querySelector('.select__input');
const selectDropdown = document.querySelector(".select__dropdown");
const selectArrow = document.querySelector(".select__input")
const productsformInputRefs = document.querySelector('#products.form__input');
const allProducts = document.querySelector(".list__item");
/*const ProductList = document.querySelector('#products');*/

const firstItemCalc = document.querySelector('.list__item[data-id="products"] .item__calc');
let words = firstItemCalc.textContent.split(' ');   ``
let originalFirstWord = words[0];
let originalMultiplyer = words[2];
let Multiply = originalMultiplyer.replace("$", "")
const firstItemPrice = document.querySelector('.list__item[data-id="products"] .item__price');
let words2 = firstItemPrice.textContent.split(' ');
const TotalPriceRef = document.querySelector('.total__price');
let TotalPrice = TotalPriceRef.textContent.split(' ');   ``
let PriceR = TotalPrice[0];
console.log(PriceR)
console.log(words2)

productsformInputRefs.addEventListener('input', function() {

    if (this.value !== '' && !this.value.includes('.') && !this.value.includes(',')) {

            words[0] = this.value;
            firstItemCalc.textContent = words.join(' ');
            originalFirstWord = this.value;
            let score = originalFirstWord * Multiply
        console.log(score)
             words2[0] = "$" + score
        firstItemPrice.textContent = words2.join(' ');

            allProducts.style.display = "flex";


    }else{
        allProducts.style.display = "none";

    }
});
const allProducts2 = document.querySelector(".list__item:nth-child(2)");
const ordersformInputRefs = document.querySelector('#orders.form__input');
const firstItemCalcorder = document.querySelector('.list__item:nth-child(2)[data-id="orders"] .item__calc');

let words21 = firstItemCalcorder.textContent.split(' ');

let originalFirstWordorder = words21[0];

let originalMultiplyerorder = words21[2];

let Multiply2 = originalMultiplyerorder.replace("$", "")


const firstItemPriceorder = document.querySelector('.list__item:nth-child(2)[data-id="orders"] .item__price');
console.log(firstItemPriceorder)

let words212 = firstItemPrice.textContent.split(' ');
console.log(words212)
ordersformInputRefs.addEventListener('input', function() {

    if (this.value !== '' && !this.value.includes('.') && !this.value.includes(',')) {
 console.log("cieć")
        words21[0] = this.value;
        firstItemCalcorder.textContent = words21.join(' ');
        originalFirstWordorder = this.value;
        let score = originalFirstWordorder * Multiply2
        console.log(score)
        words212[0] = "$" + score
        firstItemPriceorder.textContent = words212.join(' ');
        allProducts2.style.display = "flex";


    }else{
        allProducts2.style.display = "none";

    }
});







selectInputRef.addEventListener('click', () => {

    selectDropdown.style.display = (selectDropdown.style.display === 'block') ? 'none' : 'block';

    console.log("chuj")

})

selectArrow.addEventListener('click', function() {
    // Dodaj klasę 'rotated' do elementu
    this.classList.toggle('rotated');
});

const selectorrrInputRef = document.querySelector('.select__input');
function selectOption(option) {
    selectorrrInputRef.innerText = option;

    const listItemPackage = document.querySelector('.list__item[data-id="package"]');
    const listItemPackageCalc = listItemPackage.querySelector('.item__calc');
    const listItemPackagePrice = listItemPackage.querySelector('.item__price');
    const listItemAccounting = document.querySelector('.list__item[data-id="accounting"]')
    const listItemAccountingPrice = listItemAccounting.querySelector('.item__price');
    const listItemTerminal = document.querySelector('.list__item[data-id="terminal"]')
    const listItemTerminalPrice = listItemTerminal.querySelector('.item__price');

    switch (option) {
        case 'Basic':
            listItemTerminal.style.display = 'flex';
            listItemPackage.style.display = 'flex';
            listItemAccounting.style.display = 'flex';
            listItemPackageCalc.textContent = 'Basic';
            listItemPackagePrice.textContent = '$7';
            listItemAccountingPrice.textContent = '$7';
            listItemTerminalPrice.textContent = '$5';
            break;
        case 'Professional':
            listItemTerminal.style.display = 'flex';
            listItemPackage.style.display = 'flex';
            listItemAccounting.style.display = 'flex';
            listItemPackageCalc.textContent = 'Professional';
            listItemPackagePrice.textContent = '$20';
            listItemAccountingPrice.textContent = '$15';
            listItemTerminalPrice.textContent = '$12';
            break;
        case 'Premium':
            listItemTerminal.style.display = 'flex';
            listItemPackage.style.display = 'flex';
            listItemAccounting.style.display = 'flex';
            listItemPackageCalc.textContent = 'Premium';
            listItemPackagePrice.textContent = '$35';
            listItemAccountingPrice.textContent = '$25';
            listItemTerminalPrice.textContent = 'FREE';
            break;
    }


}
selectOption()