//function to get user profile

async function getProfile() {
	let user = localStorage.getItem("user");
	if (!user) return (window.location.href = "./../login.html");
	user = JSON.parse(user);
	document.getElementById("role").innerHTML = user.role;
	document.getElementById("names").innerHTML = user.username;
}
getProfile();

//to logout 
function logout(){
	localStorage.clear();
	location.href = "/index.html"
}

async function updateuserprofile() {
	const username = document.getElementById("name").value;
	const email = document.getElementById("message").value;
	try {
		const Query = await fetch("https://axel-divin.herokuapp.com/api/v1/" + "query", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                Name:Name,
                Message:Message
			}),
		});
		response = await Query.json();
		if (response?.status === "success") {
			Swal.fire(
				'Good job!',
				'Query sent',
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
		
	}
}
