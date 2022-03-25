// function allows user to send subscription
const button = document.getElementById('tap');
button.addEventListener('click', (e)=>{
    e.preventDefault();
});

async function addSub() {
	const email = document.getElementById("sub").value;
	try {
		const Subs = await fetch("https://axel-divin.herokuapp.com/api/v1/" + "subs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                email:email
			}),
		});
		response = await Subs.json();
		if (response?.status === "success") {
			Swal.fire(
				'Good job!',
				'succesffuly subscribed',
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



