// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics").then((response) => {
    console.log(response);
    const topics = response.data["topics"];
    const parent = document.querySelector(".topics");
    topics.forEach((topic) => {
        parent.appendChild(divCreator(topic));
    });
});

function divCreator(topicString) { //tab component
    //create elements
    const tab = document.createElement("div");
    //add class names
    tab.classList.add("tab");
    //add text content
    tab.textContent = topicString;
    //event listener
    tab.addEventListener("click", (e) => {
        tab.classList.toggle("active-tab");
    });
    //return card
    return tab;
}