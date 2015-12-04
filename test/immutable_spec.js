import {expect} from 'chai';

describe('immutability', () => {
	function increment(currentState) {
		return currentState + 1;
	}
	it('is imutable', () => {
		let state = 5;
		let nextState = increment(state);
		expect(nextState).to.equal(6);
		expect(state).to.equal(5);
	})
})