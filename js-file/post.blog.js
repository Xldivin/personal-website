//function allows a admin-user to send blog
const button = document.getElementById('tap');
button.addEventListener('click', (e)=>{
    e.preventDefault();
});

async function addBlog() {
	const title = document.getElementById("title").value;
	const image = document.getElementById("avatar").value;
	const descrption = document.getElementById("body1").value;
	try {
        const token =localStorage.getItem('token');
		const Blog = await fetch("https://axel-divin.herokuapp.com/api/v1/" + "blog", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
                "authorization": 'bearer '+token
			},
			body: JSON.stringify({
                title:title,
				image:image,
                descrption:descrption
			}),
		});
		response = await Blog.json();
		if (response?.status === "success") {
			Swal.fire(
				'Good job!',
				'blog saved successfully',
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











































async function loginUser() {
	const title = document.getElementById("title").value;
	const body = document.getElementById("body").value;
	try {
		const Login = await fetch("https://axel-divin.herokuapp.com/api/v1/" + "blog", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: email,
				body: password,
			}),
		})
		.then((res) => res.json())
		.then((response) => {
			if (response?.status === "success") {
                alert("success")
                localStorage.setItem("token", response?.token);
                console.log(response?.token)
                location.href = "/project/admin-file/users.html";
            }
		})
		response = await Login.json();
console.log(response);
	} catch (error) {
	}
}


