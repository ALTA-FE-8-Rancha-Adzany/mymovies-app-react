import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.src} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.summary.substring(0, 50)}</p>
          <a href="#" className="btn btn-primary">
            Detail page
          </a>
        </div>
      </div>
    );
  }
}
