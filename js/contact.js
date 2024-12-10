document.addEventListener("DOMContentLoaded", () => {
    const reasonSelect = document.getElementById("reason");
    const productIDGroup = document.getElementById("productIDGroup");
    const productIDInput = document.getElementById("productID");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    const productCodes = ["P1234", "P5678", "P9101", "P1121"];

 
    reasonSelect.addEventListener("change", () => {
        if (reasonSelect.value === "productInfo") {
            productIDGroup.style.display = "block"; 
        } 
        
        else {
            productIDGroup.style.display = "none";
        }
    });

    nameInput.addEventListener("blur", validateName);
    phoneInput.addEventListener("blur", validatePhone);
    productIDInput.addEventListener("blur", validateProductID);
    messageInput.addEventListener("blur", validateMessage);
    
    ///////////////////////////////////////////////////////////////////////////

    // validates the name in the name field
    function validateName() {
        const nameValue = nameInput.value;
        if (nameValue.length >= 4 && !/\d/.test(nameValue)) {
            nameInput.classList.remove("invalid");
            nameInput.classList.add("valid");
        } 
        
        else {
            nameInput.classList.remove("valid");
            nameInput.classList.add("invalid");
        }
    }
    
    ///////////////////////////////////////////////////////////////////////////

    //validates the phone in the phone field
    function validatePhone() {
        const phoneValue = phoneInput.value;
        const phoneRegex = /^\d{3} \d{3} \d{4}$/;
        if (phoneRegex.test(phoneValue)) {
            phoneInput.classList.remove("invalid");
            phoneInput.classList.add("valid");
        } 
        
        else {
            phoneInput.classList.remove("valid");
            phoneInput.classList.add("invalid");
        }
    }
    
    ///////////////////////////////////////////////////////////////////////////
    
    //validates the product ID
    function validateProductID() {
        const productIDValue = productIDInput.value;
        if (productCodes.includes(productIDValue)) {
            productIDInput.classList.remove("invalid");
            productIDInput.classList.add("valid");
        } 
        
        else {
            productIDInput.classList.remove("valid");
            productIDInput.classList.add("invalid");
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    
    //Validates the Message
    function validateMessage() {
        const messageValue = messageInput.value;
        if (messageValue.length >= 10 && messageValue.length <= 30) {
            messageInput.classList.remove("invalid");
            messageInput.classList.add("valid");
        } 
        
        else {
            messageInput.classList.remove("valid");
            messageInput.classList.add("invalid");
        }
    }
}
                         );
