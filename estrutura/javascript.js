document.getElementById('loginForm').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.getElementById('usuário').value;
	var password = document.getElementById('senha').value;

	if (username === 'admin' && password === 'password') {
		alert('Login bem-sucedido!');
	} else {
		alert('Nome de usuário ou senha inválidos');
	}
});
