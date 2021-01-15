const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// the event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

// fetch exchange rate and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

//   this is where we fetch the data from the http request
  fetch(
    `https://v6.exchangerate-api.com/v6/1fc3a53e3285ffb4990d7d56/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
    //   we now have to connect the rate of the first currency
    //  to align with the value of the second currency
      const rate = data.conversion_rates[currency_two];

    //   this will display the exchange rate info on the screen
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    //   to.fixed()  this is a method thats used in rounding data into decim
    });
}

calculate();
