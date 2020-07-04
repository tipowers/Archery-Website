/* JavaScript 6th Edition
 * Chapter 2 & 3 Case Project
 * Author: Tim Powers
 * Date: 06/24/2019
 * Filename: fp.js
 */

 //Declare variables
function shots() {
    var numYears = document.getElementById("years").value;
    var numArrows = document.getElementById("arrows").value;
    var totalArrows = numArrows * numYears;

//If user enters 1 as an input the if write statement executes.  Otherwise the else statement executes.
    if (numYears == 1) {
        document.write("That's right!!! I have been shooting a bow and arrow for 1 year and ");
        document.write("by your calculations I have shot a whopping " + totalArrows + " arrows!");
    } else {
        document.write(" Not quite...I have only shot a bow and arrow for roughly one year.");
        }
 
//If user enters a number between 2500 and 3500 as an input the if write statement executes.  Otherwise the else statement executes.    
    if (totalArrows >= 2750 && totalArrows <= 3250) {
        document.write(" You are pretty much on the nose!  I have shot roughly 3,000 arrows.");
    } else {
        document.write(" Not quite...I have shot roughly 3,000 arrows.");
        }
    }