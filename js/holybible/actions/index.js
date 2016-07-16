import 'whatwg-fetch'
import * as types from "../constants/ActionTypes"

function receiveHolybible(bible) {
	return { type:types.RECEIVE_HOLYBIBLE, bible }
}

export function fetchHolybible() {
	return dispatch => {
		fetch("/bible.json")
			.then(response => response.json())
			.then(bible => dispatch(receiveHolybible(bible)))
			.catch(response => console.log(response))
	}
}
