import React from "react";
import { Link } from "react-router-dom";
// import getDetail from "../entities/Detail";

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
            // onClick={() => {
            //   getDetail(el.categoryId, el.id).then(res => {
            //     const detail = res.data;
            //     this.handleClick(detail);
            //   });
            // }}
          >
            <h4>{el.title}</h4>
            <p>{el.description}</p>
            <Link to={`detail/${el.categoryId}/${el.id}`}>More Info </Link>
          </div>
        ))}
      </article>
    );
  }
}
