import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and dessert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'You',
			meal: ' ',
			restaurant: 'the restaurant',
			dessert: 'And of course we recommend a delicious dessert'
		};
	}
	nameChange(e) {
		this.setState({
			name: e.target.value
		})
	}
	mealChange(e) {
		this.setState({
			meal: `,  ${e.target.value}`
		})
	}
	restaurantChange(e) {
		this.setState({
			restaurant: e.target.value
		})
	}
	dessertChange(e) {
		if (e.target.checked) {
			this.setState({
				dessert: 'Additionally, our chef will make a special dessert for you!'
			})
		} else {
			this.setState({
				dessert: 'Are you sure you want to miss a delicious dessert?'
			})
		}
	}
	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input type="text" onChange={this.nameChange.bind(this)} />
				</div>
				<div>
					Choose restaurant:
					<select onChange={this.restaurantChange.bind(this)} >
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input type="text" onChange={this.mealChange.bind(this)} />
				</div>
				<div>
					Want a dessert?
					<input type="checkbox" onChange={this.dessertChange.bind(this)} />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal {this.state.meal} is available.<br />
					{this.state.dessert}
				</div>
			</div>
		);
	}
}

export default FoodPicker;