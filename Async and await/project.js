//  Craeting a web in which we can see the gitHub of users and directly can go to their profile


async function gitHub(){
    const responce = await fetch("https://api.github.com/users");
    const data = await responce.json();

const parent = document.getElementById("first");

for(let user of data){
    const element = document.createElement("div");
    element.classList.add("user");

    const image = document.createElement('img');
    image.src = user.avatar_url;

    const userName = document.createElement('h2');
    userName.textContent = user.login;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.textContent = "Visit Profile"

    element.append(image,userName,anchor);
    parent.append(element);
}
}

gitHub();