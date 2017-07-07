import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


@connect(state => ({
	versions: state.holybible.versions
}), dispatch => ({}))
class VersionList extends Component {
	render() {
		const { versions, onSelect } = this.props;

		return (
			<ul>
				{ versions.map(item =>
					<li key={item.vcode}><Link to={`/${item.vcode}`}>{item.name}</Link></li>
				)}
			</ul>
		)
	}
}

export default VersionList
