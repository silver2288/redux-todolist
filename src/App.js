import React from "react";
import Categories from "./components/categories";
import News from "./components/news";
import Header from "./components/header";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNews: []
    };
  }

  handleFilter = (news, isChecked, id) => {
    //this.setState({ filteredNews: this.state.filteredNews.concat(news) });
    if (isChecked) {
      this.setState(previousState => ({
        filteredNews: [...previousState.filteredNews, ...news]
      }));
    } else {
      var checkedNews = this.state.filteredNews.filter(val => {
        return val.categoryId !== id;
      });
      this.setState({ filteredNews: checkedNews });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <section>
          <div className="regionLeft">
            <Categories filterNews={this.handleFilter} />
          </div>
          <div className="regionRight">
            <News news={this.state.filteredNews} />
          </div>
        </section>
      </div>
    );
  }
}
