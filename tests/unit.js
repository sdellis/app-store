require('ts-node/register')
var expect = require('chai').expect;
var types = require("../src/ActionTypes");
var actions = require("../src/ActionCreators");

// this is an example of unit testing the component
describe('boilerplateRedux unit tests', function() {

    it('true is true', function() {
        expect(true).to.be.true;
    });

    it('should create an action to change color', function() {
        const c = 'green'
        const expectedAction = {
          type: types.IIIFComponents.CHANGE_COLOR,
          c
        }

        expect(actions.IIIFComponents.changeColor(c)).toEqual(expectedAction)
    });

});
