import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route } from 'react-router-dom'

import VersionList from './VersionList'
import BookList from './BookList'
import ChapterList from './ChapterList'

class VerseSelector extends Component {

	constructor(props, context) {
		super(props, context)

		this.state = {
			selectedVersion: null,
			selectedBook: null,
		}

		this.handleSelectChapter = this.handleSelectChapter.bind(this)
		this.handleSelectBook = this.handleSelectBook.bind(this)
		this.handleSelectVersion = this.handleSelectVersion.bind(this)

		this.handleCloseChapter = this.handleCloseChapter.bind(this)
		this.handleCloseBook = this.handleCloseBook.bind(this)
	}

	handleSelectChapter(vcode, bcode, cnum) {
		this.props.onSelect(vcode, bcode, cnum)
	}
	handleCloseChapter() {
		this.setState({ selectedBook: null })
	}

	handleSelectBook(book) {
		this.setState({ selectedBook: book })
	}
	handleCloseBook() {
		this.setState({ selectedVersion:null })
	}

	handleSelectVersion(version) {
		this.setState({ selectedVersion: version })
	}

	render() {
		const { versions } = this.props
		const { selectedBook, selectedVersion } = this.state

		return (
			<HashRouter>
				<div>
					<Route path="/" exact={true} component={VersionList} />
					<Route path="/:vcode" exact={true} component={BookList} />
					<Route path="/:vcode/:bcode" component={ChapterList} />
				</div>
			</HashRouter>
		)

		// if (selectedBook) {
		// 	return <ChapterList book={selectedBook} onSelect={this.handleSelectChapter} onClose={this.handleCloseChapter} />
		// } else if (selectedVersion) {
		// 	return <BookList version={selectedVersion} onSelect={this.handleSelectBook} onClose={this.handleCloseBook} />
		// } else {
		// 	return <VersionList versions={versions} onSelect={this.handleSelectVersion} />
		// }
	}
}

export default VerseSelector;
