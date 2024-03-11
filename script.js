function calculateBmi(){
    var heightinput = document.getElementById("height");
    var weightinput = document.getElementById("weight");
    var  resultDiv = document.getElementById("result");

    var height = parseFloat("heightinput.value");
    var weight = parseFloat("weightinput.value");

    if (isNaN(height) || isNaN(weight)){
        resultDiv.innerHTML = "Please enter a valid height and weight!!";
        return;

    }
    var  bmi = weight / ((height / 100) ** 2);
    var category = "";

    if (bmi < 18.5){
        category = "You are underweight!";
    }else if (bmi < 25){
        category = "Congratulations.. You are of Standard Weight!!";
    }else if (bmi < 30){
        category = "You are overweight!!";
    }else{
        category = "Ooops... You are obese!!";
    }
    resultDiv.innerHTML = "Your BMI is " +bmi.toFixed(2)+ "("+ category +")";
}