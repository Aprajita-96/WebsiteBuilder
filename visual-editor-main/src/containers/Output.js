import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import documents from "../views/documents";
import actionTypes from "../constants/actionTypes";
import axios from 'axios';

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: props.html,
      filename: ''
    };
    this.handleDownload = this.handleDownload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleDownload() {
    const { html } = this.state;
    const element = document.createElement('a');
    const file = new Blob([html], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'sample.txt';
    document.body.appendChild(element);
    element.click();
  }
  
 saveDate = (e) => {

  e.preventDefault();
    this.props.dispatch({
      type: actionTypes.SAVE_BLOCKS_DATA,
      filename: this.state.filename
    }); 
    alert("saved the data successfully")
  }

  handleChange(e) {

    console.log("this props", this.props);
    e.preventDefault();
    this.setState({
      filename: e.target.value
    })
  }

  handleReset(e) {
    console.log("Reset Was Pressed");
    if(this.props.layout.webpageName==''){
    this.props.dispatch({
      type: actionTypes.RESET_BLOCK_DATA,
    }); 
  }else{
    this.props.dispatch({
      type:actionTypes.DELETE_FILE,
      filename: this.props.layout.webpageName
    })
    this.props.dispatch({
      type:actionTypes.RESET_BLOCK_DATA
    });
  }
  }

  render() {
    if (!this.props.display) return null;

    return (
      <div>
        <div className='d-flex justify-content-between align-items-center'>
          <h5>Export</h5>
        </div>
        <hr />
        <div>
          <label>Output HTML</label>
          <textarea readOnly className='form-control' rows={10} value={this.props.html}></textarea>
          <div className="mb-3 m-2">
            <label htmlFor="exampleFormControlInput1" className="form-label m-0"><b >Enter Web Page Name</b></label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Enter WebPage Name" 
            onChange={this.handleChange} 
            value={this.props.layout.webpageName == '' ? this.state.filename : this.props.layout.webpageName}
            />
          </div>
          <button type  className="btn btn-success m-2 " onClick={this.saveDate}>{this.props.layout.webpageName == '' ? "Save" : "Update"}</button>
          <button type  className="btn btn-primary m-2"  onClick={this.handleDownload}>Download</button>
          <button type  className="btn btn-danger m-2"  onClick={this.handleReset}>{this.props.layout.webpageName == '' ? "Reset" : "Delete"}</button>
        </div>
      </div>
    );
  }
}

Output.propTypes = {
  display: PropTypes.bool,
  html: PropTypes.bool,
};

const mapStateToProps = state => {
  let reduxState = {
    config: state.config,
    layout: state.layout,
  };

  return reduxState;
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Output);