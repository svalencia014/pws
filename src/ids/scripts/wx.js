addEventListener("load", async () => {
    let airport = document.title.split(' ')[0].toLowerCase();
    let request = new XMLHttpRequest()
    request.open("GET", "https://testrepl.svalencia14.repl.co/metar/" + airport, false);
    request.send();
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
        headingList[i] = headingList[i] + "0";
    }

    let metar = document.getElementById("metar").innerText.split(" ");
    let winds = [
        metar[2].slice(0, 3),
        metar[2].slice(3)
    ]

    if (winds[1].includes("G")) {
        //High winds
    } 
    else if (winds[1].slice(0, 2) < 10 || winds[1].slice(0, 2) == "VRB")  {
        document.getElementById("calmwind").innerHTML = `${document.getElementById("calmwind").innerText} - Recommended Operations`;
    }
    else {
        i = 0;
        let windDifference = [];
        for (i in headingList) {
            windDifference[i] = parseInt(headingList[i]) - winds[0];
            windDifference[i] = Math.abs(windDifference[i]);
        }
        let bestRunway = headingList[windDifference.indexOf(Math.min(...windDifference))];
        document.querySelector(`.r${bestRunway.toString()}`).innerHTML = document.querySelector(`.r${bestRunway.toString()}`).innerText + ` - Recommended Runway- ${runwayList[windDifference.indexOf(Math.min(...windDifference))]}`;
    };
});
