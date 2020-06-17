//UI elements
const form = document.querySelector('#interest-form');
const principal = document.querySelector('#amount');
const duration = document.querySelector('#duration');
const plan = document.querySelector('#plan');
const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', calculateInterest);

const rate = {
  piggy: 10,
  flexn: 10,
  target: 10,
};
/* 
A = P (1 + r ÷ n) ^ nt
A = $100 x (1 + 0.05 ÷ 12) ^ (12 x 1)
A = $100 x (1.004167) ^ (12)
A = $100 x 1.051
A = $105.1166 (or $105.12 if your bank rounds up)

*/
function calculateInterest(e) {
  e.preventDefault();
  const amount = principal.value;
  const calRate = rate[plan.value];
  const time = duration.value;

  const interest = amount * (1 + parseFloat(calRate / 100) * duration.value);

  document.querySelector('#message').value = `Your invest is ${interest}`;
}
