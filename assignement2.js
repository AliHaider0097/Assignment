                                                1
function createAdder(num) {
    return function(x) {
      return x + num;
    };
  }
  let addFive = createAdder(5);
  console.log(addFive(10)); // outputs 15
  console.log(addFive(20)); // outputs 25  

                                                2

function searchArray(arr, val) {
    if (arr.length === 0) {
      return false;
    }
  
    if (arr[0] === val) {
      return true;
    }
  
    return searchArray(arr.slice(1), val);
  }


                                                    3
function addParagraph(text) {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
  }
  
                                                        4
  function addListItem(text) {
    let ul = document.querySelector('ul'); 
   let li = document.createElement('li'); 
    li.textContent = text; 
    ul.appendChild(li); 
  }
  addListItem('New list item');

                                                        5
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}
let myElement = document.getElementById('my-element');
changeBackgroundColor(myElement, 'red');


                                                        6
function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  
                                                        7
  function getObjectFromLocalStorage(key) {
    let storedObject = localStorage.getItem(key);
    if (storedObject) {
      return JSON.parse(storedObject);
    }
    return null;
  }
  

                                                    8


  function saveObjectToLocalStorage(obj) {
    Object.keys(obj).forEach(key => {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    });
  
    let retrievedObj = {};
    Object.keys(obj).forEach(key => {
      retrievedObj[key] = JSON.parse(localStorage.getItem(key));
    });
  
    return retrievedObj;
  }
  let obj = { name: "John", age: 30, occupation: "Engineer" };
  let savedObj = saveObjectToLocalStorage(obj);
  console.log(savedObj);
    

                                              


