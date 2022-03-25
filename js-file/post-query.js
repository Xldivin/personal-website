//function to allows user to send a query
const button = document.getElementById('tap');
button.addEventListener('click', (e)=>{
    e.preventDefault();
});

async function addQuery() {
	const Name = document.getElementById("name").value;
	const Message = document.getElementById("message").value;
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
