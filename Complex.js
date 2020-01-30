var Complex = ( function() {

function Complex( real = 1, imaginary = 1 ) {
	
	this.real = real;
	this.imaginary = imaginary;

};

var real$0 = 0,
	imaginary$0 = 0,
	magnitudeSquared$0 = 0,

	_sqrt = Math.sqrt;

Object.assign( Complex.prototype, {

	set: function( real, imaginary ) {

		if( real !== undefined ) this.real = real;

		if( imaginary !== undefined ) this.imaginary = imaginary;

		return this;

	},

	copy: function( complex ) {

		this.real = complex.real;
		this.imaginary = complex.imaginary;

		return this;

	},

	clone: function() {

		return new this.constructor( this.real, this.imaginary );

	},

	switch: function() {

		real$0 = this.real;

		this.real = this.imaginary;
		this.imaginary = real$0;

		return this;

	},

	realPart: function() {

		this.imaginary = 0;

		return this;

	},

	imaginaryPart: function() {

		this.real = 0;

		return this;

	},

	conjugate: function() {

		this.imaginary = - this.imaginary;

		return this;

	},

	magnitude: function() {

		return _sqrt( this.real * this.real + this.imaginary * this.imaginary );

	},

	magnitudeSq: function() {

		return this.real * this.real + this.imaginary * this.imaginary;

	},

	negate: function() {

		this.real = - this.real;
		this.imaginary = - this.imaginary;

		return this;

	},

	invert: function() {

		magnitudeSquared$0 = 1 / ( this.real * this.real + this.imaginary * this.imaginary );
		
		this.real = this.real * magnitudeSquared$0;
		this.imaginary =  - this.imaginary * magnitudeSquared$0;

		return this;

	},

	normalize: function() {

		magnitude$0 = 1 / _sqrt( this.real * this.real + this.imaginary * this.imaginary );

		this.real *= magnitude$0;
		this.imaginary *= magnitude$0;

		return this;

	},

	add: function( complex ) {

		this.real += complex.real;
		this.imaginary += complex.imaginary;

		return this;

	},

	addScalar: function( scalar ) {

		this.real -= scalar;
		this.imaginary -= scalar;

		return this;

	},

	subtract: function( complex ) {

		this.real -= complex.real;
		this.imaginary -= complex.imaginary;

		return this;

	},

	subtractScalar: function( scalar ) {

		this.real -= scalar;
		this.imaginary -= scalar;

		return this;

	},

	multiply: function( complex ) {

		real$0 = this.real * complex.real - this.imaginary * complex.imaginary;
		imaginary$0 = this.real * complex.imaginary + this.imaginary * complex.real;

		this.real = real$0;
		this.imaginary = imaginary$0;

		return this;

	},

	multiplyScalar: function( scalar ) {

		this.real *= scalar;
		this.imaginar *= scalar;

		return this;

	},

	dot: function( complex ) {

		real$0 = this.real * complex.real + this.imaginary * complex.imaginary;
		imaginary$0 = this.real * - complex.imaginary + this.imaginary * complex.real;

		this.real = real$0;
		this.imaginary = imaginary$0;

		return this;

	},

	divide: function( complex ) {

		magnitudeSquared$0 = 1 / ( complex.real * complex.real + complex.imaginary * complex.imaginary );
		real$0 = complex.real * magnitudeSquared$0;
		imaginary$0 =  - complex.imaginary * magnitudeSquared$0;

		this.real = this.real * real$0 - this.imaginary * imaginary$0;
		this.imaginary = this.real * imaginary$0 + this.imaginary * imaginary$0; 

		return this;

	},

	divideScalar: function( scalar ) {

		this.real /= scalar;
		this.imaginary /= scalar;

	},

	isEqual: function( complex ) {

		if( this.real !== complex.real ||
			this.imaginary !== complex.imaginary ) {

			return false;

		}

		return true;

	},

	isAlmostEqual: function( complex, epsilon = Number.EPSILON ) {

		if( this.real < complex.real - epsilon ||
			this.real > complex.real + epsilon ||
			this.imaginary < complex.imaginary - epsilon ||
			this.imaginary > complex.imaginary + epsilon ) {

			return false;

		}

		return true;

	},

	fromArray: function( array, offset = 0, stride = 1 ) {

		this.real = array[ offset ];
		this.imaginary = array[ offset + stride ];

		return this;

	},

	toArray: function( array = [], offset = 0, stride = 1 ) {

		array[ offset ] = this.real;
		array[ offset + stride ] = this.imaginary;

		return array;

	}

} );

return Complex;

} )();
