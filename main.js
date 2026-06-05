const iphone = document.querySelector('.iphone');
const samsung = document.querySelector('.samsung');

iphone.addEventListener('click', function(event) {
    let clickTarget = event.target
    let activeButton = iphone.querySelector('.active')
    let priceItem = iphone.querySelector('.price')
    let currentPrice
    let activeButtonColor = iphone.querySelector('.active-border')

    if (clickTarget.classList.contains('color-btn')&& !clickTarget.classList.contains('active-border')) {
        clickTarget.classList.add('active-border')
        activeButtonColor.classList.remove('active-border')
    }

    if (clickTarget.classList.contains('btn') && !clickTarget.classList.contains('active')) {
        clickTarget.classList.add('active')
        activeButton.classList.remove('active')
    }

    currentPrice = clickTarget.getAttribute('data-size')
    if (currentPrice === 'medium') {
        priceItem.textContent = 'Цена: 80.000 руб.'
    }

    if (currentPrice === 'large') {
        priceItem.textContent = 'Цена: 100.000 руб.'
    }
})


samsung.addEventListener('click', function(event) { 
    let clickTarget = event.target
    let activeButton = samsung.querySelector('.active')
    let priceItem = samsung.querySelector('.price')
    let currentPrice
    let activeButtonColor = samsung.querySelector('.active-border')

    if (clickTarget.classList.contains('color-btn')&& !clickTarget.classList.contains('active-border')) {
        clickTarget.classList.add('active-border')
        activeButtonColor.classList.remove('active-border')
    }

    if (clickTarget.classList.contains('btn') && !clickTarget.classList.contains('active')) {
        clickTarget.classList.add('active')
        activeButton.classList.remove('active')
    }

    currentPrice = clickTarget.getAttribute('data-size')
    if (currentPrice === 'medium') {
        priceItem.textContent = 'Цена: 40.000 руб.'
    }

    if (currentPrice === 'large') {
        priceItem.textContent = 'Цена: 60.000 руб.'
    }
})