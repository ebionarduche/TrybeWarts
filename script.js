const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (clickSubmmit) => {
  clickSubmmit.preventDefault();
  const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  if (emailValue === 'tryber@teste.com' || passwordValue === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// const submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', function(event){
//   event.preventDefault();
//   let emailValue = document.getElementById('email').value;
//   alert('Test ' + emailValue);
// });
