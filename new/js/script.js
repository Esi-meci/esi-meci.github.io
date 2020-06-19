//UI elements
const form = document.querySelector('#interest-form');
const savingAmount = document.querySelector('#saving-amount');
const expectAmount = document.querySelector('#goal-amount');
const duration = document.querySelector('#duration');
const plan = document.querySelector('#plan');
const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', calculateInterest);

const rate = {
  piggy: 10,
  flexn: 10,
  target: 10,
  safe: 8,
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
  const futureValue = expectAmount.value;
  const presentValue = savingAmount.value;
  const InterestRate = rate[plan.value] / 100 / 12;

  //Divide future value by present value

  const futureDivByPre = Math.log(futureValue / presentValue);
  const futureInterest = Math.log(1 + InterestRate);

  const numberofMonths = futureDivByPre / futureInterest;

  console.log(numberofMonths / 12);

  //Calculate

  // e.preventDefault();
  // FV = Pmt x (((1 + r) ^ n) – 1) ÷ r)
  // FV = 100 x (((1 + 0.004167) ^ 60) – 1) ÷ 0.004167)
  // FV = 100 x (1.283 – 1) ÷ 0.004167
  // FV = 100 x 68.0067
  // FV = 6800.67
  // const amount = principal.value;
  // const calRate = rate[plan.value];
  // const time = duration.value;

  // const interest = Math.floor(
  //   amount * (1 + parseFloat(calRate / 100) * duration.value)
  // );
  // const change = Math.floor(interest - amount);

  // document.querySelector('#message').innerHTML = `&#8358 ${interest}`;
  // document.querySelector('#interest').innerHTML = `&#8358 ${change}`;

  // Load google charts
  // google.charts.load('current', { packages: ['corechart'] });
  // google.charts.setOnLoadCallback(drawChart);

  // // Draw the chart and set the chart values
  // function drawChart() {
  //   var data = google.visualization.arrayToDataTable([
  //     ['Task', 'Hours per Day'],
  //     ['Initial Investment', interest],
  //     ['Total Interest', change],
  //   ]);

  //   // Optional; add a title and set the width and height of the chart
  //   var options = { title: 'Interest Charts', width: '100%', height: 400 };

  //   // Display the chart inside the <div> element with id="piechart"
  //   var chart = new google.visualization.PieChart(
  //     document.getElementById('piechart')
  //   );
  //   chart.draw(data, options);
  // }
}
