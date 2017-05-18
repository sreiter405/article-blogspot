import React, {Component} from 'React'
import { render } from 'react-dom'

class TitleBar extends Component {
    constructor(props) {
        super(props);
        var counter = 0;
        this.state = {
            counter: counter
        }
        this.onCounterClick = this.onCounterClick.bind(this)
    }
    onCounterClick() {
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        return <div>
            <h2 onClick={this.onCounterClick}>{this.props.title}</h2>
            <p>My name is {this.props.name}</p>
            <p>{this.state.counter}</p>
    </div>
        
    }
}

module.exports = TitleBar;