let operator = '';
let previousValue = '';
let currentValue = '';

const previousScreen = document.querySelector('.previous')
const currentScreen = document.querySelector('.current')

document.addEventListener('DOMContentLoaded', function() {
    
    window.addEventListener('keydown', handleKeyPress)

    let clear = document.querySelector('.clear')
    let equal = document.querySelector('.equal')
    let decimal = document.querySelector('.decimal')

    let operators = document.querySelectorAll('.operator')
    let numbers = document.querySelectorAll('.number')

    numbers.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

    operators.forEach((op) => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + ' ' + operator
        currentScreen.textContent = currentValue
    }))

    clear.addEventListener('click', function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue
        currentScreen.textContent = '0';
    })

    equal.addEventListener('click', function() {
        if (currentValue != '' && previousValue != '') {
            calculate()
        }
    })

    decimal.addEventListener('click', function() {
        addDecimal()
    }) 
})

// If we don't want to show a very big number, we short it up and add '...'

//     equal.addEventListener('click', function() {
//    if (currentValue != '' && previousValue != '') {
//         calculate()
//         previousScreen.textContent = '';
//         if (previousValue.length <= 5) {
//             currentScreen.textContent = previousValue
//         } else {
//             currentScreen.textContent = previousValue.slice(0,5) + '...';
//         }
//     }
// })

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num
    }
}

function handleOperator(op) {
    if (previousValue === '') {
        previousValue = currentValue
        operatorCheck(op)
      } else if (currentValue === '') {
        operatorCheck(op)
      } else {
        calculate()
        operator = op
        previousScreen.textContent = previousValue + ' ' + operator
        currentScreen.textContent = '0';
    }
}

function operatorCheck(text) {
    operator = text
    previousScreen.textContent = previousValue + ' ' + operator
    currentScreen.textContent = '0';
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if (operator === '+') {
        previousValue += currentValue
    } else if (operator === '-') {
        previousValue -= currentValue
    } else if (operator === 'x') {
        previousValue *= currentValue
    } else if (operator === '/') {
        if (currentValue <= 0) {
            previousValue = 'Error'
            displayResults()
            return
        }
        previousValue /= currentValue
    }
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString()
    displayResults()
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000
}

function displayResults() {
    if (previousValue.length <= 11) {
      currentScreen.textContent = previousValue
    } else {
      currentScreen.textContent = previousValue.slice(0, 11) + '...';
    }
    previousScreen.textContent = '';
    operator = '';
    currentValue = '';
}

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}

function handleKeyPress(e) {
    e.preventDefault()
    if (e.key >= 0 && e.key <= 9) {
      handleNumber(e.key)
    }
    if (
      e.key === 'Enter' ||
      (e.key === '=' && currentValue != '' && previousValue != '')
    ) {
      calculate()
    }
    if (e.key === '+' || e.key === '-' || e.key === '/') {
      handleOperator(e.key)
    }
    if (e.key === '*') {
      handleOperator('x')
    }
    if (e.key === '.') {
      addDecimal()
    }
    if (e.key === 'Backspace') {
      handleDelete()
    }
}

function handleDelete() {
    if (currentValue !== '') {
        currentValue = currentValue.slice(0, -1)
        currentScreen.textContent = currentValue
        if (currentValue === '') {
        currentScreen.textContent = '0';
        }
    }
    if (currentValue === '' && previousValue !== '' && operator === '') {
      previousValue = previousValue.slice(0, -1)
      currentScreen.textContent = previousValue
    }
}

