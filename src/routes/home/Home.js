import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import {connect} from 'react-redux';


const title = 'Photo Album';

function showUser(user){
  return(
    <div className="users" key={user.id}>
        <img src={`/userPhoto/${user.pic}`} alt="" className=""/>
        <p>{user.name}</p>
    </div>
  )
}


function Home({ users }, context) {
  context.setTitle(title);
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Users  <span className="shiftRight"><span className="colored">{users.length}</span> Sets</span></h1>
        {users.map((user)=>{return showUser(user)})}
      </div>
    </div>
  );
}

Home.propTypes = {
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

function mapStateToProps({users}){
  return {users};
}

export default connect(mapStateToProps)(withStyles(s)(Home));