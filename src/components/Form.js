import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addArticle} from '../redux/actions/index';
import uuidv1 from "uuid";

class Form extends Component {
    
   constructor(props){
        super(props);
        this.state = {
            title : ""
        }
    }
   
    handleSubmit=(e)=>{
        e.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
   }
   
   handleChange = (e)=>{
     this.setState({[e.target.id]:[e.target.value]});
   }
  render() {
      const {title} = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    )
  }
}
function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }
export default connect(null,mapDispatchToProps) (Form);