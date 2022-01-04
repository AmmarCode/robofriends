import React, { Component } from 'react'

export class ErrorBoundry extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true})
	}

	render() {
		if (this.state.hasError){
			return <h1>Noooooo! We have a big problem!!</h1>
		} else {
			return this.props.children
		}		
	}
}

export default ErrorBoundry
