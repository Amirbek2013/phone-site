const buyModal = new bootstrap.Modal(document.getElementById('buyModal'))
const buyModalBody = document.getElementById('buyModalBody')

function setupCard(cardElement, prices) {
    cardElement.addEventListener('click', function(event) {
        const clickTarget = event.target
        const priceItem = cardElement.querySelector('.price')
        const activeColor = cardElement.querySelector('.active-border')
        const activeSize = cardElement.querySelector('.size-container .active')

        if (clickTarget.matches('.color-btn') && !clickTarget.classList.contains('active-border')) {
            clickTarget.classList.add('active-border')
            if (activeColor) activeColor.classList.remove('active-border')
            return
        }

        if (clickTarget.matches('.size-container button') && !clickTarget.classList.contains('active')) {
            clickTarget.classList.add('active')
            if (activeSize) activeSize.classList.remove('active')
            const selectedSize = clickTarget.dataset.size
            if (selectedSize && prices[selectedSize]) {
                priceItem.textContent = `Цена: ${prices[selectedSize]}`
            }
            return
        }

        if (clickTarget.matches('.buy-button')) {
            const productName = cardElement.querySelector('.item-title').textContent.trim()
            const currentPrice = priceItem.textContent.trim()
            const selectedSizeText = cardElement.querySelector('.size-container .active')?.textContent.trim() || ''
            const selectedColor = cardElement.querySelector('.colors-container .active-border')?.classList.contains('blue') ? 'Синий' :
                cardElement.querySelector('.colors-container .active-border')?.classList.contains('green') ? 'Зелёный' :
                cardElement.querySelector('.colors-container .active-border')?.classList.contains('black') ? 'Чёрный' : ''

            buyModalBody.textContent = `Вы выбрали ${productName} ${selectedSizeText ? `(${selectedSizeText})` : ''}${selectedColor ? `, цвет: ${selectedColor}` : ''}. ${currentPrice}`
            buyModal.show()
        }
    })
}

setupCard(document.querySelector('.iphone'), {
    medium: '80.000 руб.',
    large: '100.000 руб.'
})

setupCard(document.querySelector('.samsung'), {
    medium: '40.000 руб.',
    large: '60.000 руб.'
})