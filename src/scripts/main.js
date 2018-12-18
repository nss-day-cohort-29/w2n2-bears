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

{/* <button type="button" id="17194287" class="saveButton">Save</button> */}
// let saveButton = document.getElementsByClassName(".saveButton")
// saveButton.addEventListener("click", function () {console.log("save button clicked")})


// This runs itineraryBuilder inside domBuilder and adds the HTML and a button class depending on what API was called.
let getSavedResult = (event) => {
    let savedHTML = event.target.parentElement.firstElementChild.firstElementChild.innerHTML;

    console.log(savedHTML);

    let itineraryDiv = document.getElementById("itinerary-container");
    itineraryDiv.innerHTML += savedHTML;
    // let buttonClass = event.target.classList[1];
    // domBuilder.itineraryBuilder(savedHTML, buttonClass);
 }

 // WHEN "save" button is clicked:
 let clickSave = () => {
    // Taking all elements with class="saveButton"
    let saveButton = document.querySelectorAll(".saveButton");
    //    This loops through all "saveButton" elements and adds an event listener to the save buttons.
    for(let i = 0; i < saveButton.length; i++) {
    //    Then runs "getSavedResult" defined at line 71
       saveButton[i].addEventListener("click", getSavedResult);
    }

 }