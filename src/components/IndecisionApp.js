import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

// pull the state out of constructor
// convert all 4 event handlers to class properties (arrow function)
// delete the constructor completely
// start with class properties and end with method

export default class IndecisionApp extends React.Component {

	state = {
		options: []
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	};

	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			// Do nothing at all
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length != this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		console.log('componentWillUnmount!');
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick} 
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				 />
			</div>
		);
	}
}