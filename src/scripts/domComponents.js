// Define output
const domComponents = {
    // Called initially when page is loaded
    // appendSearchInput(domElement){
    //     let searchContainer = document.querySelector("#search_container");
    //     searchContainer.innerHTML += domElement;
    // },

    // Called when "lets go" is clicked, "appendResultsInput" is called
    appendResultsInput(domElement){
        let resultsContainer = document.querySelector("#results-container");
        resultsContainer.innerHTML += domElement;
    },
    appendItineraryInput(domElement){
        let itineraryContainer = document.querySelector("#itinerary-container");
        itineraryContainer.innerHTML += domElement;
    },
}