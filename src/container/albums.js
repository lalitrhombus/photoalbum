import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchAlbums,featchPhotos} from '../actions/index';
import { Link } from 'react-router';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.albums.length==0){
      this.props.featchAlbums();
    }
  }

  showAlbums(album){
    if(this.props.params.userId){
      if(album.userId==this.props.params.userId){
        <div className="album" key={album.id}>
            <p className="id">{album.id}</p>
            <p className="title">{album.title}</p>
        </div>        
      }
      else
        return false;
    }

    return(
      <Link to={`/photos/${album.id}`} className="album" key={album.id}>
          <p className="id">{album.id}</p>
          <p className="title">{album.title}</p>
      </Link>
    )
  }

  render() {
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
  return {albums};
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums);