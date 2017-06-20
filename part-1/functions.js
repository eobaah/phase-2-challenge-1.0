function weekday( date ) {

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


function snippet( string, maxlength ) {
  let slicedString
  if(string.length <= maxlength) {
    slicedString = string.slice(0,maxlength)
  } else {
    slicedString = string.slice(0,maxlength).concat('...')
  }
  return slicedString
}

function numProps( obj ) {
  if( obj !== null && typeof obj === 'object' && obj.length === undefined ) {
      let count = 0;
    for( let key in obj ) {
      count++
    }
    return count
  } else {
    return 'Please enter a valid input'
  }
}

module.exports = {
  weekday,
  snippet,
  numProps
}
