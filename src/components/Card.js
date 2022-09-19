import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={`https:image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="test" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{this.props.data.title}</h5>
          <p className="card-text">{this.props.data.overview.substring(0, 100)}</p>
          <a href="#" className="btn btn-primary">
            Detail page
          </a>
        </div>
      </div>
    );
  }
}
