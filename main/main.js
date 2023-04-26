const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');  
});


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');  
});



//alert-inicio//
document.getElementById("btnactive1").addEventListener("click", function() {
  var gmail = document.getElementById("gmail").value;
  var password = document.getElementById("pass").value;
  var condition = document.getElementById("condition").checked;
  if (gmail === "" || password === "" || !condition) {
    alert("por favor, completa el proceso antes de iniciar seción.");
  }else{
    alert("¡Has iniciado sesión correctamente!");
  }
  });


//alert-register//



document.getElementById("btnactive2").addEventListener("click", function() {
  var user = document.getElementById("user").value;
  var gmail1 = document.getElementById("gmail1").value;
  var password1 = document.getElementById("password1").value;
  var condition1 = document.getElementById("condition1").checked;
  if (user === "" || gmail1 === "" || password1 === "" || !condition1) {
   alert("por favor, completa el proceso antes de registrarte.");
  }else{
    alert("¡Has sido registrado sesión correctamente " + user +"!");
  }
  });


 