const params = new URLSearchParams(window.location.search);

const article = params.get("article") || "1";


if (!article){
    document.getElementById("lesson").innerHTML = "<h2>No article specified.</h2>";
}
else{


fetch(`article_${article}/index.md`).then(response => {
    if (!response.ok){
        throw new Error("Could not find article.");
    }
    return response.text();
}).then(text => {
     text = text.replace(/:::example([\s\S]*?):::/g,`<div class = "example">$1</div>`);
    text = text.replace(/:::tip([\s\S]*?):::/g,`<div class = "tip">$1</div>`);
    text = text.replace(/:::title([\s\S]*?):::/g,`<div class = "title">$1</div>`);
    text = text.replace(/:::bold([\s\S]*?):::/g,`<div class = "bold">$1</div>`);
     text = text.replace(/:::mini-title([\s\S]*?):::/g,`<div class = "mini-title">$1</div>`)
document.getElementById("lesson").innerHTML = marked.parse(text);

})
.catch(error => {
    console.error(error);
    document.getElementById("lesson").innerHTML = `<h2>${error.message}<h2>`
});
}


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();



firebase.auth().onAuthStateChanged(async user => {
    const colors = ["#ffb5b0", "#ffd6b0", "#f8ffb0", "#ccffb0", "#b0ffd8", "#b0ffd8", "#b0f8ff", "#b0deff", "#b0deff", "#bbb0ff", "#c5b0ff", "#e6b0ff", "#f5b8ec", "#eba9b7"]
    const icon = document.getElementById("user-icon");
    const dropdown = icon.nextElementSibling;
    if (user){
    const uid = user.uid
    icon.textContent = user.displayName ? user.displayName[0].toUpperCase(): "U";
    let hash = 0;
    const str = user.uid || user.email;
    for (let i=0; i<str.length; i++) hash += str.charCodeAt(i);
    const colorIndex = hash % colors.length;
    icon.style.backgroundColor = colors[colorIndex];
    dropdown.innerHTML = 
    `<a href = "/profile/">Profile</a>
    <a href = "/login/" id = "logout">Logout</a>`;
     const logout = document.getElementById("logout");
    logout.addEventListener("click", async (e) => {
        e.preventDefault();
        try{
            await firebase.auth().signOut();
            window.location.href = "/login/";
        }
        catch(error){
            console.error("Logout error:", error);
            alert("Failed to logout: " + error.message);
        }
    })

    }
    else{
        icon.textContent = "";
        icon.style.backgroundColor = "gray";
        dropdown.innerHTML = 
        `<a href = "/login/">Login</a>
        <a href = "/signup/">Signup</a>
        `
    }
    
    });
