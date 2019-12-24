import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

@connect(state => ({
	versions: state.holybible.versions
}), dispatch => ({}))
class BookList extends Component {

	render() {
		const { versions, match } = this.props
		const { vcode } = match.params

		let version = versions.find(item => item.vcode === vcode)

		return (
			<div>
				<Link to={`/`} className="btn_close">&lt; 뒤로</Link>
				<ul>
					{ version.bibles.map(item =>
						<li key={item.bcode}><Link to={`/${vcode}/${item.bcode}`}>{item.name}</Link></li>
					)}
				</ul>
			</div>
		)
	}
}

export default BookList;
