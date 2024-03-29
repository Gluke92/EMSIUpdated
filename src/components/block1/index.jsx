import React from 'react';

import './styles.scss';

export default class BlockOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
        <div className="block1">
            <h2>{this.props.title}</h2>
            <p className="label1">Jobs({this.props.label})</p>
            <p className="description1">This is {this.props.description*100} percent <a className="green">{(this.props.description*100) > 100 ? 'above' : 'below'}</a>the national average. </p>
        </div>);
    }
} 
