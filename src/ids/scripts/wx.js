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
        console.error("Failed to fetch");
    }

    let htmlList = document.getElementById("runway-list");
    let runwayString = htmlList.innerText;
    runwayString = runwayString.replaceAll("\n", ",");
    runwayString = runwayString.replaceAll("/", ",");
    let runwayList = runwayString.split(",");

    let i = 0;
    let headingList = [];
    for (i in runwayList) {
        headingList[i] = runwayList[i].replace("L","");
        headingList[i] = headingList[i].replace("R","");
    }

    console.log(runwayList);
    console.log(headingList);

});
