export default function weekday( date ) {

  let days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  if ( 0 <= date.getDay() < 7 && date instanceof Date && !isNaN( date.valueOf() ) ) {
    return days[ date.getDay() ]
  } else {
    return 'Please enter a valid date with the format YYYY,MM,DD'
  }
}
