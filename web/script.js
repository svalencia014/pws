function formSubmit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all the fields");
    } else {
        let http = new XMLHttpRequest();
        let params = new Object();
        params.name = name;
        params.email = email;
        params.message = message;
        http.open('POST', 'http://172.24.123.61:9000/messages', true);
        http.send(params);
    }
}