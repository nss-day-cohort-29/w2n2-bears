// Execute all components
// Call fetch functions
// Handle button clicks

// data.getDiningInfo();



let searchRestButton = document.getElementById("dine_search_btn");
let userRestaurantSearchValue = "";


searchRestButton.addEventListener("click", function(){
    let searchInputValue = document.getElementById("dine_search_bar");
    let userRestaurantSearchValue = searchInputValue.value;
    console.log("userRestaurantSearchValue :" , userRestaurantSearchValue)

    // console.log("Restaurants Button clicked!");


});

data.getDiningInfo(userRestaurantSearchValue);

domComponents.appendResultsInput("bloop");
domComponents.appendItineraryInput("bleep");

// resultsContainer.innerHTML += domBuilder.resultsBuilder("Hattie B's", "hot chicken", "american");