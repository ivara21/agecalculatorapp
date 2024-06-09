function calculateAge() {
    // Get the values of the year, month, and date inputs
    var year = parseInt(document.getElementById("year").value.trim());
    var month = parseInt(document.getElementById("month").value.trim());
    var day = parseInt(document.getElementById("day").value.trim());



    // Convert the input values to integers
    var yearInt = parseInt(year);
    var monthInt = parseInt(month);
    var dayInt = parseInt(day);

    // Define custom error messages
    var yearErrorMsg = "Must be in the past";
    var monthErrorMsg = "Must be a valid month.";
    var dayErrorMsg = "Must be a valid day.";
    var fieldEmpty = "This field is required.";
    var invalidDate = "Must be a valid date.";
    var errorColor = "red";
    var validColor = "hsl(0, 1%, 44%)";
    var validBorderColor =  "hsl(0, 0%, 86%)";

    // Check if any of the input fields are empty or not a valid number
    // Year
    if (isNaN(yearInt) || year === '') {
        document.getElementById("yearError").innerText =  fieldEmpty;
        document.getElementById("yearError").style.display = "block";
        document.getElementById("yearP").style.color = errorColor; 
        document.getElementById("year").style.borderColor = errorColor; 
        
    }else if (year > 2024) {
        document.getElementById("yearError").innerText = yearErrorMsg;
        document.getElementById("yearError").style.display = "block";
        document.getElementById("yearP").style.color = errorColor; 
        document.getElementById("year").style.borderColor = errorColor;
    } else {
        document.getElementById("yearError").style.display = "none";
        document.getElementById("yearP").style.color = validColor; 
        document.getElementById("year").style.borderColor = validBorderColor;
    }


    // Month

    if (isNaN(monthInt) || month ==='') {
        document.getElementById("monthError").innerText = fieldEmpty;
        document.getElementById("monthError").style.display = "block";
        document.getElementById("monthP").style.color = errorColor; 
        document.getElementById("month").style.borderColor = errorColor;
        
    } else if (month > 12) {
        document.getElementById("monthError").innerText = monthErrorMsg;
        document.getElementById("monthError").style.display = "block";
        document.getElementById("monthP").style.color = errorColor; 
        document.getElementById("month").style.borderColor = errorColor;
    } else {
        document.getElementById("monthError").style.display = "none";
        document.getElementById("monthP").style.color = validColor; 
        document.getElementById("month").style.borderColor = validBorderColor;
    }


    // Day
    if (isNaN(dayInt) || day === '') {
        document.getElementById("dayError").innerText = fieldEmpty;
        document.getElementById("dayError").style.display = "block";
        document.getElementById("dayP").style.color = errorColor; 
        document.getElementById("day").style.borderColor = errorColor;
    }else if ( day > 31 ) {
        document.getElementById("dayError").innerText =  dayErrorMsg;
        document.getElementById("dayError").style.display = "block";
        document.getElementById("dayP").style.color = errorColor; 
        document.getElementById("day").style.borderColor = errorColor;
    } else {
        document.getElementById("dayError").style.display = "none";
        document.getElementById("dayP").style.color = validColor; 
        document.getElementById("day").style.borderColor = validBorderColor;
        
    }


    if (isNaN(yearInt) || isNaN(monthInt) || isNaN(dayInt) || year === '' || month === '' || day === '' || yearInt > 2024 ||  month > 12 || day > 31) {
        return;
    }

    if (isNaN(dayInt) || isNaN(monthInt) || monthInt === 4 && dayInt > 30 || monthInt === 2 && dayInt > 29 || monthInt === 6 && dayInt > 30 || monthInt === 9 && dayInt > 30 || monthInt === 11 && dayInt > 30) {
        document.getElementById("dayError").innerText = invalidDate;
        document.getElementById("dayError").style.display = "block";
        document.getElementById("monthError").innerText = invalidDate;
        document.getElementById("monthError").style.display = "none";
        document.getElementById("yearError").innerText = invalidDate;
        document.getElementById("yearError").style.display = "none";
        document.getElementById("dayP").style.color = errorColor;  
        document.getElementById("day").style.borderColor = errorColor;
        document.getElementById("monthP").style.color = errorColor; 
        document.getElementById("month").style.borderColor = errorColor;
        document.getElementById("yearP").style.color = errorColor; 
        document.getElementById("year").style.borderColor = errorColor; 
    } else {
        document.getElementById("dayError").style.display = "none";
        document.getElementById("dayP").style.color = validColor; 
        document.getElementById("day").style.borderColor = validBorderColor;
        // document.getElementById("monthError").style.display = "none";
        document.getElementById("monthP").style.color = validColor; 
        document.getElementById("month").style.borderColor = validBorderColor;
        // document.getElementById("yearError").style.display = "none";
        document.getElementById("yearP").style.color = validColor; 
        document.getElementById("year").style.borderColor = validBorderColor;
    }

    if (monthInt === 4 && dayInt > 30 || monthInt === 2 && dayInt > 29 || monthInt === 6 && dayInt > 30 || monthInt === 9 && dayInt > 30 || monthInt === 11 && dayInt > 30) {
        return;
    }



    // Get the current date
    var currentDate = new Date();

    // Create a Date object for the birthdate
    var birthdate = new Date(year, month - 1, day);

    // Calculate the difference in milliseconds between the two dates
    var difference = currentDate - birthdate;

    // Convert the difference to years
    var ageInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

    // Calculate the remaining difference after removing years
    var remainingDifference = difference % (1000 * 60 * 60 * 24 * 365.25);

    // Convert the remaining difference to months
    var ageInMonths = Math.floor(remainingDifference / (1000 * 60 * 60 * 24 * 30.44));

    // Calculate the remaining difference after removing months
    var remainingDifferenceDays = remainingDifference % (1000 * 60 * 60 * 24 * 30.44);

    // Convert the remaining difference to days
    var ageInDays = Math.floor(remainingDifferenceDays / (1000 * 60 * 60 * 24));

    // Display the age
    document.getElementById("ageYears").innerText = ageInYears;
    document.getElementById("ageMonths").innerText = ageInMonths;
    document.getElementById("ageDays").innerText = ageInDays;
}

