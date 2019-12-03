import React from 'react';
import './styles.scss'

export default class Description extends React.Component {
    constructor() {
        super();
    } 
    render(){
        return (
            <div className="description">
                <h1> Occupation Overview </h1>{" "}
                <h3> {this.props.title} in {this.props.region}  </h3>
            </div>
        );
    }
}