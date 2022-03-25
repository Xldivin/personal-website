 async function add() {
    	const Name = document.getElementById("name").value;
    	const Message = document.getElementById("comment").value;
    	try {
    		const Comment = await fetch("https://axel-divin.herokuapp.com/api/v1/blog"+DataId/"comment", {
    			method: "PUT",
    			headers: {
    				"Content-Type": "application/json",
    			},
    			body: JSON.stringify({
                    name:Name,
                    comment:Message
    			}),
    		});
    		response = await Comment.json();
    		if (response?.status === "success") {
    			Swal.fire(
    				'Good job!',
    				'Comment sent',
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
    