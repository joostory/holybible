import axios from 'axios'
import * as types from "../constants/ActionTypes"

function receiveHolybible(bible) {
	return { type:types.RECEIVE_HOLYBIBLE, bible }
}

export function fetchHolybible(store) {
	axios.get('/bible.json')
		.then(r => store.dispatch(receiveHolybible(r.data)))
		.catch(e => console.log(e))
}
