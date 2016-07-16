import React, { Component, PropTypes } from 'react'

class VersionList extends Component {
	render() {
		const { versions, onSelect } = this.props;

		let versionList = versions.map(item =>
			<li key={item.vcode}><a onClick={e => onSelect(item)}>{item.name}</a></li>
		);

		return (
			<ul>
				{versionList}
			</ul>
		)
	}
}

VersionList.propTypes = {
	versions: PropTypes.array.isRequired,
	onSelect: PropTypes.func
}

export default VersionList
