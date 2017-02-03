
document.querySelector('#contactForm').addEventListener('submit', function(){
	var nombre = document.querySelector('#name').value;
	var email = document.querySelector('#email').value;
	var phone = document.querySelector('#phone').value;
	var menssage = document.querySelector('#message').value;

	$.ajax({
		method: 'POST',
		data: {
			nombre: nombre,
			email: email,
			phone: phone,
			menssage: menssage
		}
	});
});