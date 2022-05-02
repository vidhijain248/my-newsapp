import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date }=this.props;
    return (
      <div>
        <div className="card">
  <img src={!imgUrl?"https://thehillstimes.in/wp-content/uploads/2022/03/editorial.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {author} on {date}</small></p>
    <a rel='noreferrer' href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem