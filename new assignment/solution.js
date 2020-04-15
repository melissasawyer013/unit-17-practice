

/* Challenge 1.  Create an event listener for the text field with id 'search'.
    This event listener should trigger on each key up. 
    It should be able to capture when user presses 'Enter' key. 
    You should grab the value from the search field. If the value matches any of the list items, highlight that item.
    
    Bonus: If the entered text does not match any item, present user with an error. Hint: Look at the div with id 'error'. This error shuold go away the next time user presses a key.
*/

let groceryList = document.querySelectorAll("li");
let errorSpot = document.querySelector('#error');
let inputSpot = document.querySelector('#search');

inputSpot.addEventListener('keyup', checkForEnter);
function checkForEnter(e) {
    if (e.key === 'Enter') {
        let userInput = document.querySelector('#search').value;
        console.log(userInput);
        let flag = false;
        for (let i=0; i<groceryList.length; i++) {
            groceryList[i].style.backgroundColor = 'white';
            if (userInput == groceryList[i].innerText) {
                groceryList[i].style.backgroundColor = 'yellow';
                flag = true;
            } else {
                groceryList[i].style.backgroundColor = 'white';
            }
        }
        if (flag === false) {
            document.querySelector('#error').style.display = "block";
        } else {
            document.querySelector('#error').style.display = "none";
        }
    }  
}

//  1. You will want to write a query selector with an addEventListener that has a keyup event and a function named highlighter.


//  2. You want to write the function called highlighter and inside the function do the following. . 


//  3.  You will want a queryselector with an id of error. You will want it have a style display of none. This will be default style for now.



//  4. Create a variable called pressedKey with the value of the event key. console.log the variable name to see the value of the event key.



//  5. Create a variable called valueFromInputField with the value that targets the value. console.log with the variable name to view the value of valueFromInputField.



//  6. Now we will need to create a conditional that will have a for loop. You will need the variable pressedKey will be identical to 'Enter'. 



//  7. Within the conditional you will need another variable called listItems with the value of querySelectorAll with 'li' so the program will able to later traverse the values in the li.




//  8. Create another variable called matched and give it a boolean value of false.



//  9. Now you will need to start your for loop. Create a variable that has a value of 0. Then after that use that variable name be less than the length of the listItems. After that be sure you get it to loop with the syntax of ++.



//  10. In the for loop we also want another conditional. We want an if statement that has the listItems with the variable name that was assigned 0 in brackets and then include innerText that will have the identicle operator with valueFromInputField. This condition should change the syle background color to yellow with the matched variable to be a boolean of True. The Else part should remain a background color of white. This should close the loop.



//  11. Create another conditional that has the variable matched to be identicle to false. Inside should have a querySelector with the id of error that will have a style display with a value of block.

  

/* Challenge 2.  Create an event listener for the Up Button.
    This event listener should trigger when user clicks on it.
    In a for loop, check if any of the items are currently highlighted.
    If they are, make the current one unhighlighted (using backgroundColor white), and make the previous list item highlight yellow.

    Hint: The very first list item will have no previous element.
*/

document.querySelector('#up').addEventListener('click', goUp)

function goUp() {
    for ( i=0; i<groceryList.length; i++) {
        if (groceryList[i].style.backgroundColor === "yellow") {
            groceryList[i].style.backgroundColor = "white";
            groceryList[i].previousElementSibling.style.backgroundColor = "yellow";
            return;
        }
    }
}

//  1. You will want a queryselector  with an addEventListener with click event and a function called goUp.


//  2. You want to write the function called goUp and inside the function do the following.


//  3. You will want listItems have a value of queryselectorAll with li which will be very helpful for traversing.


//  4. Here is where we will start a for loop which will have a conditional statement as well. The For loop should be similar to challenge 1. Create a variable that has a value of 0. Then after that use that variable name be less than the length of the listItems. After that be sure you get it to loop with the syntax of ++.


// 5. The if condition is similiar what we did in challenge 1 but with some traversing sentax. You will want the style backgroundColor to be an identical value to yellow and the listItem with the variable name in brackets. You will also want to have a .previousElementSibling to be not null. Within that you want the listItems to have a style background of white. But after that, include listItem with previousElementSibling with a style background color of yellow. Still in the for loop, you will also need a querySelector that is connected to the search value to have the value of the listItems with the previousElementSibling and innerText.

//  6. To close the for loop to work properly with return.


/* Challenge 3.  Create an event listener for the Down Button.
    This event listener should trigger when user clicks on it.
    In a for loop, check if any of the items are currently highlighted.
    If they are, make the current one unhighlighted (using backgroundColor white), and make the next list item highlight yellow.

    Hint: The very last list item will have no next element.
*/
document.querySelector('#down').addEventListener('click', goDown)

function goDown() {
    for ( i=0; i<groceryList.length; i++) {
        if (groceryList[i].style.backgroundColor === "yellow") {
            groceryList[i].style.backgroundColor = "white";
            groceryList[i].nextElementSibling.style.backgroundColor = "yellow";
            return;
        }
    }
}

// 1. You will want a queryselector  with an addEventListener with click event and a function called goDown.

// 2. Know what you did with Challenge 2 to replicate for goDown.


/* Challenge 4.  Create an event listener for the text field with id 'counter'.
    This event listener should trigger on each key down. 
    If the user pressed the ArrowUp key, it increases the value by 1 in the field. 
    If the user pressed ArrowDown key, it decreases the value by 1 in the field.

    Hint: You will have to use parseInt() method to convert string to int.
*/

document.querySelector("#counter").addEventListener("keyup", changeCounter);

function changeCounter(e) {
    let startingValue = Number(document.querySelector("#counter").value);
    let pressedKey = e.key;
    if (pressedKey === "ArrowUp") {
        e.target.value = startingValue += 1;
        // console.log (e);
        // console.log(e.target);
    } else if (pressedKey === "ArrowDown") {
        e.target.value = startingValue -= 1;
    }
}
// 1. You will want a queryselector  with an addEventListener with keydown event and a function called changeCounter.


// 2. Write the function  called changeCounter with the following logic.

// 3. Write a variable called pressedKey that has the value of the key of the event. 

//  4. Use an if conditional that has the pressedKey is identicle to the value of ArrowUp. console.log the event and then console.log the event with the target to see what happens. Lastly write some logic the takes the event that will target the value to HAVE the value that will convert the string to an interger with parseInt. The parseInt will contain the event, target and value plus an increment of 1.


//  5. Create an else id that has pressedKey be identicle to ArrowDown. Try to replicate what you did in the step above, but use -1.


//  Challenge 5. Create an example of event bubbling. Like the other Challenges, the html is already added for you.

//  1. Create a variable called parent and give it the value of querySelector parent.
let parent = document.querySelector("#parent");
//  2. Add click event on parent div. You will need an eventListener as well as a function. Use console.log or any other method to show how it works with "Parent Clicked".

parent.addEventListener("click", function() {console.log("Parent clicked.")})

// 3.  create a variable called child with a querySelector child.

let child = document.querySelector("#child");

//  4. Add click event on child button. You will need an event listener of click and function. Use console.log or any other method to show how it works with "Child Click".

child.addEventListener("click", function() {console.log("Child clicked.")})

// 5. Now stop the bubbling with a stopPropagation.

child.addEventListener("click", function(e) {e.stopPropagation()})