const fs = require( 'fs' )

let states = []

fs.readFile('./clients.json', ( err, data ) => {
  if( err ) throw err;
  parsed = JSON.parse( data )
  parsed.forEach( function( obj ) {
    let id = obj.id
    let rep_name = obj.rep_name
    let company = obj.company
    let city = obj.city
    let state = obj.state
    let searchTerm = process.argv[ 2 ]
    if( state.toLowerCase().includes( searchTerm.toLowerCase() ) ) {
      states.push( { id, rep_name, company, city, state } )
    } else {
      return "Try again. Does not exist"
    }
    console.log( states );
  })
})
