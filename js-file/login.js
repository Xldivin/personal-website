async function loginUser() {
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	try {
		const Login = await fetch("https://axel-divin.herokuapp.com/api/v1/" + "auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
		response = await Login.json();
		if (response?.status === "success") {
			Swal.fire(
				'Good job!',
				'You are member',
				'success'
			)
			localStorage.setItem("token", response.token);
			localStorage.setItem("user", JSON.stringify(response.data));
			if(response.data.role === "admin"){
				location.href = "/admin-file/blogs.html";

			}else{
				location.href = "/admin-file/useradmin.html";
			}
		}
console.log(response);
	} catch (error) {
		console.log(error);
	}
}
