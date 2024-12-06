// Function to set the authentication token in localStorage
export function setAuthToken(token){
    localStorage.setItem("authToken", token)
}

// Function to retrieve the authentication token from localStorage
export function getAuthToken(){
    return localStorage.getItem("authToken");
}

// Function to set user detail's in localStorage, Stored as a JSON string
export function setUserDetails(userDetails){
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
}

// Function to retrieve user detail's from localStorage, parsed from a JSON string
export function getUserDetails(){
    return JSON.parse(localStorage.getItem("userDetails"))
}

// Function to set user email's in localStorage
export function setEmail(email){
    localStorage.setItem("Email", email)
}

// Function to retrieve user email's from localStorage
export function getEmail(){
    return localStorage.getItem("Email");
}

//Function to clear all items  from localStorage and redirect to the Login Page
export function clearAllSessions(){
    localStorage.clear()
    window.location.href = "/login";
}