$("#submit-form").click(function (e)) {
                validate();
                }
);

function validate() {
			patternNonAlpha = new RegExp(/[~`!#$%\^&@()*+=\-\[\]\\';,/{}|\\":<>\?]/);
			patternNumbers = new RegExp(/[0-9]/);
			patternOnlyNumbers = new RegExp('^[0-9]+$')
			patternWhiteSpaces = new RegExp(/[\\s]/);
			patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			error = 0;
			
			
			//  INPUT 1: Name ----------------------------------------------------------------------------------------------------			 
			
			// Get the values of name (first, middle, last)
			firstName = document.getElementById("first_name").value;
			middleName = document.getElementById("middle_name").value;
			lastName = document.getElementById("last_name").value;

			//  Check for blank inputs
			if(firstName == "" || middleName == "" || lastName=="") {
				text = "Name(s) left blank.";
				error = 1;
			}
			//  Check for non-alphanumeric characters		
			else if (patternNonAlpha.test(firstName) || patternNonAlpha.test(middleName) || patternNonAlpha.test(lastName)) {
				text = "Standard alphanumeric characters only.";
				error = 1;
			}
			//  Check for numbers
			else if (patternNumbers.test(firstName) || patternNumbers.test(middleName) || patternNumbers.test(lastName)) {
				text = "No numbers allowed.";
				error = 1;
			}
			// Check for white spaces
			else if (patternWhiteSpaces.test(firstName) || patternWhiteSpaces.test(middleName) || patternWhiteSpaces.test(lastName)) {
				text = "No white spaces allowed.";
				error = 1;
			}
			// No erros, remove text
			else {
				text = "";
			}  
			document.getElementById("name_validation").innerHTML = text;
			
			//  INPUT 2: Email ----------------------------------------------------------------------------------------------------	
			
			// Get the values of name (first, middle, last)
			email = document.getElementById("email").value;
			
			//  Check for blank inputs
			if(email == "") {
				text = "Email left blank.";
				error = 1;
			}
			//  Check for non-alphanumeric characters		
			else if (!patternEmail.test(email)) {
				text = "Invalid email address.";
				error = 1;
			}
			else {
				text = "";
			}
			document.getElementById("email_validation").innerHTML = text;
			
			//  INPUT 3: Age + Gender ------------------------------------------------------------------------------------------------	
			
			// Get the values of name (first, middle, last)
			age = document.getElementById("age").value;
			gender = document.getElementById("gender").value;
			
			//  Check for blank inputs
			if(age == "") {
				text = "Age left blank.";
				error = 1;
			}
			//  Check for non-alphanumeric characters		
			else if (!patternOnlyNumbers.test(age)) {
				text = "Only numbers please.";
				error = 1;
			}
			else {
				text = "";
			}
			document.getElementById("age_gender_validation").innerHTML = text;
			
			//  INPUT 4: City + Country ------------------------------------------------------------------------------------------------	
			
			// Get the values of name (first, middle, last)
			city = document.getElementById("city").value;
			country = document.getElementById("country").value;
			
			//  Check for blank inputs
			if(city == "") {
				text = "City left blank.";
				error = 1;
			}
			else if(country == "") {
				text = "Country left blank.";
				error = 1;
			}
			else {
				text = "";
			}
			document.getElementById("city_country_validation").innerHTML = text;
			
			if(error == 1) {
				text = "Errors on form. Please correct prior to resubmission."
			}
			else if {
				text = "";
			}
			document.getElementById("form_validation").innerHTML = text;
			
			if(error == 0) {
				document.getElementById("form").innerHTML = "Thank you for your interest! We will reach out to you shortly.";	
			}
			
			
		}
