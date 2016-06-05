function getMonthName(mo) {
   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException("Invalid Month Number");
   }
}

function getDayName(da) {
   da = da-1; // Adjust day number for array index
   var days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
   if (days[da] !== undefined) {
      return days[da];
   } else {
      throw new UserException("Invalid Day Number");
   }
}


giveMeMonthName = (monthNumber) => {
  try {
    return Either.Right(getMonthName(monthNumber));
  } catch (err) {
    return Either.Left(err);
  }
};

giveMeDayName = (dayNumber) => {
  try {
    return Either.Right(getDayName(dayNumber));
  } catch (err) {
    return Either.Left(err);
  }
};

giveMeMonthName(12).cata(
	leftnFn= (err) => {
		return JSON.stringify(err);
	},
	rightFn= (value) => {
		return `Yes! Month name is ${value}`
	}
)

checkMonthAndDay = (monthNumber,dayNumber) => {
  try {
    let month = getMonthName(monthNumber);
    let day = getDayName(dayNumber);
    return Either.Right({month, day});
  } catch (err) {
    return Either.Left(err);
  }
}
