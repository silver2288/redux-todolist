import React from "react";
import Detail from "../components/detail";
import "../App.css";

export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { params } = this.props.match;
    return (
      <div className="detail-container">
        <Detail categoryid={params.categoryid} id={params.id} />
      </div>
    );
  }
}
