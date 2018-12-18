// Execute all components
// Call fetch functions
// Handle button clicks




let searchRestButton = document.getElementById("dine_search_btn");
let restaurantSearchInputField = document.getElementById("dine_search_bar")

searchRestButton.addEventListener("click", function(){
    let searchInputField = document.getElementById("dine_search_bar");
    let userRestaurantSearchValue = searchInputField.value;
    console.log("userRestaurantSearchValue :" , userRestaurantSearchValue)

    let x = data.getDiningInfo(userRestaurantSearchValue);

    // domComponents.appendResultsInput(x);

});

//this code block allows for user to hit "enter" to trigger their search criteria
restaurantSearchInputField.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
       document.getElementById("dine_search_btn").click();
    }
 });

// domComponents.appendItineraryInput("bleep");

// data.getDiningInfo(userRestaurantSearchValue);
// resultsContainer.innerHTML += domBuilder.resultsBuilder("Hattie B's", "hot chicken", "american");