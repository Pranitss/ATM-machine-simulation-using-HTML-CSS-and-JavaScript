let pinInput = '';

function enterDigit(digit) {
    pinInput += digit;
    document.getElementById('pin').value = pinInput;
}

function clearInput() {
    pinInput = '';
    document.getElementById('pin').value = pinInput;
}

function backspace() {
    pinInput = pinInput.slice(0, -1);
    document.getElementById('pin').value = pinInput;
}

function submitPin() {
    const pin = document.getElementById('pin').value;
    if (pin === '1234') {
        document.querySelector('.input-section').style.display = 'none';
        document.querySelector('.balance-section').style.display = 'block';
    } else {
        alert('Incorrect PIN');
        clearInput();
    }
}

function withdraw() {
    const balanceElem = document.getElementById('balance');
    let balance = parseInt(balanceElem.textContent.slice(1));
    const amount = prompt('Enter amount to withdraw:');
    if (amount !== null && amount !== '' && !isNaN(amount) && parseInt(amount) > 0 && parseInt(amount) <= balance) {
        balance -= parseInt(amount);
        balanceElem.textContent = `$${balance}`;
    } else {
        alert('Invalid amount or insufficient balance.');
    }
}

function deposit() {
    const balanceElem = document.getElementById('balance');
    let balance = parseInt(balanceElem.textContent.slice(1));
    const amount = prompt('Enter amount to deposit:');
    if (amount !== null && amount !== '' && !isNaN(amount) && parseInt(amount) > 0) {
        balance += parseInt(amount);
        balanceElem.textContent = `$${balance}`;
    } else {
        alert('Invalid amount.');
    }
}

function logout() {
    document.querySelector('.balance-section').style.display = 'none';
    document.querySelector('.input-section').style.display = 'block';
    clearInput();
}
