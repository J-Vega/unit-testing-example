

const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');



describe('fizzBuzzer', function() {
	it('should return fizzbuzz if divisible by 15', function() {
		[15,30,45].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});

	it('should return buzz if divisible by 5', function() {
		[5,10,20].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});

	it('should return fizz if divisible by 3', function() {
		[3,6,9,12,18].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});

	it('should return the same number if not divisible by 3 or 5', function() {
		[1,2,4,7,8].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});

	it('should return error if input is not a number', function() {
		const badInputs = ['hi',false,true,function(){},[1,2,3]];
		badInputs.forEach(function(input){
			expect(function(){
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});