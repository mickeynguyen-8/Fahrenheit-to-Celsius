//Add EvenListener 
document.getElementById('clicking').addEventListener('click', CalculateMath);

//Add function
function CalculateMath() {

    //Get INPUT one number
    let num1 = document.getElementById('typing').value;

    //Process - (the number minus 32) multiply 5 divide 9
    let total = ((num1 - 32) * 5 )/ 9; 

    //Display the result
    document.getElementById('result').innerHTML = total ;
}