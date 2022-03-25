//function to get subscribers on admin dashbord
const getsubscribersadmin = async () => {
	let result = [];
//const token =localStorage.getItem('token');
	fetch("https://axel-divin.herokuapp.com/api/v1/subs", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			//"authorization": 'bearer '+token
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
                        ${res?.email}
                    </span>
                    <button class="delete" id="${res?._id}"onclick="willdelete(this.id)">Delete</button>
                    </div>
                    `
					)
						.join(""))
				: (document.querySelector("#rows" ).innerHTML = `<h1>Sorry , No Subscribers now here Now</h1>`);
		})
		.catch((err) => console.log(err));
};
getsubscribersadmin();

//to logout 
function logout(){
	localStorage.clear();
	location.href = "/index.html"
}

//to delete user

async function willdelete(subId) {
	try{
		const token =localStorage.getItem('token');
		const deletesub = await fetch("https://axel-divin.herokuapp.com/api/v1/subs/"+subId,{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"authorization": 'bearer '+token
			  },
		});
		response = await deletesub.json();
		if(response?.status === "success"){
			alert("user  deleted")
		}else{
			alert("error occured")
		}

	}catch(error){
		console.log(error);

	}
		
}

