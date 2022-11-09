// Master This 10 and we can traverse the DOM freely
// 1. getElementById
// 2. getElementsByClassName
// 3. QuerySelector
// 4. querySelectorAll
// 5. Selecting Children
// 6. Selecting Descendants
// 7. Selecting Parents
// 8. Selecting Ancestors
// 9. nextElementSibling
//10. previousElementSibling

//Get Element By Id. Can only ever select one as only one id is proper
const grandparent = document.getElementById('grandparent-id');
//get Element by Class allows for multiple selections using array methods
const parents = Array.from(document.getElementsByClassName("parent"))

// grandparent.style.backgroundColor = "#333"
// create a fucntion to house the change color just in case there are multiple opportunities to share
// changeColor(grandparent);
//loop through each class
parents.forEach(changeColor);

function changeColor(el){
  el.style.backgroundColor = "#333"
}