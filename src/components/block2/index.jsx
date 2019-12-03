import React from "react";

import "./styles.scss";

export default class BlockTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="block2">
          <h2> <a className="green">{this.props.title > 0 ? `+ ${this.props.title}` : `{this.props.title}`}</a> </h2> 
          <div> % Change({this.props.start} - {this.props.end}) </div>{" "}
          <div> Nation: <a className="green">{this.props.label > 0 ? '+' : '-'} {this.props.label} % </a></div>{" "}
        </div>
    );
  }
}
