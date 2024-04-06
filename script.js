// Notification feature (1 mark)
//Implementing a feature that pops a notification if you click Homepage button
// when you are already on HomePage
function showNotification() {
    alert("You are already on Homepage");
}
// Event listener for button to show notification
const notificationButton = document.getElementById("notificationButton");
notificationButton.addEventListener("click", showNotification);

// Event handler to change style on hover (4 marks)
//This will work when you hover over my name in the Home Page
//p.s. try finding my name by hovering over the paragraph 
document.getElementById("interactiveElement").addEventListener("mouseover", function() {
    this.style.color = "red";
});
  
document.getElementById("interactiveElement").addEventListener("mouseout", function() {
    this.style.color = ""; // Reset color on mouseout
});

// Event listener for the select element
// this is used on the HomePage
document.getElementById("selectCondition").addEventListener("change", function() {
    const selectedValue = this.value;
    const conditionalElement = document.getElementById("conditionalElement");
    
    if (selectedValue === "1") {
      conditionalElement.textContent = "You are a genius";
    } else if (selectedValue === "2") {
      conditionalElement.textContent = "You are surely joking";
    }
});

// Function to change color scheme
function changeColorScheme(scheme) {
    const body = document.body;
    switch (scheme) {
        case "scheme1":
            body.style.backgroundColor = "#F8F9FA";
            body.style.color = "#212529";
            break;
        case "scheme2":
            body.style.backgroundColor = "#343A40";
            body.style.color = "#FFFFFF";
            break;
        case "default":
            body.style.backgroundColor="";
            body.style.color="";
            break;
        default:
            break;
    }
}
  
// Event listeners for color scheme buttons
document.getElementById("colorScheme1").addEventListener("click", function() {
    changeColorScheme("scheme1");
});
  
document.getElementById("colorScheme2").addEventListener("click", function() {
    changeColorScheme("scheme2");
});

document.getElementById("defaultColorScheme").addEventListener("click", function() {
    changeColorScheme("default");
});

// Form submission event listener
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;
  
    // Validation
    if (name && email && age && gender && message) {
        // Validate name (letters only, at least 2 characters)
        const namePattern = /^[a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            alert("Please enter a valid name (letters only, at least 2 characters).");
            return;
        }

        // Validate email using a simple pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate age (numeric value between 18 and 100)
        const parsedAge = parseInt(age, 10);
        if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 100) {
            alert("Please enter a valid age (between 18 and 100).");
            return;
        }
        // For gender and message, basic required field validation is already done
        // Form submission success
        alert("Form submitted successfully!");
    } else {
        alert("Please fill out all required fields.");
    }
});
  