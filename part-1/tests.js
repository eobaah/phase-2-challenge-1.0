import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import weekday from './functions.js'

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
