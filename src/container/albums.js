import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchAlbums,featchPhotos} from '../actions/index';

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }

  showAlbums(album){
    return(
      <div className="photo" key={album.id}>
          <p>{album.title}</p>
          <p>{album.id}</p>
      </div>
    )
  }

  render() {
    console.log("album rendered");
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Albums  <span className="shiftRight"><span className="colored">{this.props.albums.length}</span> Sets</span></h1>
          {this.props.albums.map((album)=>{ return this.showAlbums(album)})}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({featchAlbums,featchPhotos}, dispatch);
}

function mapStateToProps({albums}){
      console.log("albums: ", albums)

  return {albums};
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums);