//function to get blogs on main page of blogs
const getBlogs = async () => {
	let result = [];
	fetch("https://axel-divin.herokuapp.com/api/v1/blog", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			console.log(result)
			result?.length
				? (document.querySelector("#respo2").innerHTML = result
						.map(
							(res) => `
                        <div class="respo" id="respo">
                           <div class="nico"><img src="${res?.image}" alt="axelblog"> </div>
                           <a href="./blog1.html"><h1>${res?.title}</h1></a>
                            <p>${res?.descrption?.slice(1,500)}</p>
                           <div class="text">Posted on Feb 20,2022 by Shyaka axel divin </div>
                           <div class="more"><a href="/project/html-file/blog1.html?${res?._id}">Read more &#8594</a></div>
                        </div>
                    `
					)
						.join(""))
				: (document.querySelector("#respo2" ).innerHTML = `<h1>Sorry , No Blogs yet published</h1>`);
		})
		.catch((err) => console.log(err));
};
getBlogs();
