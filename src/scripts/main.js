// Execute all components
// Call fetch functions
// Handle button clicks




let searchRestButton = document.getElementById("dine_search_btn");
let restaurantSearchInputField = document.getElementById("dine_search_bar")

searchRestButton.addEventListener("click", function(){
    let searchInputField = document.getElementById("dine_search_bar");
    let userRestaurantSearchValue = searchInputField.value;
    //console.log("userRestaurantSearchValue :" , userRestaurantSearchValue)
    // This does some shit
    data.getDiningInfo(userRestaurantSearchValue);
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

    //classList[1] refers to the 2nd class that was added while the results were being generated to the Results div
    if (event.target.classList[1] === "restaurantSaveButton") {
        let restaurantName = event.target.parentElement.firstElementChild.firstElementChild.innerHTML;
        console.log("restaurantName" , restaurantName)
        let restaurantDiv = document.getElementById("restaurant-container");
        return restaurantDiv.innerHTML = `Restaurant: ${restaurantName}`;
    } else if (event.target.classList[1] === "parksSaveButton") {
      let parkName = event.target.parentElement.firstElementChild.firstElementChild.innerHTML;
      let parkDiv = document.getElementById("parks-container");
      parkDiv.innerHTML = `Park: ${parkName}`
    } else if (event.target.classList[1] === "meetupSaveButton") {
        let meetupName = event.target.parentElement.firstElementChild.firstElementChild.innerHTML;
        let meetupDiv = document.getElementById("meetups-container");
        meetupDiv.innerHTML = `Meetup: ${meetupName}`
      }
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

let searchMeetButton = document.getElementById("meet_search_btn");
let meetupSearchInputField = document.getElementById("meet_search_bar")

searchMeetButton.addEventListener("click", function(){
    let searchInputField = document.getElementById("meet_search_bar");
    let searchInputFieldValue = searchInputField.value;
    let fetch1 = data.getMeetupInfo(searchInputFieldValue);
    return fetch1
});