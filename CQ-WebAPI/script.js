function showdata(){
    let username=document.getElementById("username").value;
    let userInfo=document.getElementById("userInfo");
    userInfo.innerHTML='';
    if(!username){
        alert("Please Enter a Github id");
        return;
    }
    let xhr=new XMLHttpRequest();
    xhr.open("GET",`https://api.github.com/users/${username}`,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            console.log(this.responseText);
            let userdata=JSON.parse(xhr.responseText);
            userInfo.innerHTML=`
            <img src="${userdata.avatar_url}">
            <h2>${userdata.name} <a href="${userdata.html_url}" target="_blank">@${userdata.login}</a></h2>
            <p> Followers: ${userdata.followers}- Following :${userdata.following}</p>
            <p>Repos: ${userdata.public_repos}</p>
            <h3>Repos List:</h3>
            <ul id="repoList"></ul>
            `;


            //userrepo
            let userrepo=new XMLHttpRequest();
            userrepo.open("GET",`https://api.github.com/users/${username}/repos`,true);
            userrepo.onreadystatechange=function(){
                if(this.readyState==4&&this.status==200){
                    const repos=JSON.parse(userrepo.responseText);
                    let repolist=document.getElementById("repoList");
                    repos.forEach(r=>{
                        let li=document.createElement("li");
                        li.innerHTML=`<a href="${r.html_url}">${r.name}</a>`;
                        repolist.appendChild(li);
                    })
                } else if (this.readyState === 4) {
                    userdata.innerHTML = '<p>User not found.</p>';
                  }
            }
            userrepo.send();
        }
    }
    xhr.send();


}