import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'

@connect(state => ({
	versions: state.holybible.versions
}), dispatch => ({}))
class VerseList extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			vcode: null,
			bcode: null,
			chapter: 0,
			verses: [],
			fetching: false
		}
	}

	componentDidMount() {
		const { versions, match } = this.props
		const { vcode, bcode, chapter } = match.params

		this.updateVerses(vcode, bcode, chapter)
	}

	componentWillReceiveProps(newProps) {
		const { versions, match } = newProps
		const { vcode, bcode, chapter } = match.params

		this.updateVerses(vcode, bcode, chapter)
	}

	updateVerses(newVcode, newBcode, newCnum) {
		const { vcode, bcode, cnum } = this.state
		if (vcode == newVcode && bcode == newBcode && cnum == newCnum) {
			return
		}

		this.setState({
			vcode: newVcode,
			bcode: newBcode,
			chapter: newCnum
		})

		axios.get(`/bible/${newVcode}/${newBcode}/${newCnum}.json`)
			.then(r => this.setState({ verses: r.data }))
			.catch(e => console.log(e))
	}

	render() {
		const { vcode, bcode, chapter, verses, fetching } = this.state

		if (fetching) {
			return <div className="loading">로딩 중...</div>
		} else {
			return (
				<div className="verses">
					<Link to={`/${vcode}/${bcode}`} className="btn_close btn_verse">&lt; 뒤로</Link>
					<ol>
						{verses.map((verse, index) =>
							<li key={index}>{verse.content}</li>
						)}
					</ol>
				</div>
			)
		}
	}
}

export default VerseList;
