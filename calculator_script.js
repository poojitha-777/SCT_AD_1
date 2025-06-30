const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    switch (val) {
      case 'C':
        display.textContent = '';
        break;
      case '⌫':
        display.textContent = display.textContent.slice(0, -1);
        break;
      case '=':
        evaluate();
        break;
      default:
        display.textContent += translate(val);
    }
  });
});

function translate(symbol) {
  switch (symbol) {
    case '÷': return '/';
    case '×': return '*';
    case '−': return '-';
    default:  return symbol;
  }
}

function evaluate() {
  try {
    const result = Function('return ' + display.textContent)();
    display.textContent = result;
  } catch {
    display.textContent = 'Error';
  }
}

