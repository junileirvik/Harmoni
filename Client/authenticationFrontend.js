import EventService from "../EventService.js";

// Login for regular users
function login() {
  var username = "test"; //document.getElementById();
  var password = "test"; //document.getElementById();
  eventService
    .loginUser(username, password)
    .then(response => response.json())
    .then(json => handleResponse(json))
    .catch(error => console.error("Error: ", error));
}

// Login for organisers
function login() {
  var username = "test"; //document.getElementById();
  var password = "test"; //document.getElementById();
  eventService
    .loginOrganiser(username, password)
    .then(response => response.json())
    .then(json => handleResponse(json))
    .catch(error => console.error("Error: ", error));
}

// Saves the token in localStorage for use
function handleResponse(json) {
  localStorage.setItem("token", json.jwt);
}