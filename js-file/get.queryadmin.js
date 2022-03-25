//function to get queries on admin dashboard
const getqueryadmin = async () => {
	let result = [];
const token =localStorage.getItem('token');
	fetch("https://axel-divin.herokuapp.com/api/v1/query", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"authorization": 'bearer '+token
		  },
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
                            ${res?.Message}
                            </span>
                            <span class="author">${res?.Name}</span>
                            <button class="delete" id="${res?._id}"onclick="willdelete(this.id)">Delete</button>
							</div>
                    `
					)
						.join(""))
				: (document.querySelector("#rows" ).innerHTML = `<h1>Sorry , No Queries here Now</h1>`);
		})
		.catch((err) => console.log(err));
};
getqueryadmin();


//function to warn to delete
function DeleteQuery(queryId){
	alert("are you sure you want to delete this query")
	console.log(queryId)
	.then(() => {
		willdelete(queryId)
	})
}
//function to delete
async function willdelete(queryId) {
	try{
		const token =localStorage.getItem('token');
		const deletequery = await fetch("https://axel-divin.herokuapp.com/api/v1/query/"+queryId,{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"authorization": 'bearer '+token
			  },
		});
		response = await deletequery.json();
		if(response?.status === "success"){
			alert("query deleted")
		}else{
			alert("error occured")
		}

	}catch(error){
		console.log(error);

	}
		
}



//to logout
function logout(){
	localStorage.clear();
	location.href = "/index.html"
}