import React from 'react';

import './styles.scss';

export default class BlockOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
        <div className="block">
            <h2>{this.props.title}</h2>
            <div className="label">Jobs({this.props.label})</div>
            <div className="description">This is {this.props.description*100} percent <a className="green">{(this.props.description*100) > 100 ? 'above' : 'below'}</a>the national average. </div>
        </div>);
    }
} 
