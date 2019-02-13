import React, { Component } from 'react';
import './App.css';
import ArticlesListe from './components/ArticlesListe';
import Form from './components/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 },
        { title: "Redux and react", id: 3 }
      ]
    };
  }
  render() {
    return (
       <div className="row mt-5">
          
          <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <ArticlesListe/>
       </div>
       <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form/>
    </div>
   </div>
    )}
}

export default App;
