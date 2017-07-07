import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

@connect(state => ({
	versions: state.holybible.versions
}), dispatch => ({}))
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
		const { versions, match } = this.props
		const { vcode, bcode } = match.params

		let version = versions.find(item => item.vcode === vcode)
		let book = version.bibles.find(item => item.bcode == bcode)

		return (
			<div>
				<Link to={`/${vcode}`} className="btn_close">&lt; 뒤로</Link>
				<ul>
					{times(book.chapterCount, (i) =>
						<li key={i}>
							<NavLink to={`/${vcode}/${bcode}/${i+1}`} activeClassName='selected'>{book.name} {i + 1}</NavLink>
						</li>
					)}
				</ul>
			</div>
		)
	}
}

const times = (n, func) => {
	let result = []
	for (let i = 0 ; i < n ; i++) {
		result[i] = func(i)
	}

	return result
}

export default ChapterList;
