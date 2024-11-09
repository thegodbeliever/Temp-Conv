function convertTemperature() {
    let tempInput = parseFloat(document.getElementById('tempInput').value);
    let unitInput = document.getElementById('unitInput').value;
    let unitOutput = document.getElementById('unitOutput').value;

    let result;

    // Celsius to others
    if (unitInput === 'celsius') {
        if (unitOutput === 'fahrenheit') {
            result = (tempInput * 9/5) + 32;
        } else if (unitOutput === 'kelvin') {
            result = tempInput + 273.15;
        } else {
            result = tempInput;
        }
    }

    // Fahrenheit to others
    else if (unitInput === 'fahrenheit') {
        if (unitOutput === 'celsius') {
            result = (tempInput - 32) * 5/9;
        } else if (unitOutput === 'kelvin') {
            result = (tempInput - 32) * 5/9 + 273.15;
        } else {
            result = tempInput;
        }
    }

    // Kelvin to others
    else if (unitInput === 'kelvin') {
        if (unitOutput === 'celsius') {
            result = tempInput - 273.15;
        } else if (unitOutput === 'fahrenheit') {
            result = (tempInput - 273.15) * 9/5 + 32;
        } else {
            result = tempInput;
        }
    }

    document.getElementById('result').innerHTML = `Converted Temperature: ${result.toFixed(2)}° ${unitOutput.charAt(0).toUpperCase() + unitOutput.slice(1)}`;
}
