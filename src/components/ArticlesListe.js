import React, { Component } from 'react'
import { connect } from 'react-redux';

class ArticlesListe extends Component {
    constructor(props){
        super(props);
    }
   
  render() {

    const articles = this.props.articles;

    return (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    )
  }
}
const mapStateToProps = state => {
    return { articles: state.articles };
  };

export default connect(mapStateToProps)(ArticlesListe);