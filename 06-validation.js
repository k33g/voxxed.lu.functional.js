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

Validation.of(day => month => `Day: ${day} Month: ${month}`)
    .ap(checkDay(5))
    .ap(checkMonth(12))

checkDayAndMonth = (day, month) => Validation.of(day => month => `Day: ${day} Month: ${month}`)
  .ap(checkDay(day))
  .ap(checkMonth(month))

checkDayAndMonth(42, 42).cata(
  failureFn = (errors) => errors.join('|'),
  successFn = (res) => res
)
