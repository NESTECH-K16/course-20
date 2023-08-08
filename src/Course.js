import { Component, useEffect } from 'react'
// import {asdasd}

class Course extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'React JS',
			totalStudent: 9,
			teacher: 'Huy',
		}
	}

	setInfo = () => {
		this.setState({ name: 'New Course' }, () => {
			console.log(this.state.name)
		})
	}

	getFilms = async () => {
		try {
			const data = await fetch('https://swapi.dev/api/films/')
			const result = await data.json()
			console.log('result', result)
		} catch (error) {
			console.log(error)
		}
	}
	componentDidMount() {
		console.log('componentDidMount')
		this.getFilms()
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	shouldComponentUpdate(prevState, nextState) {
		if (prevState.name !== nextState.name) {
			this.getFilms()
			return 1
		}
	}
	componentDidCatch() {
		console.log('componentDidCatch')
	}

	render() {
		return (
			<div>
				<h2>{this.state.name}</h2>
				<p>{this.state.totalStudent}</p>
				<p>{this.state.teacher}</p>
				<h2>{this.props.name}</h2>
				<p>{this.props.total}</p>
				<p>{this.props.teacher}</p>
				<button onClick={this.setInfo}>Set Info</button>
			</div>
		)
	}
}

export default Course

