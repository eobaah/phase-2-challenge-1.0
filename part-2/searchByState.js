const fs = require( 'fs' )

let states = []

fs.readFile('./clients.json', ( err, data ) => {
  if( err ) throw err;
  parsed = JSON.parse( data )
  parsed.forEach( function( obj ) {
    const id = obj.id
    const rep_name = obj.rep_name
    const company = obj.company
    const city = obj.city
    const state = obj.state
    let searchTerm = process.argv[ 2 ]
    if( state.toLowerCase().includes( searchTerm.toLowerCase() ) ) {
      states.push( { id, rep_name, company, city, state } )
    } else {
      return "Try again. Does not exist"
    }
    console.log( states );
  })
})
