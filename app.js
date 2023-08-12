let celsiusInput = document.querySelector(`#celsius > input`);
let FahrenheitInput = document.querySelector(`#fahrenheit > input`);
let KelvinInput = document.querySelector(`#kelvin > input`);

let btn = document.querySelector(`.button button`)

function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celsiusInput.value)
    let ftemp = (cTemp*(9/5))+ 32;
    let kTemp = cTemp + 273.15

    FahrenheitInput.value = roundNumber(ftemp);
    KelvinInput.value = roundNumber(kTemp)
})

FahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let ctemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) *(5/9) + 273.15

    celsiusInput.value = roundNumber(ctemp);
    KelvinInput.value = roundNumber(kTemp)
})
KelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(KelvinInput.value)
    let ctemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    FahrenheitInput.value = roundNumber(fTemp);
    celsiusInput.value = roundNumber(ctemp)
})

btn.addEventListener('click',()=>{
    celsiusInput.value = "",
    KelvinInput.value =  "",
    FahrenheitInput.value = ""
})