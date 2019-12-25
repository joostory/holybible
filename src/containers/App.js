import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import { HashRouter, Route, Link } from 'react-router-dom'

import VersionList from '../components/VersionList'
import BookList from '../components/BookList'
import ChapterList from '../components/ChapterList'
import VerseList from '../components/VerseList'
import Today from '../components/Today'

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
				<div className={classnames('main', {'dark': false})}>
					<header>
						<h1 className="title"><Link to="/">Holybible</Link></h1>
						<ul className="menu">
              <li><a href="https://play.google.com/store/apps/details?id=net.joostory.holybible">Download</a></li>
							<li><a href="https://oh-my-bible.tistory.com">About</a></li>
						</ul>
					</header>
					<section>
						<Route path="/" exact={true} component={VersionList} />
						<Route path="/:vcode" exact={true} component={BookList} />
						<Route path="/:vcode/:bcode" component={ChapterList} />
					</section>
					<article>
						<Route path="/:vcode/:bcode/:chapter" component={VerseList} />
						<Route path="*" component={Today} />
					</article>
				</div>
			</HashRouter>
		)
	}
}

export default App
