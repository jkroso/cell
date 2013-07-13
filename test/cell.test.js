
var chai = require('./chai')
  , Cell = require('..')

describe('cell', function(){
	var cell
	var spy
	beforeEach(function(){
		cell = new Cell(1)
		spy = chai.spy()
	})

	describe('get()', function(){
		it('should return the `value`', function(){
			cell.get().should.equal(1)
		})
	})

	describe('set(value)', function(){
		it('should return `this`', function(){
			cell.set(2).should.equal(cell)
		})

		it('should replace `value`', function(){
			cell.get().should.equal(1)
			cell.set(2).get().should.equal(2)
		})

		it('should emit "change"', function(){
			cell.on('change', spy)
			cell.set(2)
			spy.should.have.been.called.once.with(2, 1)
		})
	})
})