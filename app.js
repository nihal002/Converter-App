const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const kilogramsInput = document.getElementById("kilograms");
const ouncesInput = document.getElementById("ounces");
const gramsInput = document.getElementById("grams");
const poundsInput = document.getElementById("pounds");

const metersInput = document.getElementById("meters");
const kilometersInput = document.getElementById("kilometers");
const cmInput = document.getElementById("cm");
const inchesInput = document.getElementById("inches");
const yardsInput = document.getElementById("yards");
const milesInput = document.getElementById("miles");
const feetsInput = document.getElementById("feets");

const secondInput = document.getElementById("second");
const minuteInput = document.getElementById("minute");
const hourInput = document.getElementById("hour");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = value * 1.8 + 32;
        kelvinInput.value = value + 273.15;
        break;

      case "fahrenheit":
        celciusInput.value = (value - 32) / 1.8;
        kelvinInput.value = (value - 32) / 1.8 + 273.15;
        break;

      case "kelvin":
        celciusInput.value = value - 273.15;
        fahrenheitInput.value = (value - 273.15) * 1.8 + 32;
        break;

      case "pounds":
        kilogramsInput.value = value / 2.2046;
        gramsInput.value = value / 0.0022046;
        ouncesInput.value = value * 16;
        break;

      case "kilograms":
        poundsInput.value = value * 2.2046;
        gramsInput.value = value * 1000;
        ouncesInput.value = value * 35.274;
        break;

      case "grams":
        kilogramsInput.value = value * 1.8 + 32;
        poundsInput.value = value + 273.15;
        ouncesInput.value = value + 273.15;
        break;

      case "ounces":
        kilogramsInput.value = value / 35.274;
        gramsInput.value = value / 0.035274;
        poundsInput.value = value * 0.0625;
        break;

      case "feets":
        metersInput.value = value / 3.2808;
        kilometersInput.value = value / 3280.8;
        cmInput.value = value / 0.032808;
        inchesInput.value = value * 12;
        yardsInput.value = value * 0.33333;
        milesInput.value = value * 0.00018939;
        break;

      case "meters":
        kilometersInput.value = value / 1000;
        cmInput.value = value / 0.01;
        inchesInput.value = value * 39.37;
        yardsInput.value = value * 1.0936;
        milesInput.value = value * 0.0006217;
        feetsInput.value = value * 3.2808;
        break;

      case "kilometers":
        metersInput.value = value * 1000;
        cmInput.value = value * 100000;
        inchesInput.value = value * 39370;
        yardsInput.value = value*1093.6;
        milesInput.value = value * 0.62137;
        feetsInput.value = value * 3280.8;
        break;

      case "cm":
        kilometersInput.value = value/100000;
        metersInput.value = value / 100;
        inchesInput.value = value * 0.39370;
        yardsInput.value = value * 0.010936;
        milesInput.value = value* 0.0000062137;
        feetsInput.value = value * 0.032808;
        break;

      case "inches":
        kilometersInput.value = value / 39370;
        cmInput.value = value / 0.39370;
        metersInput.value = value / 39.370 ;
        yardsInput.value = value * 0.027778;
        milesInput.value = value * 0.000015783;
        feetsInput.value = value * 0.083333;
        break;

      case "yards":
        kilometersInput.value = value / 1093.6;
        cmInput.value = value / 0.010936;
        inchesInput.value = value * 36;
        metersInput.value = value / 1.0936;
        milesInput.value = value * 0.00056818;
        feetsInput.value = value * 3;
        break;

      case "miles":
        kilometersInput.value = value / 0.62137;
        cmInput.value = value / 0.0000062137;
        inchesInput.value = value * 63360;
        yardsInput.value = value * 1760;
        metersInput.value = value / 0.00062137;
        feetsInput.value = value * 5280;
        break;

      case "second":
        minuteInput.value = value / 60;
        hourInput.value = value / 3600;
        break;

      case "minute":
        secondInput.value = value * 60;
        hourInput.value = value / 60;
        break;

      case "hour":
        secondInput.value = value * 3600;
        minuteInput.value = value * 60;
        break;
    }
  });
}
