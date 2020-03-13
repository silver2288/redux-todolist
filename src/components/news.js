import React from "react";

export default class News extends React.Component {
  componentDidUpdate() {
    console.log(this.props.news);
  }
  render() {
    return (
      <ul>
        {this.props.news.map((el, index) => (
          <li key={index}>{el.title}</li>
        ))}
      </ul>
    );
  }
}
