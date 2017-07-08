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
	versions: state.holybible.versions
}), dispatch => ({}))
class App extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			version: null,
			book: null,
			chapter: null,
			verses: []
		}
	}

	render() {
		const { versions } = this.props

		if (versions.length == 0) {
			return (
				<div>로딩 중</div>
			)
		}

		return (
			<HashRouter>
				<div className="main">
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

export default App
