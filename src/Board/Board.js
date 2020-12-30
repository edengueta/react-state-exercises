import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedBoard: '',
		}
	}
	handleClick(e) {
		this.setState({
			selectedBoard: e.target.id,
		})
	}
	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div id="board1" className={`Board-${this.state.selectedBoard === "board1" ? 'selected' : 'option'}`} onClick={this.handleClick.bind(this)}>1</div>
					<div id="board2" className={`Board-${this.state.selectedBoard === "board2" ? 'selected' : 'option'}`} onClick={this.handleClick.bind(this)}>2</div>
					<div id="board3" className={`Board-${this.state.selectedBoard === "board3" ? 'selected' : 'option'}`} onClick={this.handleClick.bind(this)}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;