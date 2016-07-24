import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import VerseSelector from '../components/VerseSelector'
import VerseList from '../components/VerseList'

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

		return(
			<div className={wrapClass}>
				<header>
					<h1 className="title">Holybible</h1>
				</header>
				<section>
					<VerseSelector versions={holybible.versions} onSelect={this.handleSelectVerse} />
				</section>
				<article>
					<VerseList vcode={vcode} bcode={bcode} cnum={cnum} onClose={this.handleCloseVerse} />
				</article>
			</div>
		)
	}
}

App.propTypes = {
	holybible: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    holybible: state.holybible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
