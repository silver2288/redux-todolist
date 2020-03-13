import React from "react";

import getCategories from "../entities/Categories";
import getNews from "../entities/News";

export default class Categories extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    getCategories().then(res => {
      this.setState({ categories: res.data });
    });
  }
  handleClick = news => {
    this.props.filterNews(news);
  };

  render() {
    return (
      <ul>
        {this.state.categories.map((cat, index) => (
          <li
            key={index}
            onClick={() => {
              getNews(cat.id).then(res => {
                const news = res.data;
                this.handleClick(news);
              });
            }}
          >
            {cat.title}
          </li>
        ))}
      </ul>
    );
  }
}
