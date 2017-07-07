import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

		fetch(`/bible/${newVcode}/${newBcode}/${newCnum}.json`)
			.then(response => response.json())
			.then(data => this.setState({ verses: data }))
			.catch(error => console.log(error))
	}

	render() {
		const { vcode, bcode, chapter, verses, fetching } = this.state

		let list;
		if (fetching) {
			list = <div className="loading">로딩 중...</div>
		} else if (verses.length > 0) {
			list = (
				<div>
					<Link to={`/${vcode}/${bcode}`} className="btn_close btn_verse">&lt; 뒤로</Link>
					<ol>
						{verses.map((verse, index) =>
							<li key={index}>{verse.content}</li>
						)}
					</ol>
				</div>
			)
		} else {
			list = (
				<div className="today">
					하나님의 말씀은 살았고 운동력이 있어<br />
					좌우에 날선 어떤 검보다도 예리하여<br />
					혼과 영과 및 관절과 골수를 찔러 쪼개기까지 하며<br />
					또 마음의 생각과 뜻을 감찰하나니<br />
					지으신 것이 하나라도 그 앞에 나타나지 않음이 없고<br />
					오직 만물이 우리를 상관하시는 자의<br />
					눈앞에 벌거벗은 것 같이 드러나느니라<br />
					<br />
					(히브리서 4:12, 13 KRV)
				</div>
			)
		}

		return list
	}
}

export default VerseList;
