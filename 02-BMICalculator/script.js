const result = document.querySelector('#result');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const calc = document.querySelector('#calc');

calc.addEventListener('click',(e)=>{
    e.preventDefault();
    let hm = height.value/100;
    let bmi = weight.value/(hm*hm);

    result.innerHTML = `<p>BMI = ${bmi.toFixed(2)} kg/m2 </p>`;
    if(bmi.toFixed(2)<18.6){
        result.innerHTML += `<p>You are Under Weight!!</p>`
        const p = result.querySelectorAll('p')   
        p[1].style.color = "yellow"
    } else if(bmi.toFixed(2)>18.6 && bmi.toFixed(2)<24.9){
        result.innerHTML += `<p>Your Weight in Normal Range!!</p>`
        const p = result.querySelectorAll('p')   
        p[1].style.color = "green"
    } else{
        result.innerHTML += `<p>You are Overweighted!!</p>`
        const p = result.querySelectorAll('p')   
        p[1].style.color = "red"

    }

})