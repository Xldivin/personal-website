function validateform(email,password,username,) {
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username != '' && email != '' && password != '') {
    if (email.match(emailReg)) {
        return true ;
    }else{
           alert("email is not valid");
        return false;
    }
    }else{
        alert("null inputs")
        return false;
 }
 }
async function addUser() {
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const username = document.getElementById("username").value;
	const role = "standard-user";
	const validationState = validateform(email,password,username);
if(!validationState)return false;
	try {
		const SignUp = await fetch("https://axel-divin.herokuapp.com/api/v1/" + "auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				role: role,
				email: email,
				password: password,
			}),
		});
		response = await SignUp.json();
		if (response?.status === "success") {
			Swal.fire(
				'Good job!',
				'You are member',
				'success'
			  )
		}
		else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
			  })
		}
console.log(response);
	} catch (error) {
		alert(error)
	}
}