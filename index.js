
var Emitter = require('emitter')

module.exports = Cell

function Cell(value){
	this.value = value
}

/**
 * mixin emitter
 */

Emitter(Cell.prototype)

/**
 * read the cell's value
 * 
 * @return {x}
 */

Cell.prototype.get = function(){
	return this.value
}

/**
 * replace the cell's value
 * 
 * @event {change} (newValue, oldValue)
 * @param {x} value
 * @return {this}
 */

Cell.prototype.set = function(value){
	var old = this.value
	this.value = value
	return this.emit('change', value, old)
}