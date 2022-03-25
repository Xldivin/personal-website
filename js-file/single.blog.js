const DataId = location.search.substring(1);
const token =localStorage.getItem('token');
console.log(DataId)
const readMore = async () => {
	let result = [];
	fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+DataId, {
		method: "GET",

	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			document.getElementById("head1").innerHTML = result.title;
            document.getElementById("image1").src = result.image;
			document.getElementById("text2").innerHTML = result.descrption;
     })
		.catch((err) => console.log(err));
};
readMore();

const comment = async () => {
	
	let result = [];
	fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+DataId+"/comments", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"authorization": 'bearer '+token
		},

	})
	.then((response) => response.json())
		.then((json) => {
			result = json.data;
			result?.length
				? (document.querySelector("#blog-comment").innerHTML = result
						.map(
							(res) => `
							<h3 class="comment">${res?.name}</h3>
							<p class="comment1">${res?.comment}</p>
                    `
					)
						.join(""))
				: (document.querySelector("#blog-comment" ).innerHTML = `<h5>Sorry , No comments yet published</h5>`);
		})
		.catch((err) => console.log(err));
}
 comment()




 const getcomment = async () => {
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
			result?.length
				? (document.querySelector("#rows").innerHTML = result
						.map(
							(res) => `
							<div class="blog">
							<span class="nbr">
							     01
							</span>
							<section class="blog-title">
							    ${res?.comment}
							</section>
							<button class="delete">Delete</button>
						</div>
                    `
					)
						.join(""))
				: (document.querySelector("#rows" ).innerHTML = `<h5>Sorry , No comments yet published</h5>`);
		})
		.catch((err) => console.log(err));
}
 getcomment()


async function add() {
	const token =localStorage.getItem('token');
	const Name = document.getElementById("name").value;
	const Message = document.getElementById("comment").value;
	try {
		const Comment = await fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+DataId+"/comment", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"authorization": 'bearer '+token
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

