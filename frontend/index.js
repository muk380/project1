const url = "http://localhost:8080/checkuser"

async function postAPI(url, data) {
    const response = await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    var res = await response.json();
    return res;
}

async function login(username, password) {
    const res = await postAPI(url, {
        username:username.value, //username.value
        password:password.value //password.value
    });
    console.log(res);
    if(res.status=="success") {
        if(res.usercount==0) alert("User not found");
        if(res.usercount==1) {
            alert("Logged in, redirect to submission page");
            window.location.replace("./submit.html");
        }
    }
}

