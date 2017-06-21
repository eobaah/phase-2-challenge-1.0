import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { weekday,
         snippet,
         numProps,
         filterBetween } from './functions.js'

chai.use(chaiChange)

describe('weekday()', function(){

  it('should be a function', function(){
    expect( weekday ).to.be.a('function')
  })

  it('Checks happy case if function returns Monday', function(){
    let date = new Date(2017, 5, 19)
    expect( weekday(date) ).to.equal('Monday')
  })


  it('Checks sad path where function returns Monday', function(){
    let date = new Date(2017, 5, 19)
    expect( weekday(date) ).to.not.equal('Tuesday')
  })
})

describe('snippet()', function(){

  it('should be a function', function(){
    expect( snippet ).to.be.a('function')
  })

  it('Function returns a shortened string with ellipsis if the length of string is greater than the maxlength', function(){
    let string = "For the following exercises"
    let maxlength = 11
    expect( snippet( string, maxlength ) ).to.equal('For the fol...')
  })

  it('Function returns the entire string without an ellipsis if the length of string is less than the maxlength', function(){
    let string = "Hello World!"
    let maxlength = 12
    expect( snippet( string, maxlength ) ).to.equal('Hello World!')
  })

  it('Ensures that Hello World! does not equal Hello World without the exclamation mark ', function(){
    let string = "Hello World!"
    let maxlength = 12
    expect( snippet( string, maxlength ) ).to.not.equal('Hello World')
  })
})

describe('numProps()', function(){

  it('should be a function', function(){
    expect( numProps ).to.be.a('function')
  })

  it('Counts the number of key in an object and return the number', function(){
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555',
      location: 'Atlanta'
    }
    expect( numProps( friend ) ).to.equal(4)
  })

  it('Return zero for an empty object', function(){
    let friend = {
    }
    expect( numProps( friend ) ).to.equal(0)
  })

  it('Returns an error message when an array is entered instead of an object', function(){
    let friend = [
      'name', 'Dominique',
      'age', 30,
      'phone', '555-555-5555',
      'location', 'Atlanta']

    expect( numProps( friend ) ).to.equal('Please enter a valid input')
  })
})

describe('filterBetween()', function(){

  it('should be a function', function(){
    expect( filterBetween ).to.be.a('function')
  })

  it('Return an array of elements between the min and max', function(){
    let arr = [1, 2, 3, 4, 5, 6, 7]
    expect( filterBetween( arr, 3, 6 ) ).to.eql([3, 4, 5, 6])
  })

  it('Returns invalid range', function(){
    let arr = [1, 2, 3, 4, 5, 6, 7]
    expect( filterBetween( arr, 10, 12 ) ).to.eql('Please select a valid range')
  })
})
