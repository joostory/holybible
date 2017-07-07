import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'

import { HashRouter, Route } from 'react-router-dom'

import VersionList from '../components/VersionList'
import BookList from '../components/BookList'
import ChapterList from '../components/ChapterList'
import VerseList from '../components/VerseList'

@connect(state => ({
	holybible: state.holybible
}), dispatch => ({
	dispatch: dispatch
}))
class App extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			version: null,
			book: null,
			chapter: null,
			verses: []
		}

		this.handleSelectVerse = this.handleSelectVerse.bind(this)
		this.handleCloseVerse = this.handleCloseVerse.bind(this)
	}

	handleSelectVerse(vcode, bcode, cnum) {
		this.setState({
			vcode: vcode,
			bcode: bcode,
			cnum: cnum,
			verseOpen: true
		})
	}

	handleCloseVerse() {
		this.setState({
			verseOpen: false
		})
	}

	render() {
		const { holybible } = this.props;
		const { vcode, bcode, cnum, verseOpen } = this.state;

		let wrapClass = classnames({
			"main": true,
			"verse": verseOpen
		})

		if (holybible.versions.length == 0) {
			return (
				<div>로딩 중</div>
			)
		}

		return (
			<HashRouter>
				<div className={wrapClass}>
					<header>
						<h1 className="title">Holybible</h1>
					</header>
					<section>
						<Route path="/" exact={true} component={VersionList} />
						<Route path="/:vcode" exact={true} component={BookList} />
						<Route path="/:vcode/:bcode" component={ChapterList} />
					</section>
					<article>
						<Route path="/:vcode/:bcode/:chapter" component={VerseList} />
					</article>
				</div>
			</HashRouter>
		)
	}
}

App.propTypes = {
	holybible: PropTypes.object
}

export default App
