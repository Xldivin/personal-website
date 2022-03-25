//function to get blogs on user admin
const getBlogsuser = async () => {
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
                        </div>
                    `
					)
						.join(""))
				: (document.querySelector("#rows" ).innerHTML = `<h1>Sorry , No Blog yet published</h1>`);
		})
		.catch((err) => console.log(err));
};
getBlogsuser();


//logout

function logout(){
	localStorage.clear();
	location.href = "/index.html"
}