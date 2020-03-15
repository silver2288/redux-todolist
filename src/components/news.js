import React from "react";
import getDetail from "../entities/Detail";

export default class News extends React.Component {
  componentDidUpdate() {}
  handleClick = detail => {
    //this.props.showDetail(detail);
    console.log("detail =>", detail);
  };
  render() {
    return (
      <article>
        {this.props.news.map((el, index) => (
          <div
            key={index}
            newsid={el.id}
            className="post"
            onClick={ev => {
              getDetail(el.categoryId, el.id).then(res => {
                const detail = res.data;
                this.handleClick(detail);
              });
            }}
          >
            <h4>{el.title}</h4>
            <p>{el.description}</p>
          </div>
        ))}
      </article>
    );
  }
}
