
var btn = document.querySelector(".btn");


btn.addEventListener("click", calcBMI);

function calcBMI() {
    var firstName = document.querySelector(".firstName");
    var lastName = document.querySelector(".lastName");
    var mass = document.querySelector(".mass");
    var height = document.querySelector(".height");
    var result = document.querySelector(".result");

    var BMI = (mass.value) / (height.value * height.value);
    BMI = BMI.toFixed(2);
    console.log(BMI);

    if (firstName.value == "" || lastName.value == "" || mass.value == "" || height.value == "") {
        result.innerHTML = "You are required to fill all fields.";
        result.style.color = "red";
    } else{
        if (BMI < 18.5) {
            result.style.color = "rgb(230, 184, 0)";
            result.innerHTML = (firstName.value) + " " + (lastName.value) + "'s BMI is " +  BMI  + "kg/m2. You are underweight ! you might want to seek medical help.";
        }
    
        else if(BMI > 18.5 && BMI < 24) {
            result.style.color = "green";
            result.innerHTML = (firstName.value) + " " + (lastName.value) + "'s BMI is " +  BMI  + "kg/m2. You are healthy! good job and stay that way.";
            
        } else if(BMI > 24 && BMI < 30) {
            result.style.color = "orange";
            result.innerHTML = (firstName.value) + " " + (lastName.value) + "'s BMI is " +  BMI  + "kg/m2. You are overweight! You might want to seek medical help.";
    
        } else {
            result.style.color = "red";
            result.innerHTML = (firstName.value) + " " + (lastName.value) + "'s BMI is " +  BMI  + "kg/m2. You are obese! You might want to seek medical help.";
        };
    }
    
    
};


