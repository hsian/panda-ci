import React, { Component } from 'react';
import UserService from "./service";

let service = new UserService();

// 发布
class Publish extends Component {

	state = {
		user: ""
	}

	handleChange = (e) => {
		this.setState({
			user: e.target.value
		})
	}

	sendUser = () => {
		this.props.service.emit({user: this.state.user})
	}

	render(){
		return(
			<div>
				<input onChange={this.handleChange} />
				<button onClick={this.sendUser}>Submit</button>
			</div>
		)
	}
}

// 订阅
class Subscribe extends Component{

	// state = {
	// 	user: ""
	// }

	componentDidMount(){
		const {service} = this.props;

		// service.user().subscribe(res => {
		// 	this.setState({ user: res })
		// })

		// service.subscribe(res => {
		// 	this.setState({ user: res.user })
		// })
	}

	render(){
		const {service} = this.props;
		return(
			<div>
				{service.state.user}
				{service.state.age}
			</div>
		)
	}
}

function inject(Root, serviceArray = []){
	class Container extends Component{

		constructor(){
			super()

			let store = {}

			// 智障reduce
			serviceArray.forEach(service => {
				store[service.name] = service


				// 自动订阅
				service.subscribe(res => {

					let {store} = this.state;

					Object.keys(store).map(item => {
						const payload = store[item];

						if(res.name === payload.name){
							store[payload.name] = res;
						}
					})


					this.setState({
						store
					})
				})

			})

			this.state = {
				store
			}
		}

		render(){
			const {store} = this.state;
			
			return(
				<div>
					<Root store={store}/>
				</div>
			)
		}
	}
	return Container
}

class Stream extends Component {
	render(){
		const { store } = this.props;

		return(
			<div>
				<Publish service={store.user} />
				<Subscribe service={store.user}/>
			</div>
		)
	}
}

export default inject(Stream, [service])