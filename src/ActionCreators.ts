//import * as actionTypes from './ActionTypes';
namespace IIIFComponents {

    export function register(c) {
      return { type: REGISTER, component: c }
    }

    export function update(c) {
      return { type: UPDATE, component: c }
    }

}
