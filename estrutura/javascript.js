document.getElementById('loginForm').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.getElementById('usuário').value;
	var password = document.getElementById('senha').value;

	// Validate the username and password
	if (username === 'admin' && password === 'password') {
		alert('Login bem-sucedido!');
		// Redirect to another page or perform some action
	} else {
		alert('Nome de usuário ou senha inválidos');
	}
});