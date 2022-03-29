const DataId = location.search.substring(1);
const getcomment = async () => {
const token =localStorage.getItem('token');
console.log(DataId)
	let result = [];
	fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+DataId+"/comments", {
		method: "GET",
		headers: {
			"authorization": 'bearer '+token
		},

	})
	.then((response) => response.json())
		.then((json) => {
			result = json.data;
			console.log(result)
			result?.length
				? (document.querySelector(".rows").innerHTML = result
						.map(
							(res) => `
							<div class="blog">
							<span class="nbr">
							     01
							</span>
							<section class="blog-title">
							    ${res?.comment}
							</section>
							<button class="delete" id="${res?._id}" onclick="willdelete(this.id)">Delete</button>
						</div>
                    `
					)
						.join(""))
				: (document.querySelector("#rows" ).innerHTML = `<h5>Sorry , No comments yet published</h5>`);
		})
		.catch((err) => console.log(err));
}
 getcomment()



 async function willdelete(commentid) {
	 console.log(commentid)
	try{
		const token =localStorage.getItem('token');
		const deletecomment = await fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+DataId+"/comments/"+commentid,{
			method: "DELETE",
			headers: {
				"authorization": 'bearer '+token
			  },
		});
		response = await deletecomment.json();
		if(response?.status === "success"){
			alert("comment deleted")
		}else{
			alert("error occured")
		}
	}catch(error){
		console.log(error);

	}
		
}

