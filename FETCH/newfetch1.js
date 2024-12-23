fetch("https://jsonplaceholder.typicode.com/users")
.then((responce)=>responce.json())
.then(data=>console.log(data))