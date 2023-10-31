/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const textMessage = document.getElementById('message').value;
  if(name == '' || email == '' || phone == '' || textMessage == ''){
    document.getElementById('formIsEmpty').className = 'd-block';
  }else{
    document.getElementById('formIsEmpty').className = 'd-none';

    Email.send({
        SecureToken: "3dd5d8cb-515f-4ca4-884e-54a493d87717",
        To : "alexma225@hotmail.com",
        From : 'joker5150@gmail.com',
        Subject : `AlexSearha Portfolio, ${name} à envoyé un message`,
        Body : `Voici un message de : ${name} <br> email: ${email} <br> Telephone : ${phone} <br> MESSAGE : ${textMessage}`
    }).then(message => {
      if(message === 'OK'){
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
        document.getElementById('submitSuccessMessage').className = 'd-block';
        setTimeout(() =>
          document.getElementById('submitSuccessMessage').className = 'd-none'
          ,10000)
      }
    })
  }
}
