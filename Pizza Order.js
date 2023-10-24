function calculateTotal() {
    const size = document.getElementById('size').value;
    const toppings = document.querySelectorAll('input[type="checkbox"]:checked');
    
    let total = 0;

    switch (size) {
        case 'small':
            total += 10;
            break;
        case 'medium':
            total += 15;
            break;
        case 'large':
            total += 20;
            break;
    }

    toppings.forEach(topping => {
        total += 2;
    });

    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = `Total: $${total}`;
}
