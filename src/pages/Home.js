import React from "react";
import Categories from "../components/categories";
import News from "../components/news";
import Header from "../components/header";
import "../App.css";
let state;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    if (!state) {
      this.state = {
        filteredNews: [],
        color: ""
      };
    } else {
      this.state = state;
    }
  }

  componentWillUnmount() {
    state = this.state;
  }

  handleFilter = (news, isChecked, id, color) => {
    //this.setState({ filteredNews: this.state.filteredNews.concat(news) });
    if (isChecked) {
      this.setState(previousState => ({
        filteredNews: [...previousState.filteredNews, ...news],
        color: color
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
            <News news={this.state.filteredNews} color={this.state.color} />
          </div>
        </section>
      </div>
    );
  }
}
