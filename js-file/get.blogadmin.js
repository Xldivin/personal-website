//function to get blogs on the admin dashboard
const getBlogsadmin = async () => {
	let result = [];
	fetch("https://axel-divin.herokuapp.com/api/v1/blog", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			let counter = 0;
			result?.length
				? (document.querySelector("#rows").innerHTML = result
						.map(
							(res) => `
                            <div class="blog">
                            <span class="nbr">
                                ${(counter += 1)}
                            </span>
                            <span class="blog-title">
                                ${res?.title}
                            </span>
                            <span class="author">Axel Divin</span>
							<button class="update" id="${res?._id}"><a href="/admin-file/update.html?${res?._id}" class="update">Edit</a></button>
					        <a href="/admin-file/comments.html?${res?._id}" class="view">Comment</a>
                            <button class="delete" id="${res?._id}"onclick="DeleteBlog(this.id)">Delete</button>
                        </div>
                    `
					)
						.join(""))
				: (document.querySelector("#rows" ).innerHTML = `<h1>Sorry , No Blog yet published</h1>`);
		})
		.catch((err) => console.log(err));
};
getBlogsadmin();


//functions to delete give warning
function delblog(dataId){
	alert("do you want to delete")
	.then(() => {
		DeleteBlog(dataId)
	})
}
//function to delete
async function DeleteBlog(dataId) {
	try {
		const token =localStorage.getItem('token');
		const deleteBlog = await fetch("https://axel-divin.herokuapp.com/api/v1/blog/"+dataId,{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"authorization": 'bearer '+token
			  },

		});
		response = await deleteBlog.json();
		if(response?.status === "success"){
			alert("blog deleted")
		}else{
			alert("error occured")
		}

	}catch (error){
		console.log(error);

	}
}


//to logout 

function logout(){
	localStorage.clear();
	location.href = "/index.html"
}