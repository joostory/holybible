import React, { Component, PropTypes } from 'react'

class BookList extends Component {
	render() {
		const { version, onSelect, onClose } = this.props

		let list = version.bibles.map(item =>
			<li key={item.bcode}><a onClick={e => onSelect(item)}>{item.name}</a></li>
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

BookList.propTypes = {
	version: PropTypes.object.isRequired,
	onSelect: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
}

export default BookList;
