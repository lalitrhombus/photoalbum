import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchWeather} from '../actions/index';

class InputForm extends Component{
  constructor(props){
    super(props);
    this.state = {term:""};
  }
  onInputChange(event){
    this.setState({term:event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.featchWeather(this.state.term);
    this.setState({term:""});
  }
  render(){
    return(
      <div>
        <form action="" onSubmit={this.onFormSubmit.bind(this)} className="input-group">
          <input className="form-control" value={this.state.term}
            onChange={this.onInputChange.bind(this)}
            placeholder="enter serach input term" 
            type="text"
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({featchWeather},dispatch);
}


function mapStateToProps(state){
  return {
    weather:state.weather
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputForm);