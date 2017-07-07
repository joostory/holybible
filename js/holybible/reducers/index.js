import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const initialState = {
	versions: []
}

const receiveVerse = (state, version, book, chapter, verse) => {
	state[version][book][chapter] = verse;
	return state;
}

const holybible = (state = initialState, action) => {
	switch (action.type) {
		case types.RECEIVE_HOLYBIBLE:
			return Object.assign({}, state, { versions: action.bible });
		case types.RECEIVE_VERSE:
			return receiveVerse(state, action.version, action.book, action.chapter, action.verse);
		default:
			return state
	}
}

export default combineReducers({
	holybible
})
