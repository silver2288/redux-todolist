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
  handleClick = (news, isChecked, id, color) => {
    this.props.filterNews(news, isChecked, id, color);
  };

  render() {
    return (
      <div>
        {this.state.categories.map((cat, index) => (
          <div key={index}>
            <input
              onClick={ev => {
                let isChecked = ev.currentTarget.checked;
                getNews(cat.id).then(res => {
                  const news = res.data;
                  this.handleClick(news, isChecked, cat.id, cat.color);
                });
              }}
              type="checkbox"
              id={cat.id}
              name={cat.title}
              value={cat.title}
            />
            <label htmlFor={cat.title}> {cat.title}</label>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
