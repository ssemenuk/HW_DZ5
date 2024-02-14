//1
const car = {manufacturer: "Toyota",model: "C-HR",year: 2023,averageSpeed: 80, };
  
  function showCarInfo(car) {
    alert("Виробник: " + car.manufacturer +"\nМодель: " + car.model +"\nРік випуску: " + car.year +"\nСередня швидкість: " + car.averageSpeed + " км/год");
  }
  
  function calculateTravelTime(distance, averageSpeed)
   {

    const hoursWithoutBreak = distance / averageSpeed;
    const breaksCount = (hoursWithoutBreak / 4) | 0;
    const totalBreakTime = breaksCount * 1; 
    const totalTime = hoursWithoutBreak + totalBreakTime;
  
    return totalTime;
  }
  
  const distance = 500; 
  const travelTime = calculateTravelTime(distance, car.averageSpeed);
  
  showCarInfo(car);
  
  alert("Для подолання " + distance + " км знадобиться:" +"\n" + travelTime + " годин");




//2
function Fraction(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator;

  this.add = function(fraction) {
    const commonDenominator = this.denominator * fraction.denominator;
    const numerator1 = this.numerator * fraction.denominator;
    const numerator2 = fraction.numerator * this.denominator;
    return new Fraction(numerator1 + numerator2, commonDenominator);
  };

  this.subtract = function(fraction) {
    const commonDenominator = this.denominator * fraction.denominator;
    const numerator1 = this.numerator * fraction.denominator;
    const numerator2 = fraction.numerator * this.denominator;
    return new Fraction(numerator1 - numerator2, commonDenominator);
  };

  this.multiply = function(fraction) {
    return new Fraction(
      this.numerator * fraction.numerator,
      this.denominator * fraction.denominator
    );
  };

  this.divide = function(fraction) {
    return new Fraction(
      this.numerator * fraction.denominator,
      this.denominator * fraction.numerator
    );
  };

  this.reduce = function() {
    const gcd = findGreatestCommonDivisor(this.numerator, this.denominator);
    return new Fraction(this.numerator / gcd, this.denominator / gcd);
  };
}

function findGreatestCommonDivisor(a, b) {
  while (b) {
    const t = a;
    a = b;
    b = t % b;
  }
  return a;
}

const fraction1 = new Fraction(1, 2);
const fraction2 = new Fraction(3, 4);

const sum = fraction1.add(fraction2);
alert("Сума: " + sum.numerator + "/" + sum.denominator);

const difference = fraction1.subtract(fraction2);
alert("Різниця: " + difference.numerator + "/" + difference.denominator); 

const product = fraction1.multiply(fraction2);
alert("Добуток: " + product.numerator + "/" + product.denominator); 

const quotient = fraction1.divide(fraction2);
alert("Частка: " + quotient.numerator + "/" + quotient.denominator); 

const reducedFraction = fraction1.reduce();
alert("Скорочення: " + reducedFraction.numerator + "/" + reducedFraction.denominator); 

//3

function Time(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;

  this.displayTime = function() {
    const formattedHours = this.hours.toString().padStart(2, "0");
    const formattedMinutes = this.minutes.toString().padStart(2, "0");
    const formattedSeconds = this.seconds.toString().padStart(2, "0");
    return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  };

  this.addSeconds = function(seconds) {
    this.seconds += seconds;

    while (this.seconds >= 60) {
      this.minutes++;
      this.seconds -= 60;
    }

    while (this.minutes >= 60) {
      this.hours++;
      this.minutes -= 60;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  };

  this.addMinutes = function(minutes) {
    this.minutes += minutes;

    while (this.minutes >= 60) {
      this.hours++;
      this.minutes -= 60;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  };

  this.addHours = function(hours) {
    this.hours += hours;

    while (this.hours >= 24) {
      this.hours -= 24;
    }
  };
}

const time = new Time(20, 30, 45);

alert("Поточний час: " + time.displayTime());
time.addSeconds(30);
alert("Час після додавання 30 секунд: " + time.displayTime());
time.addMinutes(15);
alert("Час після додавання 15 хвилин: " + time.displayTime());
time.addHours(2);
alert("Час після додавання 2 годин: " + time.displayTime());