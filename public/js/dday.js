function calculateDDay() {
  // targetDate는 input element로 부터 얽으므로 string type이다. 
  // 이를 위해서 .value를 통해 원래의 'Date' object 형태로 값을 읽어올 수 있다.
  // 2023-11-30을 입력했을 때: targetDate = "2023-11-30T09:00:00.000 GMT+0900" ('Date' object)
  let targetDate = new Date(document.querySelector('.targetDate').value)
  // 오늘이 2023-11-28 0시 59분 47초인 경우: today = "2023-11-28T00:59:47.000 GMT+0900" ('Date' object) 
  let today = new Date()

  // 날짜를 정확하게 계산하기 위해 targetDate와 today의 시, 분, 초를 0으로 통일한다.
  // targetDate = "2023-11-30T00:00:00.000 GMT+0900"
  targetDate.setHours(0, 0, 0, 0)
  // today = "2023-11-28T00:00:00 GMT+0900"
  today.setHours(0, 0, 0, 0);

  // diffTime: 시간간격을 ms 단위로 나타낸 값(172800000 = 86400000ms/day * 2days) (type: Number)
  // 1일 = 24시간 = 24 * 60분 = 24 * 60 * 60초 = 24 * 60 * 60 * 1000ms = 86400000
  let diffTime = targetDate - today
  // 일수를 얻기 위해서는 ms로 나타낸 값을 하루 단위로 바꿔주어야 한다. /86400000 (type: Number)
  let diffDays = diffTime / (1000 * 60 * 60 * 24)

  // console.log(`targetDate: ${targetDate}`)
  // console.log(`today: ${today}`)
  // console.log(`diffTime: ${diffTime}`)
  // console.log(`diffDays: ${diffDays}`)

  let resultText
  if(diffDays < 0) {
    resultText = `D + ${Math.abs(diffDays)}`
  }
  else if(diffDays > 0) {
    resultText = `D - ${Math.abs(diffDays)}`
  }
  else {
    resultText = `D - Day`
  }

  document.querySelector('.result').innerHTML = resultText
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    calculateDDay()
  }
})
