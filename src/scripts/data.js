
// Fetch functions established.
 const data = {



    name: "Data Module/Component",

    parksArray: [],
    //the below fetch call was modeled heavily on Dan Brewer/Team Valkyrie. with permission from Dan.
    parksFetch (bloopvalue) {
      fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=9nMovoqrdCLtuY3H8ZlKhwEj1&${bloopvalue}=Yes`)
          .then(response => response.json())
          .then(response => {
              response.forEach(item => {
                //   let parkName = parksObject.park_name;
                //   console.log(parkName);






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
                          <button type="button" id="bloop" class="saveButton">Save</button>
                       </div>
                       `


                  }
                  )
                  // Line below is a function declared in main.js. It is Used to apply eventlisteners to every save button
                  clickSave();
              })





                //   let parkAddress = parksObject.mapped_location_address;
                //   parksArray.push(parkName + " " + parkAddress);
                //   console.log(parkName + " " + parkAddress);
                // console.table(parksObject)
                // })
          },




          getDiningInfo(taco) {
             return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${taco}`, {
                 headers: {
                     "user-key": "e1d3af0b02cdacf4bfda4e12e2efcd99",
                    }})
                    // Promise 1.
                    .then(response => response.json())
                    // Promise 2.
                    .then(diningReturn => {

                        let allDiningReturn = diningReturn.restaurants;
                        console.log("BIGDATA return from fetch: " , allDiningReturn);
                        allDiningReturn.forEach(item => {

                            let resultsContainer = document.getElementById("results-container")

                            let diningName = item.restaurant.name;
                            let diningAddress = item.restaurant.location.address;
                            let cuisineType = item.restaurant.cuisines;
                            let uniqueID = item.restaurant.id;

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
                                <button type="button" id="${uniqueID}"class="saveButton">Save</button>
                             </div>
                             `


                        }
                        )
                        // Line below is a function declared in main.js. It is Used to apply eventlisteners to every save button
                        clickSave();
                    })



                },



}