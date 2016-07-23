import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class ChapterList extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			selectedChapter: 0
		}
	}

	handleSelect(chapterNumber) {
		const { book, onSelect } = this.props
		this.setState({
			selectedChapter: chapterNumber
		})
		onSelect(book.vcode, book.bcode, chapterNumber)
	}

	render() {
		const { book, onClose } = this.props
		const { selectedChapter } = this.state

		return (
			<div>
				<button className="btn_close" onClick={onClose}>&lt; 뒤로</button>
				<ul>
					{times(book.chapterCount, (i) =>
						<li key={i}>
							<a className={classnames({'selected':selectedChapter == (i + 1)})} onClick={e => this.handleSelect(i + 1)}>{book.name} {i + 1}</a>
						</li>
					)}
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
