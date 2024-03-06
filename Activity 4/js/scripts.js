var user = 'Macalah';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;


var price = 20,
    studentDiscount = .10,
    StudentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = StudentPrice.toFixed(2);