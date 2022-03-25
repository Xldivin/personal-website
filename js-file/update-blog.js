const DataId = location.search.substring(1);
const getblog = async () => {
	let result = [];
	fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+DataId, {
		method: "GET",

	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			console.log(result)
			document.getElementById("title").value = result.title;
            document.getElementById("avatar").src = result.image;
			document.getElementById("body1").value = result.descrption;
     })
		.catch((err) => console.log(err));
};
getblog();


async function updateBlog (){
	const title = document.getElementById("title").value;
	const image = document.getElementById("avatar").value;
	const descrption = document.getElementById("body1").value;
	if(title == ""){
		Swal.fire(
			'Error',
			'title must be filled',
			'error'
		  )
	}else if(descrption == ""){
		Swal.fire(
			'Error',
			'descrption must be filled',
			'error'
		  )

	}else{
		try{
			const token =localStorage.getItem('token');
			const updateblog = await fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+DataId, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"authorization": 'bearer '+token
				  },
				  body: JSON.stringify({
					  image:image,
					  title:title,
					  descrption:descrption
				  })
			})
			response = await updateblog.json();
			if (response?.status === "success") {
				Swal.fire(
					'Good job!',
					'blog successfully updated',
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
		}catch(error){
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
			  })

		}
	}
}