function registerNewUser() {
	console.log('test....')
	var fname = document.getElementById('fname').value
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value
	var confirmPwd = document.getElementById('password-confirmation').value
	var birthday = document.getElementById('birthday').value

	if(password != confirmPwd) {
		alert('Mat khau nhap khong khop!!! Vui long kiem tra lai!!!')
		return false;
	}

	localStorage.setItem('fullname', fname)
	localStorage.setItem('email', email)
	localStorage.setItem('password', password)
	localStorage.setItem('birthday', birthday)
    
    function init() {
        var fname = localStorage.getItem('fullname')
        var email = localStorage.getItem('email')
        var birthday = localStorage.getItem('birthday')
    
        document.getElementById('fullname').innerHTML += fname
        document.getElementById('email').innerHTML += email
        document.getElementById('birthday').innerHTML += birthday
    }
	return true;
}