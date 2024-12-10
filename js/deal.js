function displayDiscount() {
    var today = new Date(),
        day = today.getDay(),
        discountMessage = "",
        imageUrl = "",
        imageAlt = "";

    
    switch (day) {
        case 0: 
            discountMessage = "Sunday Special: 10% off all handcrafted canoes!";
            imageUrl = "img/deal1.jpg"; 
            imageAlt = "Sunday Special Image";
            break;
        case 1:
            discountMessage = "Monday Special: Free paddle with every canoe purchase!";
            imageUrl = "img/deal2.jpg";
            imageAlt = "Monday Madness Image";
            break;
        case 2: 
            discountMessage = "Tuesday Special: 15% off canoe repair services!";
            imageUrl = "img/deal3.jpg"; 
            imageAlt = "Tuesday Deal Image";
            break;
        case 3:
            discountMessage = "Wednesday Special: 20% off all accessories!";
            imageUrl = "img/deal4.jpg"; 
            imageAlt = "Wednesday Offer Image";
            break;
        case 4:
            discountMessage = "Thursday Special: Free delivery on all orders!";
            imageUrl = "img/deal5.jpg"; 
            imageAlt = "Thursday Surprise Image";
            break;
        case 5:
            discountMessage = "Friday Special: Buy one, get one 50% off!";
            imageUrl = "img/deal6.jpg"; 
            imageAlt = "Friday Frenzy Image";
            break;
        case 6:
            discountMessage = "Saturday Special: Free camp chef, same day camping!";
            imageUrl = "img/deal7.jpg"; 
            imageAlt = "Saturday Sale Image";
            break;
    }


    var discountMessageElement = document.getElementById("discount-message");
    if (discountMessageElement) {
        discountMessageElement.innerHTML = discountMessage;
    }


    var discountImageElement = document.getElementById("discount-image");
    if (discountImageElement) {
        discountImageElement.src = imageUrl;
        discountImageElement.alt = imageAlt;
        //discountImageElement.style.display = "block";
    }
}


window.onload = displayDiscount;
