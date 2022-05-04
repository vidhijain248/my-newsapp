// import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "technology",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    console.log("hemlo i am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
//   async updateNews(pageNo){
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     this.setState({
//         articles: parsedData.articles,
//         totalResults: parsedData.totalResults,
//         loading: false
//     })
// }
// async componentDidMount(){
//   this.updateNews();
// }
// handlePrevClick = async () => {
//   this.setState({ page: this.state.page - 1 });
//   this.updateNews();
// }
// handleNextClick = async () => {
//   this.setState({ page: this.state.page + 1 });
//   this.updateNews();
// }
  
  async componentDidMount() {
    // console.log("cdm");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=460d6ea0383b4be5a84061804178057e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrevClick = async () => {
    // console.log("you hit the previous button");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=460d6ea0383b4be5a84061804178057e&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    // console.log(" You hit the next click button");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=460d6ea0383b4be5a84061804178057e&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsPuppet- Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt } source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
