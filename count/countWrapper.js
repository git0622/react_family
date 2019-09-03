import React, { Component } from 'react';
import Counter from './cunter.js';
import { reducer } from './react_redux.js';
import { createStore } from 'redux';
const axios=require('axios');

let store = createStore(reducer);
class countWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: store.getState()
        };
    }
    componentDidMount() {
        axios.get('/api/data').then(res => {
            console.log("res", res);
        })
    }
    add() {
        store.dispatch({ type: 'INCREMENT' });
        store.subscribe(() => {
            this.setState({ value: store.getState() })
        })

    }
    sub() {
        store.dispatch({ type: 'DECREMENT' });
        store.subscribe(() => {
            this.setState({ value: store.getState() })
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Counter
                        value={this.state.value}
                        onIncrement={() => this.add()}
                        onDecrement={() => this.sub()}
                    />
                </div>
            </div>
        );
    }
}

export default countWrapper;