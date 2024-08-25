 async function fetchData(){
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    const container = document.querySelector(".container");
    container.innerHTML = " ";
    
    data.map(function(item){
    const posttitle = document.createElement("h1");
    const postbody = document.createElement("p");
 
    posttitle.textContent = item.title;
    postbody.textContent = item.body;

    container.appendChild(posttitle);
    container.appendChild(postbody);
    
    })
}
fetchData();