// Passing in form following submit on contact.html page
// Declaring as testForm argument in sendMail function

function sendMail(testForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": testForm.name.value,                   //calls the "from_name" variable from emailJS template & assigns  value of form name
        "from_email": testForm.emailaddress.value,          //calls the "from_email" variable from emailJS template & assigns  value of form emailaddress
        "project_request": testForm.projectsummary.value    //calls the "project_request" variable from emailJS template & assigns  value of form projectsummary
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);               // If we receive a success response from emailJS API call log "Success" to console
        },
        function(error) {
            console.log("FAILED", error);                   // If we receive a fail error response from emailJS API call log "Failed" to console
        }
    );
    return false;                                           // To prevent Page from reloading on submit
}

