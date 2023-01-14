// Underweight <19
// Normal weight < 25
// Overweight < 30
// Obesity > 30
// BMI= (weight in kg / height2 in m)


let height = document.querySelector('.height');
let result = document.querySelector('.result');
let weight = document.querySelector('.weight');
let display = document.querySelector('.display');
let button = document.querySelector('.btn');


button.addEventListener('click', ()=>{
    let bmi = Math.floor((weight.value )/ (height.value * height.value))
    result.value = `Your BMI is ${bmi}`

if(bmi < 19 && bmi>0){
display.innerHTML = 'You are UNDERWEIGHT'
}

else if(bmi < 25){
display.innerHTML = 'You are NORMAL WEIGHT'
}

else if(bmi < 30){
display.innerHTML = 'You are OVERWEIGHT'
}

else{
display.innerHTML = 'You are OBESE'
}


})