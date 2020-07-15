import React, { useEffect } from "react";

import "regenerator-runtime/runtime";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions/fetchDataActions";

const NewsFeeds = ({ fetchData, news }) => {
  useEffect(() => {
    fetchData();
    return () => {};
  }, [fetchData]);
  console.log(news);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.hackernews,
  };
};

export default connect(mapStateToProps, { fetchData })(NewsFeeds);
