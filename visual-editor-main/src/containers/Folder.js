import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import documents from "../views/documents";
import actionTypes from "../constants/actionTypes";
import axios from 'axios';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedWebPages: [],
      activeStatus: "list-group-item list-group-item-action",
      activeIndex: null
    }

    this.myElementRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(){
    let folderData = async () => {
      let response =  await axios.get("http://localhost:8080/api/pages");
      this.setState({savedWebPages: response.data});
    };
    
    folderData();
  }
  
  handleClick(event, index) {

    console.log("this.state.savedWebPages[index]", this.state.savedWebPages[index]);

    this.props.dispatch({
    type: actionTypes.HYDRATE_REDUX_STATE,
    payload: this.state.savedWebPages[index]
  });
  }

  render() {
    if (!this.props.display) return null;

    return (
      <div>
        <div className="list-group" ref={this.myElementRef}>
          {this.state.savedWebPages.length ? this.state.savedWebPages.map((element, index) => (
            <a className = {this.state.activeStatus} 
            key={element.fileName} 
            onClick={(event) => this.handleClick(event, index)}
            ref={index}
            >{element.fileName}</a>
          )) : null}
        </div>
      </div>
    );
  }
}

Folder.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Folder);