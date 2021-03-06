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