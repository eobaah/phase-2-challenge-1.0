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
    throw(new Error( 'Please enter a valid date with the format YYYY,MM,DD' ))
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

function filterBetween( arr, min, max ) {
  var filterNums = arr.filter( function( num ){
    if ( min <= num && num <= max ) {
      return num
    }
  })
  if ( filterNums.length !== 0 ) {
    return filterNums
  } else {
    throw(new Error( 'Please select a valid range' ))
  }
}


module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween
}
