import React from "react";
import Categories from "./components/categories";
import News from "./components/news";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNews: []
    };
  }

  handleFilter = news => {
    this.setState({ filteredNews: news });
  };

  render() {
    return (
      <div className="container">
        <div className="regionLeft">
          <Categories filterNews={this.handleFilter} />
        </div>
        <div className="regionRight">
          <News news={this.state.filteredNews} />
        </div>
      </div>
    );
  }
}
