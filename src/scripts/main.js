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

//this code block allows for user to hit "enter key" a.k.a. keyCode=13 to trigger their search criteria
restaurantSearchInputField.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        document.getElementById("dine_search_btn").click();
    }
});

// WHEN "save" button is clicked:
let clickSave = () => {
   // Taking all elements with class="saveButton"
   let saveButton = document.querySelectorAll(".saveButton");
   //    This loops through all "saveButton" elements and adds an event listener to the save buttons.
   for(let i = 0; i < saveButton.length; i++) {
   //    Then runs "getSavedResult" defined at line 37
      saveButton[i].addEventListener("click", getSavedResult);
   }
}

// This runs itineraryBuilder inside domBuilder and adds the HTML and a button class depending on what API was called.
//argument being passed in, is the "click"
let getSavedResult = (event) => {

    //add conditional; if buttonclicked = restaurant push to restaurant container;
    //else if buttonclicked = parks push to parks container

    let restaurantName = event.target.parentElement.firstElementChild.firstElementChild.innerHTML;
    let parkName = event.target.parentElement.firstElementChild.firstElementChild.innerHTML;
    // console.log("parkName", parkName)
    // console.log(restaurantName);
    let restaurantDiv = document.getElementById("restaurant-container");
    restaurantDiv.innerHTML = `Restaurant: ${restaurantName}`;

    let parkDiv = document.getElementById("parks-container");
    parkDiv.innerHTML = `Park: ${parkName}`
    // let buttonClass = event.target.classList[1];
    // domBuilder.itineraryBuilder(restaurantName, buttonClass);
 }



 // import from team oracle
 let parksBtn = document.getElementById("park_search_btn");
let bloop = document.getElementById("parksearch");

parksBtn.addEventListener("click", function() {

    let fetch1 = data.parksFetch(bloop.value);
    return fetch1
    // console.log("parks search: " + fetch1);
     ;
 });