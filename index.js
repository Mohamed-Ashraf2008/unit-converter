/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let resultsContainerEL = document.getElementById("results-container-el")
let inputEL = document.getElementById("input-el")
console.log(inputEL)
function convert (){
    resultsContainerEL.innerHTML =(`<div class="group">
                    <p class="units">length (Meter/Feet)</p>
                    <p class="results">${inputEL.value} meters = ${(inputEL.value * 3.281).toFixed(3)} feet | ${inputEL.value} feet = ${(inputEL.value / 3.281).toFixed(3)} meters</p>
                </div>
                <div class="group">
                    <p class="units">Volume (Liters/Gallons)</p>
                    <p class="results">${inputEL.value} liters = ${(inputEL.value * 0.264).toFixed(3)} gallons | ${inputEL.value} gallons = ${(inputEL.value / 0.264).toFixed(3)} liters</p>
                </div>
                <div class="group">
                    <p class="units">Mass (Kilograms/Pounds)</p>
                    <p class="results">${inputEL.value} kilos = ${(inputEL.value * 2.204).toFixed(3)} pounds | ${inputEL.value} pounds = ${(inputEL.value / 2.204).toFixed(3)} kilos</p>
                </div>`)
}