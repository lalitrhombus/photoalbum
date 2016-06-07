import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchAlbums,featchPhotos} from '../actions/index';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.props.featchAlbums();
    this.props.featchPhotos();
  }

  showUser(user){
    return(
      <div className="users" key={user.id}>
          <img src={`/public/userPhoto/${user.pic}`} alt="" className=""/>
          <p>{user.name}</p>
          <p className="userid"><span className="filled">{user.id}</span>id</p>
      </div>
    )
  }

  render() {
    console.log("album rendered");
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Users  <span className="shiftRight"><span className="colored">{this.props.users.length}</span> Sets</span></h1>
          {this.props.users.map((user)=>{ return this.showUser(user)})}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({featchAlbums,featchPhotos}, dispatch);
}

function mapStateToProps({users,photos,albums}){
  console.log("users: ", users)
  return {users,photos,albums};
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);