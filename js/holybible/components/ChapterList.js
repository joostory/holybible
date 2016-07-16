import React, { Component, PropTypes } from 'react'

class ChapterList extends Component {
	render() {
		const { book, onSelect, onClose } = this.props;

		let list = times(book.chapterCount, (i) =>
			<li key={i}><a onClick={e => onSelect(book.vcode, book.bcode, i + 1)}>{book.name} {i + 1}</a></li>
		)

		return (
			<div>
				<button className="btn_close" onClick={onClose}>닫기</button>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}

function times(n, func) {
	let result = []
	for (let i = 0 ; i < n ; i++) {
		result[i] = func(i)
	}

	return result
}

ChapterList.propTypes = {
	book: PropTypes.object.isRequired,
	onSelect: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default ChapterList;
