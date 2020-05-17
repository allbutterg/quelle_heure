import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            time: []
        }
    }


    handleTimeChange = (event) => {
        this.setState({
            time: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.time}`)
        event.preventDefault()
    }

    render() {
        return(

        <form onSubmit={this.handleSubmit}>
            <div>
                <div className="form" >
                    <label for="enterTime"> Enter Time (seconds): </label>
                    <input type = "number" id="enterTime" name="enterTime" value={this.state.time} onChange={this.handleTimeChange} />
                    <button type="submit">Submit</button>
                </div>

            </div>
        </form>

        );
    }
}

export default Form;
