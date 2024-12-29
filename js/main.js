let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let showData = document.querySelector(".show-data");

getButton.onclick = function(){
    getRepos();
}


function getRepos(){

    if(theInput.value == ""){

        showData.innerHTML = "<span>Please Write Github Username</span>";

    }else{

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then(response => response.json())
        .then(data => {
        showData.innerHTML = "";

        data.forEach(repos => {
            
            let mainDiv = document.createElement("div");
            mainDiv.className = "repos-box";
            mainDiv.appendChild(document.createTextNode(repos.name));
                let theUrl = document.createElement("a");
                theUrl.appendChild(document.createTextNode("Visit"));
                theUrl.href = `https://github.com/${theInput.value}/${repos.name}`;
                theUrl.setAttribute("target", "_blank");
                mainDiv.appendChild(theUrl);
                    let starsSpan = document.createElement("span");
                    starsSpan.appendChild(document.createTextNode(`stars ${repos.stargazers_count}`));
                    mainDiv.appendChild(starsSpan);
            showData.appendChild(mainDiv)
        });
        })
    }

}
