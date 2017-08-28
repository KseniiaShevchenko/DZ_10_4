
document.getElementById("btn1").onclick=MM;


function MM () {
	var a=document.getElementById('login').value;
	var b=document.getElementById('password').value;

	if (a=="ivan" && b==334455 || a=="alex" && b==777 || a=="petr" && b=="b5678") {
		alert("Добро пожаловать!");
	}
	else {
		alert("Ошибка входа");
	}
}

