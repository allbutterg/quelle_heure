import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {

    secondsInputtedChanged = (event) => {
        this.setState({
            secondsInputted: event.target.value
        });
    }

    render() {
        return(

            <div>
                <div className="form" >
                    <label for="enterTime"> Enter Time (seconds): </label>
                    <input type = "number" id="enterTime" name="enterTime" onChange={this.secondsInputted} />
                    <button type="submit">Submit</button>
                </div>

            </div>

        );
    }
}

export default Form;
