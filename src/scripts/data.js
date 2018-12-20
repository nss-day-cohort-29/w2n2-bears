
// Fetch functions established.
 const data = {
     //the below fetch call was modeled heavily on Dan Brewer/Team Valkyrie. with permission from Dan.
     parksFetch (bloopvalue) {
         fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=9nMovoqrdCLtuY3H8ZlKhwEj1&${bloopvalue}=Yes`)
         .then(response => response.json())
         .then(response => {
            let resultsContainer = document.getElementById("results-container")
            resultsContainer.innerHTML = "";
              response.forEach(item => {
                let resultsContainer = document.getElementById("results-container")
                let parkName = item.park_name;
                //loops through each "item" from the parksAPI search; adds to DOM.
                resultsContainer.innerHTML +=
                `
                <div>
                    <div>
                        <p>
                        ${parkName}
                        <p>
                    </div>
                    <button type="button" id="${parkName}" class="saveButton parksSaveButton">Save</button>
                </div>
                `
              })
                  // Line below is a function declared in main.js. It is Used to apply eventlisteners to every save button
                  clickSave();
              })},
    getDiningInfo(taco) {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${taco}`, {
            headers: {
                "user-key": "e1d3af0b02cdacf4bfda4e12e2efcd99",
            }})
            // Promise 1.
            .then(response => response.json())
            // Promise 2.
            .then(diningReturn => {
                let resultsContainer = document.getElementById("results-container")
                resultsContainer.innerHTML = "";
                let allDiningReturn = diningReturn.restaurants;
                //console.log("BIGDATA return from fetch: " , allDiningReturn);
                allDiningReturn.forEach(item => {
                    let resultsContainer = document.getElementById("results-container")
                    let diningName = item.restaurant.name;
                    let diningAddress = item.restaurant.location.address;
                    let cuisineType = item.restaurant.cuisines;
                    //loops through each "item" from the BIGDATAset; adds to DOM.
                    resultsContainer.innerHTML +=
                    `
                    <div>
                        <div>
                            <p>
                            ${diningName}</p>
                            <p>
                            ${cuisineType}</p>
                            <br />
                            ${diningAddress}</p>
                        </div>
                        <button type="button" id="${diningName}" class="saveButton restaurantSaveButton">Save</button>
                        </div>
                        `
                })
                // Line below is a function declared in main.js. It is Used to apply eventlisteners to every save button
                clickSave();
              })},
    // MEETUP API FUNCTION
    getMeetupInfo(meetup) {
        return fetch(
            `https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&sort_by=date&q=${meetup}&token=BJ2CF2XZDBK773VFPGPW`,
            {
            headers: {
                authorization: "Bearer 6N5OUUJLQ4DKLVS36OOK"
            }})
            // Promise 1
            .then(response => response.json())
            // Promise 2
            // .then(post => console.log(post))
            .then(meetupReturn => {
                let resultsContainer = document.getElementById("results-container")
                resultsContainer.innerHTML = "";
                let allMeetupReturn = meetupReturn.events;
                console.log("BIGDATA return from fetch: " , allMeetupReturn);
                allMeetupReturn.forEach(item => {
                    let meetupName = item.name.html;
                    let meetupLink = item.url;
                    let uniqueID = item.id;

                    //loops through each "item" from the BIGDATAset; adds to DOM.
                    resultsContainer.innerHTML +=
                    `
                    <div>
                        <div>
                            <p>
                            ${meetupName}</p>
                            <p>
                            ${meetupLink}</p>
                        </div>
                        <button type="button" id="${uniqueID}" class="saveButton meetupSaveButton">Save</button>
                        </div>
                        `
                }
                )
                //Line below is a function declared in main.js. It is Used to apply eventlisteners to every save button
                clickSave();
        })
    },

    //Initial fetch from Ticketmaster to establish that API is functional
    // const concertData = {
    //     getConcerts() {
    //         fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi")
    //         .then(results => results.json())
    //         .then(post => console.log("initial return from ticketmaster API:" , post));
    //     }
    // };
    // concertData.getConcerts();


    //Fetch is linked to concert search and button in eventListener.js. It searches the ticketmaster API, puts the results of the search in JSON, targets specific values in the search results and returns them.

    getConcertSearch(concertInput) {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=lXF5cl6UEBDo2U4Mdnab2ATtQajczyPi&keyword=${concertInput}`)
        .then(results => results.json())
        .then(concerts => {
            //Code below targets the desired information from the search. It will differ between APIs.
            let resultsContainer = document.getElementById("results-container")
                resultsContainer.innerHTML = "";

            let allconcerts = concerts._embedded.events
            allconcerts.forEach(event => {
                let concertHTML = event.name
                // console.log(concertHTML)

                //loops through each "event" from the BIGDATAset; adds to DOM.
                resultsContainer.innerHTML +=
                `
                <div>
                    <div>
                    <p>${concertHTML}</p>
                    </div>
                    <button type="button" id="${concertHTML}" class="saveButton concertSaveButton">Save</button>
                </div>
                `



            })

            //Line below is a function declared in main.js. It is Used to apply eventlisteners to every save button
            clickSave();
        })
    }


}