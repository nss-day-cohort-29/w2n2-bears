// restaurant API call - Zomato
 // Fetch function established.
 const data = {



         getDiningInfo() {
             return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city", {
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

                            //loops through each "item" from the BIGDATAset; adds to DOM.
                            resultsContainer.innerHTML +=
                            `
                            <div>
                                <div>
                                    <p>
                                    ${diningName}
                                    <br />
                                    ${diningAddress}</p>
                                </div>
                                <button type="button" class="saveButton ${cuisineType}">Save</button>
                             </div>
                             `

                            // resultsContainer.innerHTML += diningName + " "
                            // console.log("diningName", diningName);
                            // resultsContainer.innerHTML += cuisineType + " "
                            // console.log("cuisineType", cuisineType);
                        }
                        )

                    })



                },


                // Called on click inside of each method (fetch) within data.js
                // Creates HTML elements with the item name, item information, and the type of item
                // resultType = class that's defined inside each fetch, WHICH ONLY RUNS ON CLICK "lets go!"
                resultsBuilder(diningName, diningAddress, resultType){
                    let resultsField =
                    `
                    <div>
                    <div>
                    <p>
                    ${diningName}
                    <br />
                    ${diningAddress}</p>
                    </div>
                    <button type="button" class="saveButton ${resultType}">Save</button>
                    </div>
                    `

                    return resultsField;
                }



                //from Hunter's group:
                // Fetches all concert in the Nashville Area by restaurant and food type:
                // restaurantData(foodType){
                    //     fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${foodType}`, {
                        //         headers: {
                            //             "user-key": "0f074d9d28fb23cdabd8d271ebb03bdb"
                            //         }
                            //     })
                            //     .then(foods => foods.json())
                            //     .then(Allfoods => {
                                //         let allfoods = Allfoods.restaurants
                                //         allfoods.forEach(foods => {
                                    //              let foodHTML = foods.restaurant.name;
                                    //              let addressHTML = foods.restaurant.location.address;
                                    //              // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
                                    //              domComponents.appendResultsInput(domBuilder.resultsBuilder(foodHTML, addressHTML, "rest"));
                                    //         })
                                    //          // Line below is a function declared in eventlistener.js | Used to apply eventlisteners to every save button
                                    //         clickSave();
                                    //     })
}