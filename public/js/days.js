function calculateDate() {
  let startDate = document.querySelector('.startDate').value
  let numDays = parseInt(document.querySelector('.numDays').value)

  if (!startDate || isNaN(numDays)) {
    document.getElementById('result').innerText = 'Please enter a valid date and number of days.';
    return;
  }

  let resultDate = new Date(startDate)
  console.log(`resultDate: ${resultDate}`)
  // 오늘부터 1일!
  resultDate.setDate(resultDate.getDate() + numDays - 1)
  console.log(`resultDate: ${resultDate}`)

  let formattedDate = resultDate.toLocaleDateString('ko-KR', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  document.querySelector('.result').innerHTML = 
  `Resulting Date: ${formattedDate}`
}