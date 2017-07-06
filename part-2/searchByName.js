
const fs = require( 'fs' )

let contacts = []

fs.readFile('./clients.json', 'utf8', ( err,data )=> {
  if(err) throw err;

  let parsed = JSON.parse( data )
  parsed.forEach( function( obj ) {
    let id = obj.id
    let rep_name = obj.rep_name
    let searchTerm = process.argv[ 2 ]
    if ( rep_name.toLowerCase().includes( searchTerm.toLowerCase() ) ) {
      contacts.push( { id, rep_name } )
    } else {
      "Not found"
    }
  })
  console.log( contacts )
})
