/*    JavaScript 6th Edition
 *    Chapter 8
 *    Individual Case Project
 
 *    Author: Tim Powers
 *    Date: 07/13/2019

 *    Filename: contact.js
 */

"use strict";

// global variables
var profile = {};
var objectString;
var arrayString;

// validate entered name
function validateName() {
   var unInput = document.getElementById("Name");
   var errorDiv = document.getElementById("nameError");
   try {
      if (/.{1,}/.test(unInput.value) === false) {
         throw "Name must be at least one character long";
      } else if (/\d/.test(unInput.value) === true) {
         throw "Name must contain only letters";
      }
   }
   catch(msg) {
      // display error message
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      // change input style
      unInput.style.background = "rgb(255,233,233)";
   }
}

// validate entered email
function validateEmail() {
   var emailInput = document.getElementById("emailbox");
   var errorDiv = document.getElementById("emailError");
   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
   try {
      if (emailCheck.test(emailInput.value) === false) {
         throw "Please provide a valid email address";
      }
   }
   catch(msg) {
      // display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      // change input style
      emailInput.style.background = "rgb(255,233,233)";
   }
}

// convert form input to strings for submission
function convertToString() {
   // convert lodging array to string
   arrayString = lodging.toString();
   // convert profile object to string
   objectString = JSON.stringify(profile);
}

function createEventListeners() {
   var unInput = document.getElementById("Name");
   var emailInput = document.getElementById("emailbox");
   if (unInput.addEventListener) {
      unInput.addEventListener("change", validateName, false);  
      emailInput.addEventListener("change", validateEmail, false); 
   } else if (unInput.attachEvent) {
      unInput.attachEvent("onchange", validateName);
      emailInput.attachEvent("onchange", validateEmail);
   }
   var button = document.getElementById("createBtn");
   if (button.addEventListener) {
      button.addEventListener("click", convertToString, false);
   } else if (button.attachEvent) {
      button.attachEvent("onclick", convertToString);
   }
}
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}

