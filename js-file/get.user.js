//function to get all users on admin dashbord
const getusersadmin = async () => {
	let result = [];
const token =localStorage.getItem('token');
	fetch("https://axel-divin.herokuapp.com/api/v1/allusers", {
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
                    ${res?.username}
                    </span>
                    <span class="mail1">
                    ${res?.email}
                    </span>
                    <button class="delete" id="${res?._id}"onclick="willdelete(this.id)">Delete</button>
                    </div>
                    `
					)
						.join(""))
				: (document.querySelector("#rows" ).innerHTML = `<h1>Sorry , No users yet</h1>`);
		})
		.catch((err) => console.log(err));
};
getusersadmin();

//to logout 
function logout(){
	localStorage.clear();
	location.href = "/index.html"
}
//to delete user
async function willdelete(userId) {
	try{
		const token =localStorage.getItem('token');
		const deleteuser = await fetch("https://axel-divin.herokuapp.com/api/v1/auth/user/"+userId,{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"authorization": 'bearer '+token
			  },
		});
		response = await deleteuser.json();
		if(response?.status === "success"){
			alert("user  deleted")
		}else{
			alert("error occured")
		}

	}catch(error){
		console.log(error);

	}
		
}