checkMonth = (monthNumber) => {
  try {
    let month = getMonthName(monthNumber);
    return Validation.Success(month)
  } catch (err) {
    return Validation.Fail([err])
  }
};

checkDay = (dayNumber) => {
  try {
    let day = getDayName(dayNumber);
    return Validation.Success(day)
  } catch (err) {
    return Validation.Fail([err])
  }
}

checkDay(42)
checkDay(42).ap(checkMonth(42)).ap(checkMonth(42))
checkDay(42).ap(checkMonth(12)).ap(checkMonth(42))

//------------


checkMonthOnData = (data) => {
  console.log('checkMonth', data)
  try {
    let month = getMonthName(data.month);
    return Validation.Success(month)
  } catch (err) {
    return Validation.Fail([err])
  }
}

checkDayOnData = (data) => {
  console.log('checkDay', data)
  try {
    let day = getDayName(data.day);
    return Validation.Success(day)
  } catch (err) {
    return Validation.Fail([err])
  }
}

checkMonthAndDay = (data) => Validation.of(
  day => {
    console.log('dayName:', day)
    return month => {
      console.log('monthName:', month)
      return `==> ${day}:${month}`
    };
  }).ap(checkDayOnData(data)).ap(checkMonthOnData(data))

checkMonthAndDay({day:2,month:12})
checkMonthAndDay({day:42,month:42})

checkMonthAndDay({day:42,month:42}).cata(
  failureFn = (errors) => errors.join('|'),
  successFn = (res) => res
)
