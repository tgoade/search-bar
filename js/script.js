const searchWrapper = document.querySelector('.search-input');
const inputBox = searchWrapper.querySelector('.search-input input');
const suggestBox = searchWrapper.querySelector('.autocomplete-box');
let searchIcon = searchWrapper.querySelector('.search-icon')

let suggestions =  [
    "How does the bidding rule work?",
    "Stacking case for the bidding rules",
    "2 different approaches to bidding rules",
    "How does import rule work?",
    "What is the import rule",
    "Why are keywords not imported",
    "Category targeting",
    "How to create and assign category groups",
    "Why are bids unchanged on HSA",
    "How does the placement rule work"
]

// input field functionality
inputBox.onkeyup = (e) => {
    let userData = e.target.value;  // user entered data
    let filteredArray = [];
    
    if(userData){
        filteredArray = suggestions.filter((data) => {
            // filtering array value and only returning those words/sentence that starts with what the user entered
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        filteredArray = filteredArray.map((data) => {
            return data = `<li>${data}</li>`;
        })
        searchIcon.innerHTML = '<i class="fas fa-times" onclick="clearInput()"></i>';   // swap magifying glass icon with x icon

        searchWrapper.classList.add('active');      // show autocomplete box
        
        showSuggestions(filteredArray);
        
        // add onclick attribute in all li tags
        let allList = suggestBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++){
            allList[i].setAttribute('onclick', 'select(this)');
        }
    } else {
        searchIcon.innerHTML = '<i class="fas fa-search"></i>';
        searchWrapper.classList.remove('active');   
    }    
}

// clears input field and hide suggestion list
function clearInput(){
    searchWrapper.classList.remove('active'); 
    inputBox.value = '';
    searchIcon.innerHTML = '<i class="fas fa-search"></i>';
}

// equate input value to user selected value
function select(element){
    let dataSelected = element.textContent;
    inputBox.value = dataSelected;
    searchWrapper.classList.remove('active'); 
}

// show suggestion list under search bar
function showSuggestions(list){
    let suggestedList;
    if(!list.length){
        userValue = inputBox.value;
        suggestedList = `<li>${userValue}</li>`;        
    } else {
        suggestedList = list.join('');
    }
    suggestBox.innerHTML = suggestedList;
}

