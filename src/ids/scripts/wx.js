addEventListener("load", async () => {
    let airport = document.title.split(' ')[0].toLowerCase();
    let request = new XMLHttpRequest()
    request.open("GET", "https://testrepl.svalencia14.repl.co/metar/" + airport, false);
    request.send();
    console.log(request.responseText);
    let metarDiv = document.getElementById('metar');
    metarDiv.innerHTML = `<p>${request.response}</p>`;
    if (metarDiv.innerHTML == "<p></p>") {
        metarDiv.innerHTML = "<p>Failed to fetch</p>";
    }
});
