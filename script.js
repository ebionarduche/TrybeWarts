const enterButton = document.getElementById('submit-button');
const submitButton = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');

enterButton.addEventListener('click', (clickSubmmit) => {
  clickSubmmit.preventDefault();
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  if (emailValue === 'tryber@teste.com' || passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function countChars() {
  const textArea = document.getElementById('text-area');
  const charCount = document.getElementById('char-count');
  const numChars = textArea.value.length;
  charCount.textContent = `${numChars}/500 caracteres`;
}

countChars();

submitButton.disabled = true;
agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked) {
    submitButton.disabled = false;
  }
});
// const submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', function(event){
//   event.preventDefault();
//   let emailValue = document.getElementById('email').value;
//   alert('Test ' + emailValue);
// });
